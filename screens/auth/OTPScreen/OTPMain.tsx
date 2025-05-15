import { View, Text, TextInput, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/redux/Redux/hook/hook';
import { verifyOtp, resendOTP, setEmail } from '@/redux/Redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OTPMain() {
  const [otp, setOtp] = useState<string[]>([]);
  const [otpLength, setOtpLength] = useState(4); // Default OTP length
  const [timer, setTimer] = useState(119); // Set timer to 1 minute 59 seconds
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>([]);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined); // Ref to store timer interval
  
  // Connect to Redux
  const dispatch = useAppDispatch();
  const { loading, error, email, userId } = useAppSelector((state) => state.auth);
  const [successMessage, setSuccessMessage] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [localEmail, setLocalEmail] = useState<string | null>(null); // Local state for email as fallback

  useEffect(() => {
    // Get email from AsyncStorage as a fallback if not in Redux state
    const getEmailData = async () => {
      if (!email) {
        try {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          console.log('Retrieved email from storage:', storedEmail);
          if (storedEmail) {
            setLocalEmail(storedEmail);
            // Update Redux state
            dispatch(setEmail(storedEmail));
          }
        } catch (error) {
          console.error("Error getting email from AsyncStorage:", error);
        }
      } else {
        setLocalEmail(email);
      }
    };
    
    getEmailData();
    initializeOtpFields();
    startCountdown();
  
    // Cleanup interval on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [email, dispatch]);

  const initializeOtpFields = () => {
    // Initialize OTP fields
    const responseOtpLength = 4; // Or get from API
    setOtpLength(responseOtpLength);
    setOtp(Array(responseOtpLength).fill(''));
    inputRefs.current = Array(responseOtpLength)
      .fill(null)
      .map(() => React.createRef<TextInput>());
  };

  const startCountdown = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear any existing timer
    }
  
    setTimer(119); // Reset timer to 1 minute 59 seconds
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    // Handle clearing OTP
    if (text === '' && index === 0) {
      setOtp(Array(otpLength).fill('')); // Clear all OTP fields if backspace on first field
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputRefs.current.length - 1) {
      // Move to next field
      inputRefs.current[index + 1].current?.focus();
    } else if (text && index === inputRefs.current.length - 1) {
      // Last field filled, attempt verification
      verifyEnteredOtp(newOtp);
    }
  };

  const validateOtp = (otp: string[]) => {
    return otp.every(digit => digit !== '');
  };

  const verifyEnteredOtp = async (otpArray: string[]) => {
    if (!validateOtp(otpArray)) {
      setVerificationError('Please enter a valid OTP');
      return;
    }

    const otpString = otpArray.join('');
    
    try {
      const resultAction = await dispatch(verifyOtp(otpString));
      
      if (verifyOtp.fulfilled.match(resultAction)) {
        setSuccessMessage('OTP verification successful.');
        setVerificationError(''); // Clear error on success
        setOtpVerified(true); // Mark OTP as verified
        
        // Navigate to next screen after successful verification
        setTimeout(() => {
          router.push("/(routes)/create-password");
        }, 1000);
      } else {
        setVerificationError('Invalid OTP code');
        setSuccessMessage(''); // Clear success message on failure
        setOtpVerified(false); // Mark OTP as not verified
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setVerificationError('Verification failed');
      setOtpVerified(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await dispatch(resendOTP());
      startCountdown(); // Restart timer
      setOtp(Array(otpLength).fill(''));
      setVerificationError(''); // Clear error when the code is resent
      setSuccessMessage('OTP resent successfully'); // Message that OTP was resent
      setOtpVerified(false); // Reset OTP verified status
      
      // Focus on first input after resending
      if (inputRefs.current[0]?.current) {
        inputRefs.current[0].current.focus();
      }
    } catch (err) {
      console.error("Error resending OTP:", err);
      setVerificationError('Failed to resend OTP');
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Use either Redux email or local email
  const displayEmail = email || localEmail;

  return (
    <View style={styles.container}>
      {/* Display email if available */}
      {displayEmail ? (
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabel}>Verification code sent to:</Text>
          <Text style={styles.emailText}>{displayEmail}</Text>
        </View>
      ) : (
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabel}>Verification code sent to your email</Text>
        </View>
      )}
      
      <FlatList
        horizontal
        data={otp}
        renderItem={({ item, index }) => (
          <TextInput
            ref={inputRefs.current[index]}
            style={[
              styles.input,
              verificationError ? styles.inputError : null,
              otpVerified && item ? styles.inputSuccess : null,
            ]}
            value={item}
            onChangeText={text => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.otpContainer}
      />
      
      {/* Error and success messages */}
      {verificationError && !successMessage ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Entypo name="cross" size={24} color="red" style={styles.errorText} />
          <Text style={styles.errorText}>{verificationError}</Text>
        </View>
      ) : null}
      
      {successMessage && !verificationError ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Ionicons name="checkmark-circle-sharp" color={"#009217"} size={14} />
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      ) : null}
      
      {loading && <ActivityIndicator size="small" color="#DEBC8E" />}

      {/* Timer or "Get a new code" button */}
      {timer > 0 ? (
        <Text style={styles.timerText}>Get a new code in {formatTime()}</Text>
      ) : (
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendText}>Get a new code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  emailContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  emailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 18,
    color: '#333',
    marginHorizontal: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  inputSuccess: {
    borderColor: 'green',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  successText: {
    color: '#212121',
    fontWeight: "400",
    lineHeight: 19.6,
    fontSize: 14,
  },
  timerText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#DEBC8E',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});