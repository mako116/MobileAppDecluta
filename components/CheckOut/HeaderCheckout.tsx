import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import Wallet from './Wallet';
import Close from '@/assets/images/kyc/close';
import HeaderCheckoutStyl from '@/styles/HeaderCheckout/Headercheckout';
import { useNavigation } from 'expo-router';
import { useCart } from '@/context/CartContext';

const HeaderCheckout = () => {

      const { cart} = useCart();
     
     const navigation = useNavigation();
     
         const goBack = () => {
             navigation.goBack();
         };
    return (
        <View>
        <View style={{ backgroundColor: "#fff", paddingHorizontal: "3.4%", paddingTop: 14 , paddingBottom: 10,}}>
            <View style={HeaderCheckoutStyl.tabContainer}>
             <Text
           style={HeaderCheckoutStyl.activeTabText}
           >Checkout</Text>
              {/* Close Cross Button */}
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-end", flex:1}}>
               <TouchableOpacity
             onPress={goBack}
          >
             <Close/>
          </TouchableOpacity>
          </View>
            </View>
         
         {/* if there is no cart data then dont display */}
           <Text
            style={{
              paddingHorizontal: 3,
              fontFamily: "Proxima Nova",
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16.8,
              color: "#212121",
              paddingTop:2,
              
            }}
          >
            Your order is reserved for 
            <Text style={{ color: "#E42527", fontWeight: "700", }}> 14:34 </Text>
            complete order now!
          </Text>
         
        </View>

        {/* wallet */}
        <Wallet/>
        </View>
    );
}

 
export default HeaderCheckout;
