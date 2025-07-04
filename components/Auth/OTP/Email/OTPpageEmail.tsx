import BackButton from '@/assets/images/kyc/LeftArrow';
import Otpheademail from '@/assets/svg/otpheademail';
import OTPMainEmail from '@/screens/auth/OTPScreen/OTPEmail';
import PhoneOtpStyles from '@/styles/Login/phoneOtpStyles';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
 
export default function OTPPageEmail() {
  const handlehelp =()=>{
    router.push("/(routes)/need-help")
  }
  const [storedEmail, setStoredEmail] = useState<string | null>(null);
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail');
        setStoredEmail(email);
      } catch (error) {
        console.error('Error fetching email from AsyncStorage:', error);
      }
    };

    fetchEmail();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" ,paddingTop:50}}>
      <View>
        {/* Header Section with Logo */}
        <View style={styles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          
          <View style= { [styles.row, { marginRight: 20 }] } >
            <View style = {[ styles.row, styles.passedStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.currentStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.nextStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.nextStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
          </View>

          <View>

          </View>
        </View>
        
       <View style={{backgroundColor:"#f9f9f9", height:"100%", justifyContent:"space-between", paddingBottom:"30%"}}>
          
        <View>
          
        {/* Title and Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.title}>Verify Your Email Address</Text>
          <Text style={styles.subtitle}>
            We sent a 4-digit code to {" "}
            <Text style={styles.phoneNumber}>{storedEmail}</Text>. Please enter it below to verify your account...
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={PhoneOtpStyles.otpSection}>
          <OTPMainEmail />
        </View>
        </View>

        {/* Help Section */}
        <View style={styles.helpSection}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text style={styles.helpText}>Need help?</Text>
          <TouchableOpacity onPress={handlehelp}>
            <Text style={styles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
        </View>
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
    paddingTop: 20,
    paddingBottom: 15,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
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
    fontFamily:"Helvetica Neue"
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
    fontFamily:"Helvetica Neue"

  },
  divider: {
    width: 35,
    height: 1,
    backgroundColor: "black",
    marginHorizontal: 2
  },
  currentStageIcon: {
    padding: 3,
    borderRadius: 20,
    backgroundColor: "#DEBC8E"
  },
  passedStageIcon: {
    padding: 3,
    borderRadius: 20,
    backgroundColor: "black"
  },
  nextStageIcon: {
    padding: 1.5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#A4A4A4"
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
