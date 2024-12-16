 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import PincodeLogin from './welcomebkPin';
import OTPPhoneLogin from '@/screens/auth/OTPScreen/OTPPhoneLogin';
import { router } from 'expo-router';

export default function VerifyOTP() {
  const handlehelp =()=>{
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: "#fff" }}
        scrollEventThrottle={16}
      >
        {/* Header Section with Logo */}
        <View style={styles.signs}>
          <Image
            source={require('@/assets/images/square.png')}
           />
        </View>

        {/* Title and Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.title}>Verify Your Phone Number</Text>
          <Text style={styles.subtitle}>
            We sent a 4-digit code to{" "}
            <Text style={styles.phoneNumber}>+23480123456789</Text>. Please enter it below to verify your account.
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={styles.otpSection}>
          <OTPPhoneLogin />
        </View> 

        {/* Help Section */}
        <View style={styles.helpSection}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text style={styles.helpText}>Need help?</Text>
          <TouchableOpacity>
            <Text onPress={handlehelp} style={styles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signs: {
    paddingTop: 70,
    paddingBottom: 30,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: "center",
  },
  instructions: {
    marginHorizontal: 16,
    paddingVertical: 20,
    gap: 10,
  },
  title: {
    color: "#212121",
    fontWeight: "700",
    fontSize: 19,
    lineHeight: 26.6,
   
     fontFamily:"HelveticaNeueLTPro"
  },
  subtitle: {
    color: "#212121",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    marginRight: 10,
    fontFamily:"ProximaNovaR",
  },
  phoneNumber: {
    fontWeight: "700",
    fontFamily:"HelveticaNeueLTPro"
  },
  otpSection: {
     marginBottom: 140,
  },
  helpSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    paddingHorizontal: 16,
  },
  helpText: {
    color: "#212121",
    fontSize: 14,
    marginHorizontal: 5,
  },
  helpLink: {
    color: "#DEBC8E",
    fontSize: 14,
    fontWeight: "600",
  },
});
