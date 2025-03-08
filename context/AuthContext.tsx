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
// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   dateOfBirth: Date;
//   password: string;
//   gender: string;
//   dateCreated?: Date;
//   // Email verification
//   isEmailVerified?: boolean;
//   lastLogin: Date
//   loginOtp: any
//   emailVerificationCode?: any;
//   emailVerificationCodeExpires: Date;
//   transactionPin: string;
//   // Reset password
//   resetPasswordOtp?: number;
//   resetPasswordToken?: string;
//   resetPasswordExpires?: Date;
//   role: string;
//   // Profile
//   address: string;
//   phoneNumber: string;
//   country: string;
//   state: string;
//   city: string,
//   picture?: string;
// }

interface AuthContextType {
  email: string | null;
  setEmail: (email: string) => Promise<void>;
  clearEmail: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (firstName: string, lastName: string, email: string, gender: string, phoneNumber: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<VerifyOtpResponse>;
  resendOTP: () => Promise<void>;
  addPassword: (password: string, confirmPassword: string) => Promise<void>;
  addTransactionPin: (pin: string, confirmPin: string) => Promise<void>;
//   forgotPassword: (email: string) => Promise<void>;
  addResidentInfo: (address: string, country: string, state: string, phoneNumber: string) => Promise<void>;
  getUser: () => Promise<any>;
//   addBvn: (bvn: string) => Promise<void>;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
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
        setUserToken(token);
      }

      if (storedUserId) {
        setUserId(storedUserId);
      }
    }; 

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/login`, { email, password });
      console.log('login response', response);
  
      const lastLogin = new Date(response.data.lastLogin); // Assuming lastLogin is provided in the response
      const twentyDaysAgo = new Date();
      twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);
  
      if (response.data && response.data.token) {
        console.log('Token received:', response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.user._id);
        setUser(response.data.token);
        setUserId(response.data.user._id);
        setEmailState(email);
  
        // Check if the last login was 20 days or more ago
        if (lastLogin <= twentyDaysAgo) {
          console.log('Last login was 20 days or more ago');
          router.push("/(routes)/LoginOTP"); // Redirect to the screen for old logins
        } else {
          console.log('Last login was less than 20 days ago');
          router.push("/(tabs)/home"); // Redirect to the normal OTP screen
        }
      } else {
        console.error('Login failed: No token in response');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const getUser = async () => {
    try {
      if (!userId) {
        console.error('No user ID found');
        return;
      }
      const response = await axios.get(`${EXPO_PUBLIC_API_KEY}/api/v1/user/get/${userId}`, {
        headers: {
          'Authorization': `Bearer ${user}` // Add the authorization header
        }
      });
      console.log('user details', response);
      if (response.data) {
        console.log('Response:', response.data);
      } else {
        console.error('Failed to get user');
      }
      return response;
    } catch (error) {
      console.error('Failed to get user:', error);
    }
  }

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
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const resendOTP = async () => {
    try {
      if (!userId) {
        console.error('No user ID found');
        return;
        }
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/resend-otp/${userId}`
      );
      console.log('Sent OTP response', response);
    } catch (error) {
      console.error('Sending OTP error:', error);
    }
  }
  
  const verifyOtp = async (otp: string): Promise<VerifyOtpResponse> => {
    try {
      if (!userId) {
      console.error('No user ID found');
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

      const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/password/create/${userId}`, { password, confirmPassword });
      console.log('setPassword response', response);

      if (response.data && response.data.message) {
        console.log('Response:', response.data.message);
        router.push('/(routes)/Profile-created');
      } else {
        console.error('Set password failed');
      }
    } catch (error) {
      console.error('Set password error:', error);
    }
  };

  const addResidentInfo = async (address: string, country: string, state: string, city: string) => {
    try {
      const storedUserId = userId || await AsyncStorage.getItem('userId');
    
      if (!storedUserId) {
        console.error('No user ID found');
        return;
      }

      const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/add-address/${userId}`, { address, country, state, city });
      console.log('resident response', response);

      if (response.data && response.data.message) {
        console.log('Response:', response.data.message);
        router.push('/(routes)/kyc/identityscreen'); // Update this with your actual banks screen
      } else {
        console.error('Resident details failed: No user ID in response');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const addTransactionPin = async (pin: string, confirmPin: string) => {
    try {
      if (!userId) {
        console.error('No user ID found');
        return;
      }

      const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/transaction/create/${userId}`, 
        { pin, confirmPin },
        {
          headers: {
            'Authorization': `Bearer ${user}` // Add the authorization header
          }
        }
      );
      console.log('set pin response', response);

      if (response.data && response.data.message) {
        console.log('Response:', response.data.message);
        router.push('/(routes)/kyc/profilecomplete');
      } else {
        console.error('Set pin failed');
      }
    } catch (error) {
      console.error('Set pin error:', error);
    }
  };




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
    <AuthContext.Provider value={{ email, setEmail, clearEmail, login, logout, register, googleLogin, resendOTP, verifyOtp, addPassword, addResidentInfo, addTransactionPin, getUser }}>
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
