import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoBackIcon from '@/assets/svg/LeftBack';
import Dklive from '@/assets/svg/dklive';
import HeaderCheckoutStyl from '@/styles/HeaderCheckout/Headercheckout';

import cameras from '../../assets/images/dklive/camera.png';
import Cart from '../../assets/images/dklive/carts.png';
import rate from '../../assets/images/dklive/rate.png';
import quest from '../../assets/images/dklive/quest.png';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { router } from 'expo-router';

const DkLivePage = () => {
      const [buttonSpinner, setButtonSpinner] = useState(false);
      const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
    
  const dklives = [
    { name: 'Live video broadcasts', img: cameras },
    { name: 'Real-time purchasing', img: Cart },
    { name: 'Interactive chat wand Q & A', img: rate },
    { name: 'Exclusive deals and discounts', img: quest },
  ];

  const FAQ = [
    { name: 'Q: What is DK Live?',  text:"A: DK Live is a live shopping platform connecting buyers and sellers."},
    { name: 'Q: When is DK Live launching?', text:"A: We’ll update you before we launch!"},
    { name: 'Q: How do i access DK Live?', text:"A: Sign up for early access and receive a notification when we launch."},
   ];

     const NextPage = () => {
       setButtonSpinner(true);
       setTimeout(() => {
         router.push("/(routes)/emailRegister");
         setButtonSpinner(false);
       }, 1000);
     };

  return (
    <View style={HeaderCheckoutStyl.containers} >
      {/* Header Section */}
      <View
        style={[
          HeaderCheckoutStyl.tabContainer,
          {
            gap: 15,
            backgroundColor: '#fff',
            paddingHorizontal: '3.4%',
            paddingTop: '12%',
            paddingBottom: 10,
          },
        ]}
      >
        <GoBackIcon />
        <Text style={HeaderCheckoutStyl.activeTabText}>DK Live</Text>
      </View>

      {/* Content Section */}
      <ScrollView scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
        showsVerticalScrollIndicator={false}>
        <View style={HeaderCheckoutStyl.DKContain}>
          <Dklive />
          <Text style={HeaderCheckoutStyl.DKtext}>
            Imagine being able to shop your favorite items in real-time, interacting with sellers,
            and getting exclusive deals. DK Live is the ultimate live shopping experience, connecting
            buyers and sellers like ever before.
          </Text>

          {/* Upcoming Features */}
          <View>
            <Text style={HeaderCheckoutStyl.activeTabText}>What’s coming</Text>
            <View style={HeaderCheckoutStyl.dkliveBg}>
              {dklives.map((items, index) => (
                <View key={index} style={HeaderCheckoutStyl.dklivesection}>
                  <Image source={items.img} style={{ width: 20, height: 30, objectFit: 'contain' }} />
                  <Text style={HeaderCheckoutStyl.DKtext}>{items.name}</Text>
                </View>
              ))}
            </View>
          </View>

           {/* FAQ */}
           <View>
            <Text style={HeaderCheckoutStyl.activeTabText}>FAQs</Text>
            <View style={HeaderCheckoutStyl.dkliveBg}>
              {FAQ.map((items, index) => (
                <View key={index}  >
                   <Text style={[HeaderCheckoutStyl.DKtext,{fontWeight:"700"}]}>{items.name}</Text>
                   <Text style={[HeaderCheckoutStyl.DKtext,{marginBottom:5}]}>{items.text}</Text>
                </View>
              ))}
            </View>
          </View>
          <Text>
          Sign up for early access and be the first tio experience DecluttaKing Live!
          </Text>
        </View>
      </ScrollView>

      {/* signup Now */}
      <View style={{paddingVertical:10, backgroundColor:"#fff"}}>
      <TouchableOpacity
        onPress={NextPage}
        style={[{ marginTop: 20 ,}, SignUpStyles.loginButton,]}
         > 
        {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
        ) : (
        <Text
        style={[ SignUpStyles.loginText, ]} >
         Sign Up Now! </Text> )}
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default DkLivePage;
