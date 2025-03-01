import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Corrected router import
import CountrySelectionModal from './CountryModal/CountrySelect';
import StateSelectionModal from './StateModal/StateModal';
import CitySelectionModal from './CityModal/Citymodal';
import KycSignup from '@/styles/Kyc/signup.styles';
import { useAuth } from '@/context/AuthContext';
  
const SignUpRegister = () => {
  const router = useRouter();
  const { addResidentInfo } = useAuth()
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

  const handleRegister = async () => {
    try {
      setButtonSpinner(true);
      await addResidentInfo(Kyc.Country, Kyc.State,Kyc.City, Kyc.Address);
      console.log("KYC details", Kyc.Country, Kyc.State,Kyc.City, Kyc.Address)
    } catch (error) {
      Alert.alert('Login Failed');
    } finally {
      setButtonSpinner(false);
    }
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
   <View style={KycSignup.container}>
    <ScrollView >
         <Text style={KycSignup.resider}>Where do you reside?</Text>
       
        {/* select Country */}
        <View style={KycSignup.dropdownContainer}>
          <Text style={KycSignup.label}>Country</Text>
          <TouchableOpacity style={KycSignup.dropdownButton} onPress={toggleModal}>
            <View style={KycSignup.centerContainer}>
              <Image
                source={require('../../../../assets/images/newimages/twemoji_flag-nigeria.png')}
                style={KycSignup.flagIcon}
                resizeMode="contain"
              />
              <Text style={KycSignup.countryName}>{Kyc.Country || 'Nigeria'}</Text>
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={KycSignup.icon} />
          </TouchableOpacity>
        </View>

        {/* select state */}
        <View style={{marginTop:10,marginBottom:4}}>
        <Text style={KycSignup.label}>State</Text>
          <TouchableOpacity style={KycSignup.dropdownButton} onPress={toggleModals}>
            <View style={KycSignup.centerContainer}>
             <Text style={Kyc.City ? KycSignup.cityTextSelected : KycSignup.cityText}>
             {Kyc.State || 'Select State'}
               </Text>
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={KycSignup.icon} />
          </TouchableOpacity>
        </View>

         {/* select City */}
          <View style={{marginTop:15,marginBottom:4}}>
          <Text style={KycSignup.label}>City</Text>
          <TouchableOpacity style={KycSignup.dropdownButton} onPress={toggleMod}>
            <View style={KycSignup.centerContainer}>
            <Text style={Kyc.City ? KycSignup.cityTextSelected : KycSignup.cityText}>
               {Kyc.City || 'Select city'}
               </Text>   
            </View>
            <Image source={require('../../../../assets/images/newimages/Down 2.png')} style={KycSignup.icon} />
          </TouchableOpacity>
        </View>

        {/* select Address */}
        <View style={{marginTop:15,marginBottom:4}}>
          <Text style={KycSignup.label}>Street Address</Text>
          <TextInput
            style={[ KycSignup.input, { paddingHorizontal: 40 } ]}
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
            KycSignup.button,
            !isButtonEnabled && KycSignup.buttonDisabled,
          ]}
          disabled={!isButtonEnabled}
        >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text
              style={[
                KycSignup.buttonText,
                !isButtonEnabled && KycSignup.textDisabled,
              ]}
            >
              Next
            </Text>
          )}
        </TouchableOpacity>
   </View>
  );
};



export default SignUpRegister;
