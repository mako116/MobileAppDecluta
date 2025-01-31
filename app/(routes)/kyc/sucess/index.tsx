import SuccessGood from '@/assets/images/kyc/sucessgood';
import KycSignup from '@/styles/Kyc/signup.styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const KycSucess = () => {
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const handleVerify = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      setButtonSpinner(false);
      router.push('/(routes)/kyc/setupPin');
    }, 1000);
  };

  return (
    <View style={KycSignup.container}>
      <ScrollView contentContainerStyle={KycSignup.scrollContainer}>
        <View style={KycSignup.successContainer}>
          <SuccessGood />
          <Text style={[KycSignup.Header, KycSignup.headerText]}>Verification Successful</Text>
          <Text style={[ KycSignup.successText]}>
            Congratulations! Your DecluttaKing account has been verified. Thank you for taking the time to verify your identity. Your security matters.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleVerify} style={KycSignup.button}>
        {buttonSpinner ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={KycSignup.buttonText}>Next</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

   

export default KycSucess;
