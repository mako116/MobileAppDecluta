import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";

interface ninData {
    nin: string;
}

interface bvnData {
    bvn: string;
    name: string;
    dateOfBirth: string;
    mobileNo: string;
}

// Verification endpoints
const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;


export const useMonnify = () => {
    const verifyNin = async (data: ninData) => {
        try {
            const token = await AsyncStorage.getItem('token');
    
            const res = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/verification/nin`,
            {
                nin: data.nin
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.responseMessage === "success") {
                router.push("/(tabs)/home");
            }
            
            return res.data; // ✅ Ensure a return value
        } catch (error) {
            console.error("Error verifying NIN:", error);
            return null; // ✅ Ensure error case also returns a value
        }
    };
    
    const verifyBvn = async (data: bvnData) => {
        try {
            const token = await AsyncStorage.getItem('token');
    
            const res = await axios.post(`${EXPO_PUBLIC_API_KEY}/api/v1/verification/bvn`,
            {
                bvn: data.bvn,
                name: data.name,
                dateOfBirth: data.dateOfBirth,
                mobileNo: data.mobileNo
            },
            {
                headers: {
                Authorization: `Bearer ${token}`
                }
            });
            if ( res.data.status === 'success') {
                router.push("/(tabs)/home");
            } 
            return res.data;
        } catch (error) {
            console.error('Error verifying NIN:', error);
        }
    }
    
    const verifyNinUser = async (data: ninData) => {
        return await verifyNin(data);
    };

    const verifyNBvnUser = async (data: bvnData) => {
        return await verifyBvn(data);
    };
    
    return {
        verifyNinUser,
        verifyNBvnUser
    }
}
