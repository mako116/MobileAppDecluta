import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileKYC() {
  const { getUser } = useAuth();
  const [profilePercentage, setProfilePercentage] = useState<string | null>(
    null
  );
  const [showSignup, setShowSignup] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        const user = await getUser();
        console.log("User data detail:", user?.data);

        const hasAddress = !!user?.data?.users?.address;
        const hasBVN = !!user?.data?.users?.BankVerificationNumberVerified;
        const hasNIN = !!user?.data?.users?.NationalIdentityNumberVerified;

        const token = await AsyncStorage.getItem('token');
        if (token) {
          setHasToken(true); 
        } else {
          return null;
         }

        if (hasAddress && hasBVN && hasNIN) {
          setShowSignup(false);
          setShowVerification(false);
          return; // All fields are set, so don't render anything
        }

        if (hasAddress && !hasBVN && !hasNIN) {
          setProfilePercentage("80%");
          setShowVerification(true);
          setShowSignup(false);
        } else {
          setProfilePercentage("60%");
          setShowSignup(true);
          setShowVerification(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setProfilePercentage("60%");
        setShowSignup(true);
        setShowVerification(false);
      }
    };

    checkProfileCompletion();
  }, [router]);

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
            Your profile is {profilePercentage} complete
          </Text>
          <View style={styles.kycButton}>
            <Text style={styles.kycText}>Complete KYC</Text>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#212121" />
          </View>
        </TouchableOpacity>
      )}

      {/* Show the KYC Verification Component */}
      {showVerification && (
        <TouchableOpacity
          onPress={() => router.push("/(routes)/kyc/identityscreen")}
          style={styles.card}
        >
          <Text style={styles.progressText}>
            Your profile is {profilePercentage} complete
          </Text>
          <View style={styles.kycButton}>
            <Text style={styles.kycText}>Verify BVN & NIN</Text>
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
