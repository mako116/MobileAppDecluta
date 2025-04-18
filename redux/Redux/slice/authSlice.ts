// src/redux/features/auth/authSlice.ts - Updated version
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setAuthData } from '@/redux/slices/AuthSlice';

// Define the auth state type
interface AuthState {
  email: string | null;
  userId: string;
  userToken: string;
  loading: boolean;
  error: string | null;
  isEmailVerified: boolean;
}

const initialState: AuthState = {
  email: null,
  userId: '',
  userToken: '',
  loading: false,
  error: null,
  isEmailVerified: false,
};

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;


// Async thunks for auth actions
export const setEmail = createAsyncThunk(
  'auth/setEmail',
  async (email: string, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      return email;
    } catch (error) {
      console.error('Failed to save email to storage', error);
      return rejectWithValue('Failed to save email');
    }
  }
);


export const clearEmail = createAsyncThunk(
  'auth/clearEmail',
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem('userEmail');
      return null;
    } catch (error) {
      console.error('Failed to clear email from storage', error);
      return rejectWithValue('Failed to clear email');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/login`, { email, password });

      if (response.data && response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.user._id);
        await AsyncStorage.setItem('userEmail', email); // Also store email

        const lastLogin = new Date(response.data.lastLogin);
        const twentyDaysAgo = new Date();
        twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);

        // Determine the redirect path
        if (lastLogin <= twentyDaysAgo) {
          router.push("/(routes)/LoginOTP");
        } else {
          router.push("/(tabs)/home");
        }

        return {
          token: response.data.token,
          userId: response.data.user._id,
          email
        };
      } else {
        return rejectWithValue('Login failed: No token in response');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);


export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { userId, userToken } = state.auth;

      if (!userId) {
        return rejectWithValue('No user ID found');
      }

      const response = await axios.get(`${EXPO_PUBLIC_API_KEY}/api/v1/user/get/${userId}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });

      return response.data;
    } catch (error: any) {
      console.error('Failed to get user:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to get user');
    }
  }
);

export const googleLoginUser = createAsyncThunk(
  'auth/googleLogin',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://decluttakingsever.onrender.com/api/v1/auth/google-register`, { token });

      if (response.data && response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        router.push("/(routes)/LoginOTP");
        return {
          token: response.data.token
        };
      } else {
        return rejectWithValue('Login failed: No token in response');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({
    firstName,
    lastName,
    email,
    gender,
    phoneNumber
  }: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phoneNumber: string;
  }, { rejectWithValue }) => {
    // const dispatch = useDispatch();
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/register`, {
        firstName,
        lastName,
        email,
        gender,
        phoneNumber
      });

      if (response.data && response.data.newUser && response.data.newUser._id) {
        // dispatch(setAuthData({ token: response.data.token, user: response.data.newUser }));
        const newUserId = response.data.newUser._id;
        await AsyncStorage.setItem('userId', newUserId);

        // Save email to AsyncStorage as part of registration
        await AsyncStorage.setItem('userEmail', email);

        router.push("/(routes)/OTPEmail");
        return {
          userId: newUserId,
          email
        };
      } else {
        return rejectWithValue('Registration failed: No user ID in response');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { userId } = state.auth;

      if (!userId) {
        return rejectWithValue('No user ID found');
      }

      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/resend-otp/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error('Sending OTP error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to resend OTP');
    }
  }
);


export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (otp: string, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { userId } = state.auth;

      let effectiveUserId = userId;

      if (!effectiveUserId) {
        // to get userId from AsyncStorage if not in state
        const storedUserId = await AsyncStorage.getItem('userId');
        if (!storedUserId) {
          return rejectWithValue('No user ID found');
        }
        effectiveUserId = storedUserId;
      }

      let effectiveEmail = state.auth.email;
      if (!effectiveEmail) {
        // to get userId from AsyncStorage if not in state
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (!storedEmail) {
          return rejectWithValue('No user ID found');
        }
        effectiveEmail = storedEmail;
      }

      // Force the OTP to be a string 
      const stringifiedOTP = String(otp);

      console.log('OTP type before API call:', typeof stringifiedOTP);
      console.log('OTP value before API call:', JSON.stringify({ otp: stringifiedOTP }));

      // Configure axios with proper headers
      const requestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };

      // Construct full URL for debugging
      const apiUrl = `${EXPO_PUBLIC_API_KEY}/api/v1/auth/email/verify-otp/${effectiveEmail}`;
      console.log('API URL:', apiUrl);

      const response = await axios.post(
        apiUrl,
        { otp: stringifiedOTP },
        requestConfig
      );

      console.log('API Response:', response.status, response.data);

      // Pass through the response message
      if (response.data) {
        return response.data;
      }

      return rejectWithValue('OTP verification failed');
    } catch (error: any) {
      console.error('Email verification error details:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        config: error.config?.url
      });
      return rejectWithValue(error.response?.data?.message || 'OTP verification failed');
    }
  }
);


export const addPassword = createAsyncThunk(
  'auth/addPassword',
  async ({
    password,
    confirmPassword,
    userId
  }: {
    password: string;
    confirmPassword: string;
    userId?: string
  }, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      let effectiveUserId = userId;

      if (!effectiveUserId) {
        effectiveUserId = state.auth.userId;
      }

      if (!effectiveUserId) {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (!storedUserId) {
          return rejectWithValue('No user ID found');
        }
        effectiveUserId = storedUserId;
      }

      const response = await axios.patch(
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/password/create/${effectiveUserId}`,
        { password, confirmPassword }
      );

      if (response.data && response.data.message) {
        router.push('/(routes)/Profile-created');
        return response.data;
      } else {
        return rejectWithValue('Set password failed');
      }
    } catch (error: any) {
      console.error('Set password error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to set password');
    }
  }
);



export const addResidentInfo = createAsyncThunk(
  'auth/addResidentInfo',
  async ({ address, country, state, city }: { address: string; country: string; state: string; city: string }, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { userId } = state.auth;

      if (!userId) {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (!storedUserId) {
          return rejectWithValue('No user ID found');
        }
      }

      const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/add-address/${userId}`, { address, country, state, city });

      if (response.data && response.data.message) {
        router.push('/(routes)/kyc/identityscreen');
        return response.data;
      } else {
        return rejectWithValue('Resident details failed');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to add resident info');
    }
  }
);

export const addTransactionPin = createAsyncThunk(
  'auth/addTransactionPin',
  async ({ pin, confirmPin }: { pin: string; confirmPin: string }, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const { userId, userToken } = state.auth;

      if (!userId) {
        return rejectWithValue('No user ID found');
      }

      const response = await axios.patch(
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/transaction/create/${userId}`,
        { pin, confirmPin },
        {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        }
      );

      if (response.data && response.data.message) {
        router.push('/(routes)/kyc/profilecomplete');
        return response.data;
      } else {
        return rejectWithValue('Set pin failed');
      }
    } catch (error: any) {
      console.error('Set pin error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to set PIN');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      router.push("/(routes)/splashscren");
      return null;
    } catch (error) {
      console.error('Logout error:', error);
      return rejectWithValue('Failed to logout');
    }
  }
);

export const initializeAuth = createAsyncThunk(
  'auth/initialize',
  async (_, { rejectWithValue }) => {
    try {
      const [token, userId, email] = await Promise.all([
        AsyncStorage.getItem('token'),
        AsyncStorage.getItem('userId'),
        AsyncStorage.getItem('userEmail')
      ]);

      return {
        token: token || '',
        userId: userId || '',
        email: email || null
      };
    } catch (error) {
      console.error('Auth initialization error:', error);
      return rejectWithValue('Failed to initialize auth');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/forgot-password`,
        { email }
      );

      if (response.data && response.data.message) {
        // Save email to Redux state AND AsyncStorage
        await dispatch(setEmail(email));

        router.push('/(routes)/PasswordResetOtp');
        return { email, message: response.data.message };
      } else {
        return rejectWithValue('Forgot password request failed');
      }
    } catch (error: any) {
      console.error('Forgot password error:', error);
      return rejectWithValue(error.response?.data?.message || 'Forgot password request failed');
    }
  }
);



export const verifyResetPasswordOtp = createAsyncThunk(
  'auth/verifyResetPasswordOtp',
  async (
    { email, otp }: { email: string | null; otp: string },
    { getState, rejectWithValue }
  ) => {
    try {
      let effectiveEmail = email;


      if (!effectiveEmail) {
        const state: any = getState();
        effectiveEmail = state.auth.email;

        // If still not available, try AsyncStorage
        if (!effectiveEmail) {
          effectiveEmail = await AsyncStorage.getItem('userEmail');
          if (!effectiveEmail) {
            return rejectWithValue('No email found');
          }
        }
      }

      // Force the OTP to be a string
      const stringifiedOTP = String(otp);

      const response = await axios.post(
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/password/verify-otp/${effectiveEmail}`,
        { otp: stringifiedOTP },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.data && response.data.message) {
        router.push('/(routes)/reset-password');
        return response.data;
      } else {
        return rejectWithValue('OTP verification failed');
      }
    } catch (error: any) {
      console.error('Reset password OTP verification error:', error);
      return rejectWithValue(error.response?.data?.message || 'OTP verification failed');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (
    { password, confirmPassword }:
      { password: string; confirmPassword: string },
    { getState, rejectWithValue }
  ) => {
    try {
      // Get email from state or AsyncStorage
      const state: any = getState();
      let email = state.auth.email;

      if (!email) {
        email = await AsyncStorage.getItem('userEmail');
        if (!email) {
          return rejectWithValue('No email found');
        }
      }

      const response = await axios.post(
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/reset-password`,
        { email, password, confirmPassword }
      );

      if (response.data && response.data.message) {
        router.push('/(routes)/login');
        return response.data;
      } else {
        return rejectWithValue('Password reset failed');
      }
    } catch (error: any) {
      console.error('Reset password error:', error);
      return rejectWithValue(error.response?.data?.message || 'Password reset failed');
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Set email
    builder.addCase(setEmail.fulfilled, (state, action) => {
      state.email = action.payload;
    });

    // Clear email
    builder.addCase(clearEmail.fulfilled, (state) => {
      state.email = null;
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userToken = action.payload.token;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Google Login
    builder.addCase(googleLoginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(googleLoginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userToken = action.payload.token;
    });
    builder.addCase(googleLoginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload.userId;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });


    // Verify OTP
    builder.addCase(verifyOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyOtp.fulfilled, (state) => {
      state.loading = false;
      state.isEmailVerified = true;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.isEmailVerified = false;
    });


    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.email = null;
      state.userId = '';
      state.userToken = '';
    });

    // Initialize auth
    builder.addCase(initializeAuth.fulfilled, (state, action) => {
      state.userToken = action.payload.token;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });

  },
});

export default authSlice.reducer;