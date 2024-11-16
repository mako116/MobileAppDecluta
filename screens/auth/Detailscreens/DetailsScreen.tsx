import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, BackHandler, Modal, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { SignUpStyles } from '../../../styles/Signup/signup.style';
import { router } from 'expo-router';
import PhoneInput from 'react-native-phone-input';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

export default function DetailScreen() {
   const [buttonSpinner, setButtonSpinner] = useState(false);
   const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    LastName: "",
    Gender: "",
    Phone: "",
    email: ""
  });
  const [focusInput, setFocusInput] = useState({
    email: false,
    firstName: false,
    LastName: false,
    Gender: false,
    Phone: false,
  });
  const [showExitModal, setShowExitModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for custom dropdown
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('US'); // Default to 'US'
  const [callingCode, setCallingCode] = useState('1');  // Default calling code for 'US'

  // Check if the required fields are filled
  useEffect(() => {
    setIsButtonEnabled(
      userInfo.firstName.length > 0 &&
      userInfo.LastName.length > 0 &&
      userInfo.Gender.length > 0 &&
      userInfo.email.length > 0 &&
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
    setUserInfo({ ...userInfo, Gender: gender });
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const NextPage= () =>{
    setButtonSpinner(true);
    setTimeout(() => {
      router.push("/(routes)/OTPPhone")
      setButtonSpinner(false);
      // Navigate to dashboard/home after successful login
    }, 1000);
  }

  const handleHelp = () =>{
    router.push("/(routes)/need-help")
  }
  return (
    <ScrollView style={{ flex: 1 ,}} scrollEventThrottle={16}>
      <View style={{ padding: 16 }}>
        {/* First Name Input */}
        <View>
          <Text style={SignUpStyles.label}>First name</Text>
          <TextInput
            style={[
              SignUpStyles.input,
              focusInput.firstName && { borderColor: "#DEBC8E" },
              { paddingHorizontal: 40 }
            ]}
            keyboardType="default"
            value={userInfo.firstName}
            placeholder="Enter your legal first name"
            onFocus={() => setFocusInput({ ...focusInput, firstName: true })}
            onBlur={() => setFocusInput({ ...focusInput, firstName: false })}
            onChangeText={(value) => setUserInfo({ ...userInfo, firstName: value })}
          />
        </View>

        {/* Last Name Input */}
        <View>
          <Text style={SignUpStyles.label}>Last name</Text>
          <TextInput
            style={[
              SignUpStyles.input,
              focusInput.LastName && { borderColor: "#DEBC8E" },
              { paddingHorizontal: 40 }
            ]}
            keyboardType="default"
            value={userInfo.LastName}
            placeholder="Enter your legal last name"
            onFocus={() => setFocusInput({ ...focusInput, LastName: true })}
            onBlur={() => setFocusInput({ ...focusInput, LastName: false })}
            onChangeText={(value) => setUserInfo({ ...userInfo, LastName: value })}
          />
        </View>

        {/* Custom Gender Dropdown */}
        <View style={styles.dropdownContainer}>
          <Text style={SignUpStyles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={styles.dropdownButtonText}>
              {userInfo.Gender || "Select Gender"}
            </Text>
            <Ionicons
              name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#333"
            />
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.dropdownMenu}>
              {["Male", "Female"].map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.dropdownItem,
                    userInfo.Gender === gender && styles.selectedBackground // Highlight selected item
                  ]}
                  onPress={() => selectGender(gender)}
                >
                  <Text style={styles.dropdownItemText}>{gender}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Email Input */}
        <View>
          <Text style={SignUpStyles.label}>Email</Text>
          <TextInput
            style={[
              SignUpStyles.input,
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
        </View>

        {/* Referral */}
        <View style={{marginTop:15,marginBottom:40}}>
          <Text style={SignUpStyles.label}>Who Referred You?</Text>
          <TextInput
            style={[SignUpStyles.input]}
            keyboardType="default"
            placeholder="Enter referral code"
          />
        </View>
        
        {/* Next Button */}
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
            <Text style={[ !isButtonEnabled && { backgroundColor: "#E9E9E9", color:"#E9E9E9" },SignUpStyles.loginText]}>Next</Text>
          )}
        </TouchableOpacity>

        <View style={{flexDirection:"row", justifyContent: "center"}}>
          <MaterialCommunityIcons name="message-question" size={24} color="black" />
          <Text>Need help?</Text>
          <TouchableOpacity onPress={handleHelp}>
            <Text style={{color:"#DEBC8E"}}>Click Here</Text>
          </TouchableOpacity>
        </View>
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
