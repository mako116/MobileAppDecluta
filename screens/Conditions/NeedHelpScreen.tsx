import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, BackHandler, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Needs } from '@/styles/needhelp/needhelps.styles';

export default function NeedHelpScreen() {
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for custom dropdown
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState<CountryCode>('US'); // Default to 'US'
    const [callingCode, setCallingCode] = useState('1');  // Default calling code for 'US'  
    const [showExitModal, setShowExitModal] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
   const [userInfo, setUserInfo] = useState({
     image: "",
     issues: "",
     Phone: "",
     email: "",
     description: ""
   });
   const [focusInput, setFocusInput] = useState({
     email: false,
     issues: false,
     LastName: false,
      Phone: false,
      image:false,
      description:false
   });
   
    // Check if the required fields are filled
  useEffect(() => {
    setIsButtonEnabled(
      userInfo.description.length > 0 &&
      userInfo.issues.length > 0 &&
      userInfo.email.length > 0 &&
      phoneNumber.length > 0
    );
  }, [userInfo, phoneNumber]);

  
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
  const selectIssues = (issues: string) => {
    setUserInfo({ ...userInfo, issues: issues });
    setIsDropdownOpen(false); // Close dropdown after selection
  };

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

 
    // Navigate to OTP page and show success modal
    const NextPage = () => {
      setButtonSpinner(true);
      setTimeout(() => {
        // Navigate to Success Modal Screen
        router.push('/(routes)/SuccessModalScreen');
        setButtonSpinner(false);
      }, 1000);
    };
  

 
  return (
    <View
     style={{paddingHorizontal:16, marginBottom:"30%"}}

    >
        {/* Email Input */}
        <View style={{paddingVertical:20}}>
          <Text style={SignUpStyles.label}>Email</Text>
          <TextInput
            style={[
              SignUpStyles.TextInput,
              focusInput.email && { borderColor: "#DEBC8E" },
              { paddingHorizontal: 40 }
            ]}
            keyboardType="email-address"
            value={userInfo.email}
            placeholder="matthewc@email.com"
            onFocus={() => setFocusInput({ ...focusInput, email: true })}
            onBlur={() => setFocusInput({ ...focusInput, email: false })}
            onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
          />
        </View>

         {/* Phone Number Input */}
         <View style={Needs.container}>
          <Text style={SignUpStyles.label}>Phone Number (Optional)</Text>
          <View style={Needs.phoneContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withFlag
              withCallingCode
              withCountryNameButton={false}
              onSelect={onSelectCountry}
              containerButtonStyle={Needs.flagButton}
            />
            <Text style={Needs.callingCode}>+{callingCode}</Text>
            <TextInput
              style={Needs.phoneInput}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              placeholder="Phone number"
            />
          </View>
        </View>

        {/* Custom Issues Dropdown */}
        <View style={Needs.dropdownContainer}>
          <Text style={SignUpStyles.label}>What issue are you facing? *</Text>
          <TouchableOpacity
            style={Needs.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={Needs.dropdownButtonText}>
              {userInfo.issues || ""}
            </Text>
            <Ionicons
              name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#a4a4a4"
            />
          </TouchableOpacity>
          {isDropdownOpen && (
  <View style={Needs.dropdownMenu}>
    {[
      "I can’t sign up",
      "I can’t log in",
      "I can’t reset my password",
      "I’m not getting an OTP",
    ].map((issue) => (
      <TouchableOpacity
        key={issue}
        style={[
          Needs.dropdownItem,
          userInfo.issues === issue && Needs.selectedBackground, // Highlight selected item
        ]}
        onPress={() => selectIssues(issue)}
      >
        <Text style={Needs.dropdownItemText}>{issue}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}
        </View>

        {/* Upload Photo */}
        <View style={{paddingHorizontal:0}}>
            <Text style={{fontWeight:"400", fontSize:14,lineHeight:19.6,color:"#212121",     fontFamily:"ProximaNovaR"}}>Upload a photo (Optional)</Text>
            <Text style={{color:"#A4A4A4", fontWeight:"400",fontStyle:"italic", fontSize:13, lineHeight:18.2}}>not more than 3</Text>

            <View style={{backgroundColor:' #fff', paddingVertical:15}}>
                <TouchableOpacity style={{ backgroundColor: "white",borderRadius:5, alignItems:"center",flexDirection:"column", width:70,height:70, borderWidth:1, borderColor:"#E9E9E9",justifyContent:"center", gap:5}}>
                <Entypo name="plus" size={15} color="black" />               
                <Text style={{textAlign: "center",fontWeight:"400", fontSize:12,lineHeight:16.8,     fontFamily:"ProximaNovaR"}}>Add file</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Description */}
        <View style={{paddingHorizontal:0}}>
  <Text style={[Needs.label,{alignItems:"center", fontWeight:"400",fontSize:14,lineHeight:19.6}]}>Description <Text style={{color:"#E42527"}}>*</Text></Text>
  <TextInput
    style={[Needs.textarea, focusInput.description && Needs.inputFocused]}
    multiline
    numberOfLines={5}
    value={userInfo.description}
    placeholder="Kindly explain the issue you’re facing here. Please be specific so that we can help you as soon as possible. Kindly refrain from using swear words."
    onFocus={() => setFocusInput({ ...focusInput, description: true })}
    onBlur={() => setFocusInput({ ...focusInput, description: false })}
    onChangeText={(value) => setUserInfo({ ...userInfo, description: value })}
  />
        </View>

          {/* Next Button */}
          <View style={{ marginTop: 40, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={NextPage}
          style={SignUpStyles.loginButtons
           }
         >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={SignUpStyles.loginText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}


   