import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, BackHandler, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { SignUpStyles } from '../../../styles/Signup/signup.style';
import { router } from 'expo-router';
import PhoneInput from 'react-native-phone-input';
import { useAuth } from '@/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageQuestion from '@/assets/svg/message-question';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';

export default function DetailScreen() {
  const { register } = useAuth();
   const [buttonSpinner, setButtonSpinner] = useState(false);
   const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
  // const [userInfo, setUserInfo] = useState({
  //   firstName: "",
  //   LastName: "",
  //   Gender: "",
  //   Phone: "",
  //   email: ""
  // });
  const [focusInput, setFocusInput] = useState({
    email: false,
    firstName: false,
    LastName: false,
    Gender: false,
    Phone: false,
  });
  const [showExitModal, setShowExitModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for custom dropdown
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [countryCode, setCountryCode] = useState<CountryCode>('US'); // Default to 'US'
  const [callingCode, setCallingCode] = useState('234');  // Default calling code for 'US'

  // Retrieve email from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        console.log('Stored email:', storedEmail);
        if (storedEmail) {
          setEmail(storedEmail); // Set email to the state
        }
      } catch (error) {
        console.error('Error fetching email from AsyncStorage:', error);
      }
    };

    fetchEmail();
  }, []);

  // Check if the required fields are filled
  useEffect(() => {
    setIsButtonEnabled(
      firstName.length > 0 &&
      lastName.length > 0 &&
      gender.length > 0 &&
      email.length > 0 &&
      phoneNumber.length <= 10
    );
  }, [firstName, lastName, gender, email, phoneNumber]);
  

  // Handle phone number change, only numeric values
  const handlePhoneChange = (number: string) => {
    const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPhoneNumber(filteredNumber);
  };

  // Handle hardware back press
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        setShowExitModal(true);
        return true;
      };

      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

      return () => backHandler.remove();
    }, [])
  );
 

  // Toggle dropdown for gender selection
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Select gender
  const selectGender = (gender: string) => {
    setGender(gender);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // const NextPage= () =>{
  //   setButtonSpinner(true);
  //   setTimeout(() => {
  //     router.push("/(routes)/OTPEmail")
  //     setButtonSpinner(false);
  //     // Navigate to dashboard/home after successful login
  //   }, 1000);
  // }
  const handleSignUp = async () => {
    try {
      setButtonSpinner(true);
      if (!email) {
        alert('Email is required');
        setButtonSpinner(false);
        return;
      }
      await register(firstName, lastName, email, gender, phoneNumber);
      console.log({
        firstName,
        lastName,
        email,
        gender,
        phoneNumber,
      });
      
    } catch (err) {
      console.error('Error during registration', err);
    } finally {
      setButtonSpinner(false);
    }
  };

  const handleHelp = () =>{
    router.push("/(routes)/need-help")
  }
  return (
    <ScrollView style={{ flex: 1}} scrollEventThrottle={1}>
      <View style={{ marginTop: 15, marginHorizontal: 16, }}>

        {/* First Name Input */}
        <View>
          <Text style={SignUpStyles.label}>First name</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
            <TextInput
              style={[
                SignUpStyles.input,
                focusInput.firstName && { borderColor: "#DEBC8E" },
                { paddingHorizontal: 40 }
              ]}
              keyboardType="default"
              value={firstName}
              placeholder="Enter your legal first name"
              placeholderTextColor='gray'
              onFocus={() => setFocusInput({ ...focusInput, firstName: true })}
              onBlur={() => setFocusInput({ ...focusInput, firstName: false })}
              onChangeText={(value) => setFirstName(value)}
            />
          </View>
        </View>

        {/* Last Name Input */}
        <View  style={{marginTop:10}}>
          <Text style={SignUpStyles.label}>Last name</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
            <TextInput
              style={[
                SignUpStyles.input,
                focusInput.LastName && { borderColor: "#DEBC8E" },
                { paddingHorizontal: 40 }
              ]}
              keyboardType="default"
              value={lastName}
              placeholder="Enter your legal last name"
              placeholderTextColor='gray'
              onFocus={() => setFocusInput({ ...focusInput, LastName: true })}
              onBlur={() => setFocusInput({ ...focusInput, LastName: false })}
              onChangeText={(value) => setLastName(value)}
            />
          </View>
          
        </View>

        {/* Custom Gender Dropdown */}
        <View style={SignUpStyles.dropdownContainer}>
          <Text style={SignUpStyles.label}>Gender</Text>
          <TouchableOpacity
            style={SignUpStyles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={SignUpStyles.dropdownButtonText}>
              {gender || "Select Gender"}
            </Text>
            {isDropdownOpen ? <ArrowUpGray/> :  <ArrowGrayDown/>}
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={SignUpStyles.dropdownMenu}>
              {["Male", "Female"].map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    SignUpStyles.dropdownItem,
                    gender === gender && SignUpStyles.selectedBackground // Highlight selected item
                  ]}
                  onPress={() => selectGender(gender)}
                >
                  <Text style={SignUpStyles.dropdownItemText}>{gender}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Email Input */}
        <View>
          <Text style={SignUpStyles.label}>Email</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
            <TextInput
            style={[
              SignUpStyles.input,
              focusInput.email && { borderColor: "#DEBC8E" },
              { paddingHorizontal: 40 }
            ]}
            keyboardType="email-address"
            placeholder="matthew@email.com"
            value={email}
            placeholderTextColor='gray'
            onFocus={() => setFocusInput({ ...focusInput, email: true })}
            onBlur={() => setFocusInput({ ...focusInput, email: false })}
            onChangeText={(value) => setEmail(value)} // Update email state
          />
          </View>
          
        </View>

        {/* Phone Number Input */}
        <View style={SignUpStyles.container}>
          <Text style={SignUpStyles.label}>Phone Number</Text>
          <View style={SignUpStyles.phoneContainer}>
            <Image
              source={require("../../../assets/images/newimages/twemoji_flag-nigeria.png")} 
              style={SignUpStyles.customLogo}
            />
            <Text style={SignUpStyles.callingCode}>+{callingCode}</Text>
            <TextInput
              style={SignUpStyles.phoneInput}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              placeholder="Phone number"
            />
          </View>
        </View>

        {/* Referral */}
        <View style={{marginTop:15,marginBottom:40}}>
          <Text style={SignUpStyles.label}>Who Referred You?</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
            <TextInput
            style={[SignUpStyles.input]}
            keyboardType="default"
            placeholder="Enter referral code"
            placeholderTextColor='gray'
          />
          </View>
          
        </View>
        
        {/* Next Button */}
        <TouchableOpacity
          onPress={handleSignUp}
          style={[
            
            SignUpStyles.loginButtons,
            !isButtonEnabled && { backgroundColor: "#E9E9E9" } // Gray out if disabled
          ]}
          disabled={!isButtonEnabled} // Disable button if not enabled
        >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={[ !isButtonEnabled && { backgroundColor: "#E9E9E9", color:"#E9E9E9" },SignUpStyles.loginText]}>Next</Text>
          )}
        </TouchableOpacity>

        <View style={{flexDirection:"row", justifyContent: "center", gap:5, paddingTop:25}}>
          <MessageQuestion/>
          <Text>Need help?</Text>
          <TouchableOpacity onPress={handleHelp}>
            <Text style={{color:"#DEBC8E"}}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
      
   );
}
