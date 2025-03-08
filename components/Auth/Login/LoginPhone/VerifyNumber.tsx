 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert, StyleSheet } from 'react-native';
import PincodeLogin from './welcomebkPin';
import OTPPhoneLogin from '@/screens/auth/OTPScreen/OTPPhoneLogin';
import { router } from 'expo-router';
// import styles from '@/styles/Login/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyOTP() {
  const handlehelp =()=>{
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      {/* Header Section with Logo */}
      <View style={styles.signs}>
        <Image
          source={require('@/assets/images/square.png')}
          style={{ height: 10, width: 130 }}
        />
      </View>

      <View
        style={{ 
          backgroundColor: "#F9F9F9",
          flex: 1
        }}
      >
        {/* Title and Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.title}>
            Verify Your Phone Number
          </Text>
          <Text style={styles.subtitle}>
            We sent a 4-digit code to{" "}
            <Text style={styles.phoneNumber}>123456789</Text>. Please enter it below to verify your account.
          </Text>
        </View>

        {/* OTP Input Section */}
        <View >
          <OTPPhoneLogin />
        </View> 

        
      </View>

      {/* Help Section */}
      <View style={styles.helpSection}>
          <Image source={require('../../../../assets/images/messageQuestion.png')} style={{ height: 26, width: 26, }} />
          <Text style={styles.helpText}>Need help?</Text>
          <TouchableOpacity>
            <Text onPress={handlehelp} style={styles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  signs: {
    paddingTop: 70,
    paddingBottom: 30,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily:"HelveticaNeue"
  },
  subtitle: {
    color: "#212121",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily:"ProximaNova",
    marginRight: 10,
  },
  phoneNumber: {
    fontWeight: "700",
    fontFamily:"HelveticaNeue"

  },
  divider: {
    width: 35,
    height: 2,
    backgroundColor: "black",
    marginHorizontal: 7
  },
  currentStageIcon: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#DEBC8E"
  },
  passedStageIcon: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: "black"
  },
  otpSection: {
     marginBottom: 140,
  },
  helpSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 120,
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