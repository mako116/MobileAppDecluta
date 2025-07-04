import { View, Text, TextInput, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function OTPPhoneLogin() {
  const [otp, setOtp] = useState<string[]>([]);
  const [otpLength, setOtpLength] = useState(4); // Default OTP length
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timer, setTimer] = useState(60); // Set timer to 1 minute 59 seconds
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to store timer interval
  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
 
  useEffect(() => {
    fetchOtpLengthFromApi();
    startCountdown();
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current); // Clear timer on component unmount
      }
    };
  }, []);

  const fetchOtpLengthFromApi = async () => {
    const responseOtpLength = 4; // Replace with actual API response length
    setOtpLength(responseOtpLength);
    setOtp(Array(responseOtpLength).fill(''));
    inputRefs.current = Array(responseOtpLength)
      .fill(null)
      .map(() => React.createRef<TextInput>());
  };

  const startCountdown = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current); // Clear any existing timer
    }
    setTimer(60); // Reset timer to 1 minute 59 seconds
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(timerRef.current as NodeJS.Timeout);
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
      setOtp(Array(otpLength).fill('')); // Clear all OTP fields if the user presses backspace on the first field
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current?.focus();
    } else if (index === inputRefs.current.length - 1) {
      handleSignIn(newOtp);
    }
  };

  const validateOtp = (otp: string[]) => {
    return otp.every(digit => digit !== '');
  };

  const handleSignIn = (otp: string[]) => {
    if (!validateOtp(otp)) {
      setError('Please enter a valid OTP');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const enteredOtp = otp.join('');
      if (enteredOtp === '1234') { // Replace with actual OTP verification
        setSuccessMessage('Phone number verification successful.');
        setError(''); // Clear error on success

        setOtpVerified(true); // Mark OTP as verified
        router.push("/(routes)/welcomebackPIn"); // Navigate to OTPEmail page on success
      } else {
        setError('Invalid Code');
        setSuccessMessage(''); // Clear success message on failure
        setOtpVerified(false); // Mark OTP as not verified
      }
    }, 3000);
  };

  const handleResendCode = () => {
    startCountdown(); // Restart timer
    setOtp(Array(otpLength).fill(''));
    setError(''); // Clear error when the code is resent
    setSuccessMessage(''); // Clear success message on resend
    setOtpVerified(false); // Reset OTP verified status
    // Trigger OTP resend API call here if needed
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
              otpVerified && item ? styles.inputSuccess : null, // Apply success border color
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
          <Entypo name="cross" size={24} color="#E42527" style={styles.errorText} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
      {successMessage && !error ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Ionicons name="checkmark-circle-sharp" size={24} style={styles.successText} />
          <Text style={[styles.successText,{color:"#000"}]}>{successMessage}</Text>
        </View>
      ) : null}
      {isLoading && <ActivityIndicator size="small" color="#007bff" />}

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
    paddingHorizontal: 15,
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
    marginRight: 5,
  },
  inputError: {
    borderColor: '#E42527',
  },
  inputSuccess: {
    borderColor: '#009217', // Success border color when OTP is verified
  },
  errorText: {
    color: '#E42527',
    fontSize: 14,
    marginBottom: 10,
  },
  successText: {
    color: '#009217',
    fontSize: 16,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  
  resendText: {
    fontSize: 14,
    color: '#DEBC8E',
    fontWeight: 'bold',
  },
});
