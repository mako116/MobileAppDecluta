import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProfileKYC() {
  const res = useSelector((state: RootState) => state.auth.userData);
  const [showSignup, setShowSignup] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        // If Redux already has the user data, use it instead of fetching again
        const userData = res;
        console.log("User data detail:", userData);
  
        const hasAddress = !!userData?.address;
  
        const token = await AsyncStorage.getItem("token");
        setHasToken(!!token); // Simplified boolean check
  
        if (!token) return;
  
        if (hasAddress) {
          setShowSignup(false);
        } else {
          setShowSignup(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setShowSignup(true);
      }
    };
  
    checkProfileCompletion();
  }, [res, router]);
  

  if (!hasToken) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Show the KYC Signup Component */}
      {showSignup && (
        <TouchableOpacity
          onPress={() => router.push("/(routes)/kyc/Signup")}
          style={styles.card}
        >
          <Text style={styles.progressText}>
            Your profile is 60% complete
          </Text>
          <View style={styles.kycButton}>
            <Text style={styles.kycText}>Complete KYC</Text>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#212121" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#F9F9F9",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderColor: "#E0E0E0",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  progressText: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: "400",
    color: "#474747",
  },
  kycButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  kycText: {
    fontSize: 12,
    lineHeight: 16.8,
    borderRadius: 4,
    fontWeight: "400",
    color: "#212121",
    padding: 3,
    backgroundColor: "#FDEBD0",
  },
});
