import { setAuthData } from "@/redux/slices/AuthSlice";
import useAxios from "@/utils/useAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

interface ApiResponseError {
    message: string;
    response?: {
        data?: {
            message?: string;
        };
    };
}

interface LoginData {
    email: string;
    password: string;
}

interface BasicSignupData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phoneNumber: string;
}

interface CompleteSignupData {
    firstName: string;
    lastName: string;
    password?: string;
    email: string;
    businessName?: string;
    phone?: string;
    jobTitle: string;
    address?: string;
    area?: string;
    businessNumber?: string;
}

interface ForgotPasswordData {
    email: string;
}

interface ResetPasswordData {
    resetCode: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export const useAuth = () => {
    const axiosInstance = useAxios();
    const dispatch = useDispatch();

    // Error handling function
    const handleError = (error: unknown) => {
        const axiosError = error as ApiResponseError;
        const errorMessage = axiosError.response?.data?.message || axiosError.message || "An error occurred";
        Toast.show({ type: "error", text1: errorMessage });
        throw { message: errorMessage };
    };

    // Async thunks for auth actions
    const setEmail = createAsyncThunk(
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

    const clearEmail = createAsyncThunk(
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

    // Login
    const login = useMutation({
        mutationFn: async (data: LoginData) => {
          const res = await axiosInstance.post("/api/v1/auth/login", data);
          console.log('login response', res);
          return res.data;
        },
        onSuccess: (responseData: { token: string; user: any }) => {
            const { token, user } = responseData;
            dispatch(setAuthData({ token, user }));
            AsyncStorage.setItem('token', responseData.token);
            AsyncStorage.setItem('userId', responseData.user._id);
            AsyncStorage.setItem('userEmail', responseData.user.email); // Also store email
            router.push("/(tabs)/home");
          
        },
        onError: handleError,
    });

    // Signup
    const register = useMutation({
        mutationFn: async (data: BasicSignupData) => {
            const res = await axiosInstance.post("/api/v1/auth/register", data);
            console.log("response from register", res);
            return res.data;
        },
        onSuccess: (responseData: { token: string; user: any }) => {
            const { token, user } = responseData;
            dispatch(setAuthData({ token, user }));
            AsyncStorage.setItem('token', responseData.token);
            AsyncStorage.setItem('userId', responseData.user._id);
            AsyncStorage.setItem('userEmail', responseData.user.email);
            
        },
        onError: handleError,
    });

    // Complete Signup
    const verifyEmailOtp = useMutation({
        mutationFn: async (otp: string) => {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            const res = await axiosInstance.put(`/api/v1/auth/email/verify-otp/${storedEmail}`, otp);
            return res.data;
        },
            onSuccess: () => {
                Toast.show({ type: "success", text1: "Complete Signup Successful!" });
                router.push("/(routes)/CreatePassword");
            },
            onError: handleError,
    });

    // Forgot Password
    const forgotPassword = useMutation({
        mutationFn: async (data: ForgotPasswordData) => {
            const res = await axiosInstance.post("/api/v1/auth/forgotPassword", data);
            return res.data;
        },
            onSuccess: () => {
                Toast.show({ type: "success", text1: "OTP sent to your email!" });
                router.push("/reset-password");
            },
            onError: handleError,
    });

    // Reset Password
    const resetPassword = useMutation({
        mutationFn: async (data: ResetPasswordData) => {
            const res = await axiosInstance.post("/api/v1/auth/resetPassword", data);
            return res.data;
        },
            onSuccess: () => {
                Toast.show({ type: "success", text1: "Password reset successful!" });
                router.push("/login");
            },
            onError: handleError,
    });

    return {
        setUserEmail: setEmail,
        clearUserEmail: clearEmail,
        loginUser: login.mutate,
        registerUser: register.mutate,
        verifyEmailOtpUser: verifyEmailOtp.mutate,
        forgotPasswordUser: forgotPassword.mutate,
        resetPasswordUser: resetPassword.mutate,
        // isLoadingLogin: login.isLoading,
        // isLoadingBasicSignup: basicSignup.isLoading,
        // isLoadingCompleteSignup: completeSignup.isLoading,
        // isLoadingForgotPassword: forgotPassword.isLoading,
        // isLoadingResetPassword: resetPassword.isLoading,
    };
};
