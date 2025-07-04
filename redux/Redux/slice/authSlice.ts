// src/redux/features/auth/authSlice.ts - Updated version
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router';
import { setAuthData } from '@/redux/slices/AuthSlice';
import { RootState } from '@/redux/store';

// Define the auth state type
interface AuthState {
  email: string | null;
  userId: string;
  userToken: string;
  loading: boolean;
  error: string | null;
  isEmailVerified: boolean;
  userData: UserData | null; 
}
interface UserData {
  _id: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  address?: string;
  BankVerificationNumberVerified?: boolean;
  NationalIdentityNumberVerified?: boolean;
  state?: string;
  city?: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
  profileImage: string;
}

const initialState: AuthState = {
  email: null,
  userId: '',
  userToken: '',
  loading: false,
  error: null,
  isEmailVerified: false,
  userData: null,
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

export const setUserPhoneNumber = createAsyncThunk(
  'auth/setEmail',
  async (phone: string, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem('phoneNumber', phone);
      return phone;
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

export const loginWithTokenUser = createAsyncThunk(
  'auth/loginWithToken',
  async (_, { rejectWithValue, dispatch, getState }) => {
    // Use getState instead of useSelector
    // const state = getState() as RootState;
    // const token = state.auth.token;
    const token = await AsyncStorage.getItem('token');
    
    try {
      if (!token) {
        return rejectWithValue('Token login failed: No token found');
      }

      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_KEY}/api/v1/auth/token-login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data.user;
      console.log('User data response:', user);

      if (user) {
        await AsyncStorage.setItem('userId', user._id);
        await AsyncStorage.setItem('userEmail', user.email);

        // Save to Redux
        dispatch(setAuthData({ token, user }));
        
        return { token, user };
      } else {
        return rejectWithValue('Token login failed: No user in response');
      }
    } catch (error: any) {
      console.error('Token login error:', error);
      return rejectWithValue(error.response?.data?.message || 'Invalid or expired token');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/login`, { email, password });

      if (response.data && response.data.token) {
        console.log('Login response:', response.data);
        console.log('Login response:', response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.userId);
        await AsyncStorage.setItem('userEmail', email); // Also store email
        
        // Dispatch the auth data to the store
        dispatch(setAuthData({ 
          token: response.data.token, 
          user: response.data.user 
        }));
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
      console.error('Login error:', error.response?.data?.message);
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const loginUserWithPin = createAsyncThunk(
  'auth/login/pin',
  async ({ pin }: {pin: string }, { rejectWithValue, dispatch }) => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/login-with-pin`, { email: storedEmail, pin });

      if (response.data && response.data.token) {
        console.log('Login response:', response.data.token);
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.user._id);
        
        // Dispatch the auth data to the store
        dispatch(setAuthData({ 
          token: response.data.token, 
          user: response.data.user 
        }));
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
          data: response.data
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
  async (token: string | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/google/signup"`, { token });

      if (response.data && response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        router.push("/(routes)/LoginOTP");
        return {
          token: response.data.token
        };
      } else {
        return rejectWithValue('Goolge sign up failed: No token in response');
      }
    } catch (error: any) {
      console.error('Goolge sign up error:', error.response?.data?.message);
      return rejectWithValue(error.response?.data?.message || 'Goolge sign up failed');
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
  }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/register`, {
        firstName,
        lastName,
        email,
        gender,
        phoneNumber
      });

      if (response.data && response.data.newUser && response.data.newUser._id) {
        console.log('Registration response:', response.data);
        const token = response.data.token;
        const newUserId = response.data.newUser._id;
        await AsyncStorage.setItem('userId', newUserId);

        // Save email to AsyncStorage as part of registration
        await AsyncStorage.setItem('userEmail', email);
        dispatch(setAuthData({ 
          token: token, 
          user: response.data.newUser,
        }));

        router.push("/(routes)/OTPEmail");
        return {
          userId: newUserId,
          email
        };
      } else {
        return rejectWithValue('Registration failed: No user ID in response');
      }
    } catch (error: any) {
      console.error('Registration error:', error.response?.data?.message);
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

export const addPinPassword = createAsyncThunk(
  'auth/addPinPassword',
  async ({
    newPin,
    userId
  }: {
    newPin: string;
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
        `${EXPO_PUBLIC_API_KEY}/api/v1/auth/set-pin/create/${effectiveUserId}`,
        { newPin}
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
      // const reduxState: any = getState() as RootState;
      // const { userId } = reduxState.auth.userId;
      const userId = await AsyncStorage.getItem('userId');

      if (!userId) {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (!storedUserId) {
          return rejectWithValue('No user ID found');
        }
      }

      const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/add-address/${userId}`, { address, country, state, city });
      console.log('Resident info response:', response );

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
      router.push("/(routes)/login");
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

// export const addResidentInfo = createAsyncThunk(

//   'auth/addResidentInfo',
//   async ({ address, country, state, city }: { address: string; country: string; state: string; city: string }, { getState, rejectWithValue }) => {
//     try {
//       const state: any = getState();
//       const { userId } = state.auth;
//       if (!userId) {
//         const storedUserId = await AsyncStorage.getItem('userId');
//         if (!storedUserId) {
//           return rejectWithValue('No user ID found');
//         }
//         userId = storedUserId;
//       }
//       const response = await axios.patch(`${EXPO_PUBLIC_API_KEY}/api/v1/auth/add-address/${userId}`, { address, country, state, city });
//       if (response.data && response.data.message) {
//         router.push('/(routes)/kyc/identityscreen');
//         return response.data;
//       } else {
//         return rejectWithValue('Resident details failed');
//       }
//     } catch (error: any) {
//       console.error('Registration error:', error);
//       return rejectWithValue(error.response?.data?.message || 'Failed to add resident info');
//     }
//   }
// );

// Create the auth slice

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<{ token: string; user: UserData }>) => {
      state.userToken = action.payload.token;
      state.userData = action.payload.user;
      state.email = action.payload.user.email;

      // Save to AsyncStorage
      AsyncStorage.setItem('token', action.payload.token);
      AsyncStorage.setItem('email', action.payload.user.email);
    },
    clearAuthData: (state) => {
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('email');
      AsyncStorage.removeItem('lastLogin');

      return initialState;
    },
    updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
      if (state.userData) {
          const { name, email, password, createdAt, phoneNumber, firstName, lastName } = action.payload;
          if (firstName !== undefined) state.userData.firstName = firstName;
          if (lastName !== undefined) state.userData.lastName = lastName;
          if (phoneNumber !== undefined) state.userData.phoneNumber = phoneNumber;
          if (password !== undefined) state.userData.password = password;
          if (name !== undefined) state.userData.name = name;
          if (createdAt !== undefined) state.userData.createdAt = createdAt;
          if (email !== undefined) state.userData.email = email;
          if (phoneNumber !== undefined) state.userData.phoneNumber = phoneNumber;
      }
    },
  },
  extraReducers: (builder) => {
    // Set email
    builder.addCase(setEmail.fulfilled, (state, action) => {
      state.email = action.payload;
    });

    // Clear email
    builder.addCase(clearEmail.fulfilled, (state) => {
      state.email = null;
    });

    // login with token
    builder.addCase(loginWithTokenUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginWithTokenUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userToken = action.payload.token;
    });
    builder.addCase(loginWithTokenUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
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