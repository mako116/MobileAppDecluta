import { View, Text, TextInput, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/redux/Redux/hook/hook';
import { verifyOtp, resendOTP } from '@/redux/Redux/slice/authSlice';

export default function OTPMainEmail() {
  const dispatch = useAppDispatch();
  const { loading, error: reduxError } = useAppSelector((state) => state.auth);
  
  const [otp, setOtp] = useState<string[]>([]);
  const [otpLength, setOtpLength] = useState(4); // Default OTP length
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timer, setTimer] = useState(60); // Set timer to 60 seconds
  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
  const [isVerifying, setIsVerifying] = useState(false); // Track verification state
  
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>([]);
  const timerRef = useRef<number | null>(null);
  const hasNavigated = useRef(false);

  useEffect(() => {
    fetchOtpLengthFromApi();
    startCountdown();
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  // Set error from Redux state if available
  useEffect(() => {
    if (reduxError) {
      setError(reduxError);
    }
  }, [reduxError]);

  const fetchOtpLengthFromApi = async () => {
    const responseOtpLength = 4; // Replace with actual API response length
    setOtpLength(responseOtpLength);
    setOtp(Array(responseOtpLength).fill(''));
    inputRefs.current = Array(responseOtpLength)
      .fill(null)
      .map(() => React.createRef<TextInput>());
  };

  const startCountdown = () => {
    if (timerRef.current !== null) clearInterval(timerRef.current); // Clear any existing timer
    setTimer(60); // Reset timer to 60 seconds
    timerRef.current = window.setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          if (timerRef.current !== null) clearInterval(timerRef.current);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const validateOtp = (otpString: string) => {
    return otpString.length === otpLength && /^\d+$/.test(otpString);
  };

  const handleDemoVerifyOtp = async (otp: string[]) => {
    if (isVerifying || hasNavigated.current) return; // Prevent duplicate execution
  
    const otpString = otp.join('');
  
    if (!validateOtp(otpString)) {
      setError('Please enter a valid OTP');
      return;
    }
  
    try {
      setIsLoading(true);
      setIsVerifying(true);
  
      console.log('OTP String:', otpString);
  
      // Simulate a successful OTP verification without API call
      setTimeout(() => {
        if (!hasNavigated.current) {
          hasNavigated.current = true; // Prevent further navigation
          setSuccessMessage('Email address verification successful.');
          setOtpVerified(true);
          router.push('/(routes)/CreatePassword'); // Navigate
        }
      }, 1000); // Simulate network delay
    } catch (error) {
      setError('Invalid Code');
      setOtpVerified(false);
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
      setIsVerifying(false);
      setError('');
    }
  };

  const handleVerifyOtp = async (otp: string[]) => {
    if (isVerifying) return; // Remove hasNavigated check to allow re-verification
    
    const otpString = otp.join('');
    
    if (!validateOtp(otpString)) {
      setError('Please enter a valid OTP');
      return;
    }
    
    try {
      setIsLoading(true);
      setIsVerifying(true);
      console.log('OTP String:', otpString);
      
      // Dispatch the Redux action with OTP as string
      const result = await dispatch(verifyOtp(otpString)).unwrap();
      console.log("Verification result:", result); // Add debugging log
      
      // Check if result exists with any success indicator (message or verified property)
      if (result && (result.message || result.verified)) {
        setSuccessMessage('Email address verification successful.');
        setOtpVerified(true);
        
        // Add small delay to ensure state updates before navigation
        setTimeout(() => {
          router.push('/(routes)/CreatePassword');
        }, 100);
      } else {
        // Handle case where result exists but doesn't have expected properties
        setError('Verification failed. Please try again.');
        setOtpVerified(false);
      }
    } catch (error) {
      console.error("Verification error:", error); // Add debugging log
      setError('Invalid Code');
      setOtpVerified(false);
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
      setIsVerifying(false);
    }
  };
  
  const handleChange = useCallback((text: string, index: number) => {
    if (text.length > 1) return;
  
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  
    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }
  
    // Debounce handleSignIn to prevent multiple calls
    if (newOtp.every(digit => digit !== '')) {
      setTimeout(() => handleVerifyOtp(newOtp), 300); // Use actual verification instead of demo
    }
  }, [otp]);

  const handleResendCode = async () => {
    try {
      setIsLoading(true);
      // Dispatch the Redux action instead of using context
      await dispatch(resendOTP());
      setSuccessMessage('OTP sent successfully');
    } catch (error) {
      setError('Unable to send OTP');
      setOtpVerified(false);
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
      setError('');
    }
    startCountdown();
    setOtp(Array(otpLength).fill(''));
    setOtpVerified(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={otp}
        renderItem={({ item, index }) => (
          <TextInput
            ref={inputRefs.current[index]}
            style={[
              styles.input,
              error ? styles.inputError : null,
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
      {/* Display only one of success or error message */}
      {error && !successMessage ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Entypo name="cross" size={24} color="red" style={styles.errorText} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
      {successMessage && !error ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Ionicons name="checkmark-circle-sharp" size={14} color={"#009217"} />
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      ) : null}
      {(isLoading || loading) && <ActivityIndicator size="small" color="#DEBC8E" />}

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
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 10,
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
    fontFamily: "Proxima Nova",
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
    fontFamily: "Proxima Nova",
  },
  successText: {
    color: '#212121',
    fontWeight: "400",
    lineHeight: 19.6,
    fontFamily: "Proxima Nova",
    fontSize: 14,
  },
  timerText: {
    fontSize: 14,
    color: '#333',
    fontFamily: "Proxima Nova",
    marginTop: 10,
  },
  resendText: {
    fontSize: 14,
    color: '#DEBC8E',
    fontFamily: "Proxima Nova",
    fontWeight: 'bold',
  },
});