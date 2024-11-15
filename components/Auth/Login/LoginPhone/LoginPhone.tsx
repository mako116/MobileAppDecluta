import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Alert, BackHandler, Modal } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { SignUpStyles } from '../../../../styles/Signup/signup.style';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function PhoneLogin() {
    const [buttonSpinner, setButtonSpinner] = useState(false);
     const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState<CountryCode>('US'); // Default to 'US'
    const [callingCode, setCallingCode] = useState('1');  // Default calling code for 'US'
  
    const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
   const [userInfo, setUserInfo] = useState({
    Phone: "",
   });

   

  useEffect(() => {
    setIsButtonEnabled(
      phoneNumber.length > 0
    );
  }, [userInfo, phoneNumber]);

 // Handle phone number change, only numeric values
 const handlePhoneChange = (number: string) => {
    const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPhoneNumber(filteredNumber);
  };

  // Handle country selection from CountryPicker
  const onSelectCountry = (country: Country) => {
    setCountryCode(country.cca2 as CountryCode); // Set the selected country code
    setCallingCode(country.callingCode[0]); // Set the corresponding calling code
  };

  const NextPage= () =>{
    setButtonSpinner(true);
    setTimeout(() => {
      router.push("/(routes)/LoginOTP")
      setButtonSpinner(false);
      // Navigate to dashboard/home after successful login
    }, 1000);
  }
  return (
    <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
      <View style={SignUpStyles.header}>
        <Image source={require("@/assets/images/king.png")} style={SignUpStyles.sigInImage} />
        <Text style={SignUpStyles.welcomeText}>Log in with phone number</Text>
      </View>

     {/* Phone Number Input */}
     <View style={styles.container}>
          <Text style={SignUpStyles.label}>Phone Number</Text>
          <View style={styles.phoneContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withFlag
              withCallingCode
              withCountryNameButton={false}
              onSelect={onSelectCountry}
              containerButtonStyle={styles.flagButton}
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
            { marginVertical: 20 },
            SignUpStyles.loginButton,
            !isButtonEnabled && { backgroundColor: "#E9E9E9" } // Gray out if disabled
          ]}
          disabled={!isButtonEnabled} // Disable button if not enabled
        >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={[ !isButtonEnabled && { backgroundColor: "#E9E9E9", color:"#E9E9E9" },SignUpStyles.loginText]}>Login</Text>
          )}
        </TouchableOpacity>
        </View>

        <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center", paddingVertical:10}}>
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

          <View style={SignUpStyles.socialButtons}>
            <TouchableOpacity style={SignUpStyles.socialButton}>
            <MaterialIcons name="email" size={24} color="black" />
             <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SignUpStyles.socialButton}>
              <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={require("@/assets/images/google.png")} />
              <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    dropdownContainer: {
      marginVertical: 10,
    },
    dropdownButton: {
      height: 55,
      borderRadius: 3,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginTop: 8,
    },
    dropdownButtonText: {
      color: '#333',
    },
    dropdownMenu: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      marginHorizontal: 16,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    dropdownItem: {
      padding: 10,
    },
    dropdownItemText: {
      color: '#333',
    },
    selectedBackground: {
      backgroundColor: '#F5EADC', // Highlight background color for selected item
    },
    container: {
      marginTop: 16,
    },
    phoneContainer: {
       flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "white",
      marginHorizontal: 16,
      // marginTop: 30,
      // gap: 10,
    },
    callingCode: {
      marginRight: 10,
      fontSize: 16,
      color: '#333',
    },
    flagButton: {
      marginLeft: 8,
    },
    phoneInput: {
      height: 55,
       borderRadius: 3,
       borderLeftWidth:1,
      borderColor: "#E9E9E9",
      paddingLeft: 15,
      fontSize: 14,
      backgroundColor: "white",
      color: "#a1a1a1",
    },
  }); 