import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoBackIcon from '@/assets/svg/LeftBack';
import Dklive from '@/assets/svg/dklive';
import HeaderCheckoutStyl from '@/styles/HeaderCheckout/Headercheckout';
import Smallcart from '@/assets/images/notifi/smallcart';

const NotificationSettingsPage = () => {

    const [expanded, setExpanded] = useState(false);

    const fullText =
      "To ensure a smooth and secure experience on DecluttaKing, you’ll automatically receive essential notifications about transactions, pickups, and important updates. These notifications help you stay informed about your activities, ensure timely pickups, and protect your accounts.";
  
    const shortText =
      "To ensure a smooth and secure experience on DecluttaKing, you’ll automatically receive essential notifications about transactions, pickups, and important updates... ";
  
     const dklives = [
        { name: 'Live video broadcasts', },
        { name: 'Real-time purchasing'},
        { name: 'Interactive chat wand Q & A'},
        { name: 'Exclusive deals and discounts' },
      ];
    
      const FAQ = [
        { name: 'Q: What is DK Live?',  text:"A: DK Live is a live shopping platform connecting buyers and sellers."},
        { name: 'Q: When is DK Live launching?', text:"A: We’ll update you before we launch!"},
        { name: 'Q: How do i access DK Live?', text:"A: Sign up for early access and receive a notification when we launch."},
       ];
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
              width:"100%"
            },
          ]}
        >
          <GoBackIcon />
          <Text style={HeaderCheckoutStyl.activeTabText}>Notification Settings</Text>
          <Smallcart/>
        </View>
  
        {/* Content Section */}
        <ScrollView scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
          showsVerticalScrollIndicator={false}>
          <View style={HeaderCheckoutStyl.DKContain}>
          <Text style={HeaderCheckoutStyl.DKtext}>
    {expanded ? fullText : shortText}
    {!expanded && (
      <Text onPress={() => setExpanded(true)} style={[HeaderCheckoutStyl.DKtext,{fontWeight:"700"}]} >
        Read more
      </Text>
    )}
  </Text>
            {/* Upcoming Features */}
            <View>
              <Text style={HeaderCheckoutStyl.activeTabText}>What’s coming</Text>
              <View style={HeaderCheckoutStyl.dkliveBg}>
                {dklives.map((items, index) => (
                  <View key={index} style={HeaderCheckoutStyl.dklivesection}>
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
  
        
      </View>
    );
}
 
const styles = StyleSheet.create({})

export default NotificationSettingsPage;
