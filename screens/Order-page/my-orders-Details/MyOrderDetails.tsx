import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
 import { router } from 'expo-router';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
// import DropdownWithSummary from '../../dropdownSummary/ShowSummary';
 import Rightarrow from '@/assets/images/kyc/rightarrow';
 
import SellersDetails from './SellersDetails';
import OrderTimeline from './OrderTimeline';

const MyOrderDetails = () => {
   // Access the cart context
  const { cart } = useCart();

  // Calculate total amount from cart
  const getCartSummary = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });
    return { totalAmount };
  };

  const { totalAmount } = getCartSummary();

  // Format price into currency format
  const formatPrice = (price: string): string => {
    const numericValue = price.replace(/[^0-9]/g, ''); // Keep only numeric characters
    if (!numericValue) return ''; // Return empty string if no valid number is found
    const parsedValue = parseInt(numericValue, 10); // Convert to number
    if (isNaN(parsedValue)) return ''; // Return empty for invalid numbers
    return `₦ ${parsedValue.toLocaleString('en-NG')}`; // Format as currency
  };

  const handleBackCheckout = () =>{
    router.push("/(routes)/checkout")
  }

  

  return (
    <View style={{height:"100%",marginBottom:"150%"}}>
      <HeaderWithDesc title='Order #12345-1' paddingTop={50} Actions ordersBars/>
    <ScrollView  contentContainerStyle={{flexDirection:"column",height:"200%", marginBottom:"150%"}}>
      
      <View style={[YourCart.main,{paddingHorizontal:20}]}>
         {/* Title */}
        <Text style={[YourCart.title,{marginTop:10,marginBottom:-5}]}>
        Order Summary 
        </Text>

        <View style={[YourCart.noTokenBox,{alignItems:"flex-start",padding:7,paddingHorizontal:10}]}>
        {/* Item */}
        <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',color:"#7E7E7E"}]}>
           Item
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200',}]}>
         Samsung Galaxy A05..
        </Text>
          </View>

         {/* Date */}
         <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',color:"#7E7E7E"}]}>
           Date
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200',}]}>
          25-06-2024
        </Text>
          </View>

         {/* Order ID */}
         <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',color:"#7E7E7E"}]}>
           Order ID
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200',}]}>
          12345-1
        </Text>
          </View>

         {/* Status */}
        <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',color:"#7E7E7E"}]}>
            Status
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200',}]}>
          confirm PickUp
        </Text>
          </View>
          
       
        {/* Pickup Deadline */}
        <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',color:"#7E7E7E"}]}>
            Pickup Deadline
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200',}]}>
          Jun 31st 2024
        </Text>
         
         </View>
         {/* Transaction History */}
         <TouchableOpacity 
         onPress={()=>router.push("/(routes)/order/order-transactions")} 
         style={{
            flexDirection:'row',
            gap:1,
            borderTopWidth:1,
            borderColor:"#E9E9E9",
            alignItems:"center",
            justifyContent:"center",
            marginHorizontal:"auto",
            width:"100%",
            marginTop:10
         }}>
        <Text style={[YourCart.title,{fontSize:14}]}>
            View transaction history
        </Text>
        {/* Arrow */}
        <Rightarrow width={10} height={10} color='#212121' strokeWidth={'2.5'}/>
        </TouchableOpacity>       

        </View>
        {/* Seller details */}
        <SellersDetails/>

        {/* Order Timeline */}
        <OrderTimeline/>
      </View>

      </ScrollView>
       
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container styling
  main: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingVertical: 17,
    paddingHorizontal: 10,
    gap: 7,
    backgroundColor: '#fff',
    borderRadius: 4,
  },

  // Error text styling
  errorText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E42527',
    fontFamily: 'Proxima Nova',
    lineHeight: 19.6,
  },
});

export default MyOrderDetails;
