 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import PincodeLogin from './welcomebkPin';
import OTPPhoneLogin from '@/screens/auth/OTPScreen/OTPPhoneLogin';
import { router } from 'expo-router';
import PhoneOtpStyles from '@/styles/Login/phoneOtpStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyOTP() {
  const handlehelp =()=>{
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      {/* Header Section with Logo */}
      <View style={PhoneOtpStyles.signs}>
        <Image
          source={require('@/assets/images/square.png')}
          style={{ height: 10, width: 130 }}
        />
      </View>

      <View
        style={{ flex: 1, backgroundColor: "#F9F9F9"
        }}
      >
        {/* Title and Instructions */}
        <View style={PhoneOtpStyles.instructions}>
          <Text style={PhoneOtpStyles.title}>
            Verify Your Phone Number
          </Text>
          <Text style={PhoneOtpStyles.subtitle}>
            We sent a 4-digit code to{" "}
            <Text style={PhoneOtpStyles.phoneNumber}>+23480123456789</Text>. Please enter it below to verify your account.
          </Text>
        </View>

        {/* OTP Input Section */}
        <View >
          <OTPPhoneLogin />
        </View> 

        
      </View>

      {/* Help Section */}
      <View style={PhoneOtpStyles.helpSection}>
          <Image source={require('../../../../assets/images/messageQuestion.png')} style={{ height: 26, width: 26, }} />
          <Text style={PhoneOtpStyles.helpText}>Need help?</Text>
          <TouchableOpacity>
            <Text onPress={handlehelp} style={PhoneOtpStyles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
