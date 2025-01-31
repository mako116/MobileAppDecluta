import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router';

type VerifyOtpResponse = {
  data: {
    success: boolean;
    message: string;
  };
};

interface AuthContextType {
  user: string | null;
  email: string | null;
  setEmail: (email: string) => Promise<void>;
  clearEmail: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (firstName: string, lastName: string, email: string, gender: string, phoneNumber: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  verifyOtp: (otp: number) => Promise<VerifyOtpResponse>;
  resendOTP: () => Promise<void>;
  addPassword: (password: string, confirmPassword: string) => Promise<void>;
//   forgotPassword: (email: string) => Promise<void>;
//   addResidentInfo: (address: string, country: string, state: string, phoneNumber: string) => Promise<void>;
//   addBvn: (bvn: string) => Promise<void>;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState<string | null>(null);
  const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const [email, setEmailState] = useState<string | null>(null);

  // Save email to AsyncStorage and update state
  const setEmail = async (email: string) => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      setEmailState(email);
      console.log(email)
    } catch (error) {
      console.error('Failed to save email to storage', error);
    }
  };

  // Clear email from AsyncStorage and update state
  const clearEmail = async () => {
    try {
      await AsyncStorage.removeItem('userEmail');
      setEmailState(null);
    } catch (error) {
      console.error('Failed to clear email from storage', error);
    }
  };

  // Load email from AsyncStorage when the app 
  useEffect(() => {
    const loadEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setEmailState(storedEmail);
        }
      } catch (error) {
        console.error('Failed to load email from storage', error);
      }
    };

    loadEmail();
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      const storedUserId = await AsyncStorage.getItem('userId');

      if (token) {
        setUser(token);
      }

      if (storedUserId) {
        setUserId(storedUserId);
      }
    }; 

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`http://192.168.0.184:8081/api/v1/auth/login`, { email, password });
      console.log('login response', response);

      if (response.data && response.data.token) {
        console.log('Token received:', response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        setUser(response.data.token);
        router.push("/(routes)/LoginOTP"); // Update this with your actual splashscren screen
      } else {
        console.error('Login failed: No token in response');
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error');
    }
  };

  const googleLogin = async (token: string) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/auth/google-register`, {token})
      console.log('Google login response', response);
      if (response.data && response.data.token) {
        console.log('Token received:', response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        setUser(response.data.token);
        router.push("/(routes)/LoginOTP"); // Update this with your actual splashscren screen
      } else {
        console.error('Login failed: No token in response');
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error');
    }
  }

  const register = async (firstName: string, lastName: string, email: string, gender: string, phoneNumber: string) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/register`,
      { 
        firstName,
        lastName,
        email,
        gender,
        phoneNumber
      });
      console.log('register response', response);

      if (response.data && response.data.newUser && response.data.newUser._id) {
        console.log('user ID:', response.data.newUser._id);
        const newUserId = response.data.newUser._id;
        await AsyncStorage.setItem('userId', newUserId);  // Set the userId state here
        setUserId(newUserId);
        router.push("/(routes)/OTPEmail");
      } else {
        console.error('Registration failed: No user ID in response');
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration error');
    }
  };

  const resendOTP = async () => {
    try {
      if (!userId) {
        console.error('No user ID found');
        alert('No user ID found');
        return;
        }
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/resend-otp/${userId}`
      );
      console.log('Sent OTP response', response);
    } catch (error) {
      console.error('Sending OTP error:', error);
      alert('Resend otp error');
    }
  }
  
  const verifyOtp = async (otp: number): Promise<VerifyOtpResponse> => {
    try {
      if (!userId) {
      console.error('No user ID found');
      alert('No user ID found');
      throw new Error('No user ID found');      
    }

      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/verify-otp/${userId}`, { otp });
      console.log('verifyOtp response', response);

      if (response.data && response.data.message) {
        console.log('Response message:', response.data.message);
      }
      return response;
    } catch (error) {
      console.error('Email verification error:', error);
      alert('Email verification error');
      throw error;
    }
  };

  const addPassword = async (password: string, confirmPassword: string) => {
    try {
      if (!userId) {
        console.error('No user ID found');
        alert('No user ID found');
        return;
      }

      const response = await axios.put(`${EXPO_PUBLIC_API_KEY}api/v1/auth/password/create/${userId}`, { password, confirmPassword });
      console.log('setPassword response', response);

      if (response.data && response.data.message) {
        console.log('Response:', response.data.message);
        alert('Password set successfully');
      } else {
        console.error('Set password failed');
        alert('Set password failed');
      }
    } catch (error) {
      console.error('Set password error:', error);
      alert('Set password error');
    }
  };

//   const addResidentInfo = async (address: string, country: string, state: string, phoneNumber: string) => {
//     try {
//       const storedUserId = userId || await AsyncStorage.getItem('userId');
    
//       if (!storedUserId) {
//         console.error('No user ID found');
//         alert('No user ID found');
//         return;
//       }

//       const response = await axios.put(`${API_URL}api/v1/individual/auth/add-address/${userId}`, { address, country, state, phoneNumber });
//       console.log('resident response', response);

//       if (response.data && response.data.message) {
//         console.log('Response:', response.data.message);
//         navigation.navigate('splashscren'); // Update this with your actual banks screen
//       } else {
//         console.error('Resident details failed: No user ID in response');
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('Registration error');
//     }
//   };

//   const addBvn = async (bvn: string) => {
//     try {
//       const storedUserId = userId || await AsyncStorage.getItem('userId');
    
//       if (!storedUserId) {
//         console.error('No user ID found');
//         alert('No user ID found');
//         return;
//       }

//       const response = await axios.put(`${API_URL}api/v1/individual/auth/add-bvn/${userId}`, { bvn });
//       console.log('added Bvn response', response);

//       if (response.data && response.data.message) {
//         console.log('Response:', response.data.message);
//         navigation.navigate('splashscren'); // Update this with your actual password screen
//       } else {
//         console.error('Resident details failed: No user ID in response');
//         alert('Registration failed');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('Registration error');
//     }
//   };




//   const forgotPassword = async (email: string) => {
//     try {
//       const response = await axios.post(`${API_URL}api/v1/auth/forgot-password`, { email });
//       console.log('forgotPassword response', response);

//       if (response.data && response.data.success) {
//         alert('Password reset email sent');
//       } else {
//         console.error('Forgot password failed');
//         alert('Forgot password failed');
//       }
//     } catch (error) {
//       console.error('Forgot password error:', error);
//       alert('Forgot password error');
//     }
//   };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    setUser(null);
    router.push("/(routes)/splashscren"); // Update this with your actual login screen
  };

  return (
    // addPassword, forgotPassword, addResidentInfo, addBvn, verifyOtp
    <AuthContext.Provider value={{ user, email, setEmail, clearEmail, login, logout, register, googleLogin, resendOTP, verifyOtp, addPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
