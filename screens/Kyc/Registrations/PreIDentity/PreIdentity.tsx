import Profile from '@/assets/images/kyc/profile';
import Tik from '@/assets/images/kyc/tik';
import KycSignup from '@/styles/Kyc/signup.styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PreIdentity = () => {
     const [buttonSpinner, setButtonSpinner] = useState(false);
    
     const handleVerify = () => {
        setButtonSpinner(true);
        setTimeout(() => {
          setButtonSpinner(false);
          router.push('/(routes)/kyc/sucess');  
        }, 1000);
      };

  // Data for "What You Need to Verify" section
  const verifyList = [
    { icon: <Tik />, text: 'Valid Government-issued ID' },
    { icon: <Tik />, text: 'NIN (National Identification Number)' },
    { icon: <Tik />, text: 'BVN (Bank Verification Number)' },
  ];

  // Data for "Why Verify Your Profile" section
  const whyVerifyList = [
    { icon: <Tik />, text: 'Access Withdrawals Instantly' },
    { icon: <Tik />, text: 'Earn a Verified Profile Badge' },
    { icon: <Tik />, text: 'Build Trust with Our Community' },
  ];

  // Function to render lists
  const renderList = (list: any[]) =>
    list.map((item: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
      <View key={index} style={styles.listItem}>
        {item.icon}
        <Text style={styles.listText}>{item.text}</Text>
      </View>
    ));

  return (
    <View style={KycSignup.container}>
      <ScrollView>
        <View style={KycSignup.profile}>
          <Profile />
        </View>

        <Text style={KycSignup.texts}>
          To ensure the safety and security of your DecluttaKing account, you
          need to complete a quick verification process before making
          withdrawals. Our trusted third-party partner, IdentityPass by Prembly,
          will handle the verification.
        </Text>
        <Text style={KycSignup.texts}>
          Your data is securely stored and protected in compliance with industry
          standards.
        </Text>
        <Text style={KycSignup.texts}>
          It only takes a few IdentityPass—simply follow the instructions when
          the Prembly verification screen loads.
        </Text>

        <View>
          <Text style={KycSignup.Header}>
            What You Need to Verify Your Profile:
          </Text>
          {renderList(verifyList)}
        </View>
        <View style={{marginTop:7,}}>
          <Text style={KycSignup.Header}>Why Verify?</Text>
          {renderList(whyVerifyList)}
        </View>
      </ScrollView>

      <TouchableOpacity
          onPress={handleVerify}
          style={[
            KycSignup.button,{marginBottom:"7%"}
           ]}
         >
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text
              style={[
                KycSignup.buttonText,
               ]}
            >
              Verify Now
            </Text>
          )}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  listText: {
    marginLeft: 8,
    fontFamily:"Proxima Nova",
      fontWeight:"400",
      fontSize:13,
      lineHeight:19.6,
  },
});

export default PreIdentity;
