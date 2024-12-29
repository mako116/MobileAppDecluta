import Cart from '@/assets/images/kyc/cart';
import Profile from '@/assets/images/kyc/profile';
import Searchsmbox from '@/assets/images/kyc/searchsmbox';
import Shield from '@/assets/images/kyc/shield';
import SuccessGood from '@/assets/images/kyc/sucessgood';
import Tik from '@/assets/images/kyc/tik';
import KycSignup from '@/styles/Kyc/signup.styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileCompletion = () => {
    const [buttonSpinner, setButtonSpinner] = useState(false);
    
     const handleVerify = () => {
        setButtonSpinner(true);
        setTimeout(() => {
          setButtonSpinner(false);
          router.push('/(tabs)/home');  
        }, 1000);
      };

  // Data for "What You Need to Verify" section
  const verifyList = [
    { icon: <Tik />, text: 'Withdrawal-ready' },
    { icon: <Tik />, text: 'Verified profile badge enabled' },
    { icon: <Tik />, text: 'Part of our trusted community' },
  ];

  // Data for "Why Verify Your Profile" section
  const whyVerifyList = [
    { icon: <Searchsmbox />, text: 'Explore listing with confidence' },
    { icon: <Cart />, text: 'Buy and sell seamlessly ' },
    { icon: <Shield />, text: 'Enjoy enhanced account security' },
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
        <View style={[KycSignup.successContainer,{marginTop:"15%", paddingVertical:12}]}>
           <SuccessGood/>
        </View>

        <Text style={[KycSignup.resider,{fontSize:23, textAlign:"center", paddingVertical:0}]}>
        Profile Complete
        </Text>
        <Text style={[KycSignup.texts, {textAlign:"center"}]}>
        Congrats your DecluttaKing profile has been completed successfully.
        </Text>
       

        <View>
          <Text style={[KycSignup.Header,{marginBottom:5}]}>
          You’re Now:
          </Text>
          <View style={{borderWidth:1, borderColor:"#E9E9E9",paddingVertical:6, paddingHorizontal:12,borderRadius:8,backgroundColor:"#fff"}}>
          {renderList(verifyList)}
          </View>
        </View>
        <View style={{marginTop:12,}}>
          <Text style={KycSignup.Header}>What’s Next?</Text>
          <View style={{borderWidth:1, borderColor:"#E9E9E9",paddingVertical:6, paddingHorizontal:10,borderRadius:8,backgroundColor:"#fff"}}>
          {renderList(whyVerifyList)}
          </View>
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
              Start Exploring!
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


export default ProfileCompletion;
