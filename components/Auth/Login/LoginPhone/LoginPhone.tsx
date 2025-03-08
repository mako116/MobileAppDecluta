import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useState, useEffect } from 'react';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { SignUpStyles } from '../../../../styles/Signup/signup.style';
import { router } from 'expo-router';
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import GoolgSignUp from '../../Signup/GoogleSignup/GoogleSignUpComponent';

export default function PhoneLogin() {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
   const [callingCode, setCallingCode] = useState('234');  // Default calling code for 'US'
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    // Set showMore to true when the image is clicked
    setShowMore(prevState => !prevState);
  };
  useEffect(() => {
    setIsButtonEnabled(phoneNumber.length > 0);
  }, [phoneNumber]);

  // Handle phone number change, only numeric values
  const handlePhoneChange = (number: string) => {
    const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPhoneNumber(filteredNumber);
  };

 

  const NextPage = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      router.push("/(routes)/LoginOTP");
      setButtonSpinner(false);
    }, 1000);
  };

  const goBackEmail = () => {
    router.push("/(routes)/login");
  };

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <View style={SignUpStyles.header}>
        <Image source={require("@/assets/images/king.png")} style={SignUpStyles.sigInImage} />
        <Text style={SignUpStyles.welcomeText}>Log in with phone</Text>
      </View>

      <View style={{ flex: 1, }} >
        {/* Phone Number Input */}
        <View style={styles.container}>
          <Text style={SignUpStyles.label}>Phone Number</Text>
          <View style={styles.phoneContainer}>
              <Image
                source={require("../../../../assets/images/newimages/twemoji_flag-nigeria.png")} 
                style={styles.customLogo}
              />
            <Text style={styles.callingCode}>+{callingCode}</Text>
            <TextInput
              style={styles.phoneInput}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              placeholder="Phone number"
            />
          </View>

          <TouchableOpacity
            onPress={NextPage}
            style={[
              { marginTop: 20 },
              SignUpStyles.loginButton,
              !isButtonEnabled && { backgroundColor: "#E9E9E9" }, // Gray out if disabled
            ]}
            disabled={!isButtonEnabled} // Disable button if not enabled
          >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text
                style={[
                  !isButtonEnabled && { backgroundColor: "#E9E9E9", color: "#E9E9E9" },
                  SignUpStyles.loginText,
                ]}
              >
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", paddingVertical: 20 }}>
          <Text style={SignUpStyles.signUpText}>New to DecluttaKing?</Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/emailRegister")}>
            <Text style={SignUpStyles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={SignUpStyles.separatorContainer}>
          <View style={SignUpStyles.separator} />
          <Text style={SignUpStyles.separatorText}>OR</Text>
          <View style={SignUpStyles.separator} />
        </View>

        <View style={[SignUpStyles.socialButtons,{marginTop:15}]}>
          <TouchableOpacity onPress={goBackEmail} style={SignUpStyles.socialButton}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Email</Text>
          </TouchableOpacity>
        
          <GoolgSignUp />

          {/* Conditionally render the other buttons */}
          {showMore && (
            <>
              <TouchableOpacity style={SignUpStyles.socialButton}>
                <AntDesign name="apple1" size={24} color="black" />
                <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"ProximaNova"}}>Continue with Apple</Text>
              </TouchableOpacity>

              
            </>
          )}

          {/* Arrow icon to toggle showing more buttons */}
          <View style={{ margin: "auto", paddingVertical: 14 }}>
            <TouchableOpacity onPress={handleShowMore}>
              <SimpleLineIcons
                name={showMore ? "arrow-up" : "arrow-down"}
                size={22}
                color="#A4A4A4"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", margin: "auto", gap: 10 , }}>
        <TouchableOpacity onPress={() => router.push("/(routes)/Terms")}>
          <Text
           style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>
            Terms of use
          </Text>
        </TouchableOpacity>
        
        <View style={SignUpStyles.separator2} />

        <TouchableOpacity onPress={() => router.push("/(routes)/privacyPolicy")}>
          <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom:10
  },
  callingCode: {
    marginHorizontal: 10,
    fontSize: 13,
    color: '#212121',
    borderRightWidth: 1,
    borderColor: "#212121",
    paddingRight: 15,
    fontFamily:"Helvetica Neue",
    lineHeight:18.2,
    fontWeight:"500"
  },
  flagButton: {
    marginLeft: 8,
  },
  customLogo: {
   marginLeft:15,
    height: 18,
    width: 18, // Adjust size of the custom logo
    resizeMode: "contain",
  },
  phoneInput: {
    height: 55,
    borderRadius: 3,
    
    fontSize: 14,
    backgroundColor: "white",
     color: '#212121',
    paddingRight: 15,
    fontFamily:"ProximaNova",
    lineHeight:14,
    fontWeight:"500"
  },
});
