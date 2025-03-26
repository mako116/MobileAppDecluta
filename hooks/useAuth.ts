import { setAuthData } from "@/redux/slices/AuthSlice";
import useAxios from "@/utils/useAxios";
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
    password: string;
    lastName: string;
    firstName: string;
    email: string;
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
          router.push("/(tabs)/home");
          
        },
        onError: handleError,
    });

    // Signup
    const basicSignup = useMutation({
        mutationFn: async (data: BasicSignupData) => {
            const res = await axiosInstance.post("/api/v1/auth/basicSignup", data);
            return res.data;
        },
        onSuccess: (responseData) => {
            const { token, user } = responseData;
            dispatch(setAuthData({ token, user }));
            Toast.show({ type: "success", text1: "Signup Successful!" });
            router.push("/(tabs)/home");
        },
        onError: handleError,
    });

    // Complete Signup
    const completeSignup = useMutation({
        mutationFn: async (data: CompleteSignupData) => {
            const res = await axiosInstance.put("/api/v1/auth/completeSignup", data);
            return res.data;
        },
            onSuccess: () => {
                Toast.show({ type: "success", text1: "Complete Signup Successful!" });
                router.push("/login");
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
        loginUser: login.mutate,
        basicSignupUser: basicSignup.mutate,
        completeSignupUser: completeSignup.mutate,
        forgotPasswordUser: forgotPassword.mutate,
        resetPasswordUser: resetPassword.mutate,
        // isLoadingLogin: login.isLoading,
        // isLoadingBasicSignup: basicSignup.isLoading,
        // isLoadingCompleteSignup: completeSignup.isLoading,
        // isLoadingForgotPassword: forgotPassword.isLoading,
        // isLoadingResetPassword: resetPassword.isLoading,
    };
};
