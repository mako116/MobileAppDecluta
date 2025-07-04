import OTPMain from '@/screens/auth/OTPScreen/OTPMain';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { router } from 'expo-router';
import PhoneOtpStyles from '@/styles/Login/phoneOtpStyles';
import PhoneOtpHead from '@/assets/svg/phoneOtpHead';
import BackButton from '@/assets/images/kyc/LeftArrow';

export default function OTPPage() {
  const handlehelp =()=>{
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" ,paddingTop:50}}>
      <View>
        {/* Header Section with Logo */}
        <View style={PhoneOtpStyles.signs}>
          <BackButton/>
       <View style={{marginHorizontal:"15%"}}>
       <PhoneOtpHead/>
       </View>
        </View>

       <View style={{backgroundColor:"#f9f9f9", height:"100%", justifyContent:"space-between", paddingBottom:"20%"}}>
        <View>
          {/* Title and Instructions */}
        <View style={PhoneOtpStyles.instructions}>
          <Text style={PhoneOtpStyles.title}>Verify Your Phone Number</Text>
          <Text style={PhoneOtpStyles.subtitle}>
            We sent a 4-digit code to{" "}
            <Text style={PhoneOtpStyles.phoneNumber}>+23480123456789</Text>. Please enter it below to verify your account.
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={PhoneOtpStyles.otpSection}>
          <OTPMain />
        </View>
        </View>

        {/* Help Section */}
        <View style={PhoneOtpStyles.helpSection}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text style={PhoneOtpStyles.helpText}>Need help?</Text>
          <TouchableOpacity>
            <Text onPress={handlehelp} style={PhoneOtpStyles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>

        </View>
      </View>
    </SafeAreaView>
  );
}


