import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router'; // Corrected router import
import CountrySelectionModal from './CountryModal/CountrySelect';
import StateSelectionModal from './StateModal/StateModal';
import CitySelectionModal from './CityModal/Citymodal';
import { SignUpStyles } from '@/styles/Signup/signup.style';
 
const SignUpRegister = () => {
  const router = useRouter();
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isState, setisState] = useState(false);
  const [iscity, setiscity] = useState(false);

  
  const [Kyc, setKyc] = useState({
    Country: '',
    State: '',
    City: '',
    Address: '',
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const allFieldsFilled =
      Kyc.Country.length > 0 &&
      Kyc.State.length > 0 &&
      Kyc.City.length > 0 &&
      Kyc.Address.length > 0 
    setIsButtonEnabled(allFieldsFilled); // Enable/Disable button based on form fields
  }, [Kyc]);

  const handleRegister = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      setButtonSpinner(false);
      // router.push('/nextPage');  
    }, 1000);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleModals = () => {
    setisState(!isState);
  };

  const toggleMod = () => {
    setiscity(!iscity);
  };


  const selectCountry = (country: string) => {
    setKyc({ ...Kyc, Country: country });
  };
  const selectState = (state: string) => {
    setKyc({ ...Kyc, State: state });
  };

  const selectCity = (city: string) => {
    setKyc({ ...Kyc, City: city });
  };

  

  return (
   <View style={styles.container}>
    <ScrollView >
         <Text style={styles.resider}>Where do you reside?</Text>
       
        {/* select Country */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Country</Text>
          <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
            <View style={styles.centerContainer}>
              <Image
                source={require('../../../../assets/images/newimages/twemoji_flag-nigeria.png')}
                style={styles.flagIcon}
                resizeMode="contain"
              />
              <Text style={styles.countryName}>{Kyc.Country || 'Nigeria'}</Text>
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* select state */}
        <View style={{marginTop:10,marginBottom:4}}>
        <Text style={styles.label}>State</Text>
          <TouchableOpacity style={styles.dropdownButton} onPress={toggleModals}>
            <View style={styles.centerContainer}>
            <TextInput
              //  style={[ styles.input, { paddingHorizontal: 40 } ]}
              keyboardType="default"
              value={Kyc.State}
              placeholder="Select State"
              placeholderTextColor='#A4A4A4'
             onChangeText={(value) => setKyc({ ...Kyc, State: value })}
           />
              {/* <Text style={styles.countryName}>{Kyc.State || 'Oyo'}</Text> */}
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

         {/* select City */}
          <View style={{marginTop:15,marginBottom:4}}>
          <Text style={styles.label}>City</Text>
          <TouchableOpacity style={styles.dropdownButton} onPress={toggleMod}>
            <View style={styles.centerContainer}>
            <TextInput
              //  style={[ styles.input, { paddingHorizontal: 40 } ]}
              keyboardType="default"
              value={Kyc.City}
              placeholder="Select City"
              placeholderTextColor='#A4A4A4'
             onChangeText={(value) => setKyc({ ...Kyc, City: value })}
           />
              {/* <Text style={styles.countryName}>{Kyc.City || 'select'}</Text> */}
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* select Address */}
        <View style={{marginTop:15,marginBottom:4}}>
        <Text style={styles.label}>Street Address</Text>
             <TextInput
               style={[ styles.input, { paddingHorizontal: 40 } ]}
              keyboardType="default"
              value={Kyc.Address}
              placeholder="Enter your street address"
              placeholderTextColor='#A4A4A4'
             onChangeText={(value) => setKyc({ ...Kyc, Address: value })}
           />
          </View>

        
 
      {/* modal country */}
      {isModalVisible && (
        <CountrySelectionModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          onSelectCountry={selectCountry}
        />
      )}
      {/*modal state */}
      {isState &&(
        <StateSelectionModal
        isState={isState}
          toggleModals={toggleModals}
          onSelectstate={selectState}
        />
      )}

      {/*modal state */}
      {isState &&(
        <StateSelectionModal
        isState={isState}
          toggleModals={toggleModals}
          onSelectstate={selectState}
        />
      )}

      {/*modal state */}
      {iscity &&(
        <CitySelectionModal
        iscity={iscity}
          toggleMod={toggleMod}
          onSelectCity={selectCity}
        />
      )}
    </ScrollView>
     {/* submit button */}
     <TouchableOpacity
          onPress={handleRegister}
          style={[
            styles.button,
            !isButtonEnabled && styles.buttonDisabled,
          ]}
          disabled={!isButtonEnabled}
        >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text
              style={[
                styles.buttonText,
                !isButtonEnabled && styles.textDisabled,
              ]}
            >
              Next
            </Text>
          )}
        </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 13,
  },
  input: {
    paddingVertical: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingHorizontal: 15,
    paddingLeft: 15,
    fontSize: 14,
    backgroundColor: "white",
    color: "#a1a1a1",
    fontFamily:"Proxima Nova"
  },
  resider: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 39.2,
    color: '#212121',
    paddingVertical: 10,
    fontFamily:"Helvetica Neue"
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    color: '#212121',
    marginBottom:4,
    fontFamily:"Proxima Nova",
    lineHeight:19.6
  },
  dropdownContainer: {
    marginVertical: 10,
  },
  dropdownButton: {
    paddingVertical: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    width: "18%",
    height: 24,
    marginRight: 8,
  },
  countryName: {
    fontWeight: '400',
    fontSize: 14,
    color: '#212121',
    fontFamily:"Proxima Nova",
    lineHeight:19.6
  },
  icon: {
    width: "10%",
    height: "100%",
    objectFit:"contain"
  },
  button: {
    marginVertical: 20,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#DEBC8E',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#E9E9E9',
  },
  buttonText: {
    color: '#212121',
    fontWeight: '400',
    fontSize: 16,
    fontFamily:"Proxima Nova",
    lineHeight:22.4
  },
  textDisabled: {
    color: '#A4A4A4',
    fontWeight: '400',
    fontSize: 16,
    fontFamily:"Proxima Nova",
    lineHeight:22.4
  },
});

export default SignUpRegister;
