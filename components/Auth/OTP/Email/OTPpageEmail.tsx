import OTPMainEmail from '@/screens/auth/OTPScreen/OTPEmail';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
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
        const email = await AsyncStorage.getItem('email');
        setStoredEmail(email);
      } catch (error) {
        console.error('Error fetching email from AsyncStorage:', error);
      }
    };

    fetchEmail();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop:20 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: "#fff" }}
        scrollEventThrottle={16}
      >
        {/* Header Section with Logo */}
        <View style={styles.signs}>
          <View style= { styles.row } >
            <View style = {[ styles.row, styles.passedStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.passedStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.passedStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
            <View style = { styles.divider } ></View>
            <View style = {[ styles.row, styles.currentStageIcon ]} >
              <Entypo name="check" size={8} color="white" />
            </View>
          </View>
        </View>

        {/* Title and Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.title}>Verify Your Email Address</Text>
          <Text style={styles.subtitle}>
            We sent a 4-digit code to{" "}
            <Text style={styles.phoneNumber}>{storedEmail}</Text>. Please enter it below to verify your account.
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={styles.otpSection}>
          <OTPMainEmail />
        </View>

        {/* Help Section */}
        <View style={styles.helpSection}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text style={styles.helpText}>Need help?</Text>
          <TouchableOpacity onPress={handlehelp}>
            <Text style={styles.helpLink}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontFamily:"Helvetica Neue"
  },
  subtitle: {
    color: "#212121",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily:"Proxima Nova",
    marginRight: 10,
  },
  phoneNumber: {
    fontWeight: "700",
    fontFamily:"Helvetica Neue"

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
