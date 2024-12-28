import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, BackHandler, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { SignUpStyles } from '../../../styles/Signup/signup.style';
import { router } from 'expo-router';
  import { useAuth } from '@/context/AuthContext';

export default function DetailScreen() {
  const { email, register} = useAuth();
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
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [countryCode, setCountryCode] = useState<CountryCode>('US'); // Default to 'US'
  const [callingCode, setCallingCode] = useState('234');  // Default calling code for 'US'

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
  // const onSelectCountry = (country: Country) => {
  //   setCountryCode(country.cca2 as CountryCode); // Set the selected country code
  //   setCallingCode(country.callingCode[0]); // Set the corresponding calling code
  // };

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
  const handleSignUp = async () => {
    try {
      setButtonSpinner(true);
      if (!email) {
        alert('Email is required');
        return;
      }
      await register(firstName, lastName, email, gender, phoneNumber);
    } catch (err) {
    } finally {
      setButtonSpinner(true);
      setTimeout(() => {
        setButtonSpinner(false);
        // setTimeout(() => {
        //   setSuccessMessage("");
        //   router.push("/(routes)/splashscren"); // Navigate to the dashboard or home
        // }, 2000);
      }, 1000);
    }

    
  };

  const handleHelp = () =>{
    router.push("/(routes)/need-help")
  }
  return (
    <ScrollView style={{ flex: 1 ,}} scrollEventThrottle={1}>
      <View style={{ marginTop: 15 }}>
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
            placeholderTextColor='gray'
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
            placeholderTextColor='gray'
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
            placeholderTextColor='gray'
            onFocus={() => setFocusInput({ ...focusInput, email: true })}
            onBlur={() => setFocusInput({ ...focusInput, email: false })}
            onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.container}>
          <Text style={SignUpStyles.label}>Phone Number</Text>
          <View style={styles.phoneContainer}>
             <Image
              source={require("../../../assets/images/newimages/twemoji_flag-nigeria.png")} 
                style={styles.customLogo}
                 />
            <Text style={styles.callingCode}>+{callingCode}</Text>
            <TextInput
              style={styles.phoneInput}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              placeholder="Phone number"
              placeholderTextColor='gray'
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
            placeholderTextColor='gray'
          />
        </View>
        
        {/* Next Button */}
        <TouchableOpacity
          onPress={handleSignUp}
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
    fontFamily:"Proxima Nova",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 8,
  },
  dropdownButtonText: {
    color: '#333',
    fontFamily:"Proxima Nova",
  },
  customLogo: {
    marginLeft:15,
     height: 18,
     width: 18, // Adjust size of the custom logo
     resizeMode: "contain",
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
    fontFamily:"Proxima Nova",
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
    marginHorizontal: 10,
    fontSize: 13,
    color: '#212121',
    borderRightWidth: 1,
    height:20,
    borderColor: "#212121",
    paddingRight: 15,
    fontFamily:"Helvetica Neue",
    lineHeight:18.2,
    fontWeight:"500"
  },
  flagButton: {
    marginLeft: 8,
  },
  phoneInput: {
    height: 55,
    borderRadius: 3,
    
    fontSize: 14,
    backgroundColor: "white",
     color: '#212121',
    paddingRight: 15,
    fontFamily:"Proxima Nova",
    lineHeight:14,
    fontWeight:"500"
  },
}); 
