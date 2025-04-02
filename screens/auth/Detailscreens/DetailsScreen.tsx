import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SignUpStyles } from '../../../styles/Signup/signup.style';
import { router } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageQuestion from '@/assets/svg/message-question';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';
import TextInputField from '@/UI/InputFields/TextInputField';
import PhoneNumberInputField from '@/UI/InputFields/PhoneNumberInputField';

export default function DetailScreen() {
  // const { register } = useAuth();
   const [buttonSpinner, setButtonSpinner] = useState(false);
   const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
  // const [userInfo, setUserInfo] = useState({
  //   firstName: "",
  //   LastName: "",
  //   Gender: "",
  //   Phone: "",
  //   email: ""
  // });
  const [showExitModal, setShowExitModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for custom dropdown
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handleSaveEmail = async (email: string) => {
    try {
      await AsyncStorage.setItem('email', email.toLowerCase());
      console.log('Email saved successfully:', email);
    } catch (error) {
      console.error('Error saving email to AsyncStorage:', error);
    }
  };

  // Check if the required fields are filled
  useEffect(() => {
    setIsButtonEnabled(
      firstName.length > 0 &&
      lastName.length > 0 &&
      gender.length > 0 &&
      email.length > 0 &&
      phoneNumber.length == 11
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
  // for quick debugging
  const NextPage = () => {
    setButtonSpinner(true);
  
    // Assuming you have an email state
    if (!email) {
      console.error("Email is missing");
      setButtonSpinner(false);
      return;
    }
  
    handleSaveEmail(email); // Pass the email argument
  
    setTimeout(() => {
      router.push("/(routes)/OTPEmail");
      setButtonSpinner(false);
    }, 1000);
  };
  
  const handleSignUp = async () => {
    try {
      setButtonSpinner(true);
      if (!email) {
        alert('Email is required');
        setButtonSpinner(false);
        return;
      }
      // await register(firstName, lastName, email, gender, phoneNumber);
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
    <View>
      <ScrollView style={{ flex: 1}} scrollEventThrottle={1}>
        <View style={{ marginTop: 15, marginHorizontal: 16, }}>

          {/* First Name Input */}
          <View>
            <Text style={SignUpStyles.label}>First name</Text>
            <TextInputField
              placeholder="Enter your legal first name"
              value={firstName}
              onChangeText={(value) => setFirstName(value)}
              keyboardType="default"
              placeholderTextColor='gray'
            />
          </View>

          {/* Last Name Input */}
          <View  style={{marginTop:10}}>
            <Text style={SignUpStyles.label}>Last name</Text>
            <TextInputField
              placeholder="Enter your legal first name"
              value={lastName}
              onChangeText={(value) => setLastName(value)}
              keyboardType="default"
              placeholderTextColor='gray'
            />
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
              {isDropdownOpen ? <ArrowUpGray /> : <ArrowGrayDown />}
            </TouchableOpacity>

            {isDropdownOpen && (
              <View style={SignUpStyles.dropdownMenu}>
                {["Male", "Female"].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      SignUpStyles.dropdownItem,
                      gender === option && SignUpStyles.selectedBackground, // Compare correctly
                    ]}
                    onPress={() => selectGender(option)}
                  >
                    <Text style={SignUpStyles.dropdownItemText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

          </View>

          {/* Email Input */}
          <View style={{marginTop:10}}>
            <Text style={SignUpStyles.label}>Email</Text>
            <TextInputField
              placeholder="Enter your legal first name"
              value={email}
              onChangeText={(value) => setEmail(value)}
              keyboardType="default"
              placeholderTextColor='gray'
            />
          </View>

          {/* Phone Number Input */}
          <View style={SignUpStyles.container}>
            <Text style={SignUpStyles.label}>Phone Number</Text>
            <PhoneNumberInputField
              value={phoneNumber}
              onChangeText={handlePhoneChange}
            />
          </View>

          {/* Referral */}
          <View style={{marginTop:10,marginBottom:40}}>
            <Text style={SignUpStyles.label}>Who Referred You?</Text>
            <TextInputField
              placeholder="Enter referral code"
              keyboardType="default"
              placeholderTextColor='gray'
            />
            
          </View>
        </View>
      </ScrollView>
      <View style={{
        marginHorizontal: 16,
      }}>
        {/* Next Button */}
        <TouchableOpacity
          onPress={NextPage}
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
    </View>
      
   );
}
