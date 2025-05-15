import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import Copy from '@/assets/svg/copy';
import CheckSquares from '@/assets/svg/Check square';
import { router } from 'expo-router';
import HeaderWithDesc from '@/UI/Header/HeaderWithDescription';
import DropdownWithSummary from '../../dropdownSummary/ShowSummary';
import Refresh2 from '@/assets/images/New folder/refresh-2';

const Klump = () => {
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

  const [timeLeft, setTimeLeft] = React.useState(59 * 60 + 30); // in seconds
  const [expired, setExpired] = React.useState(false);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }
  
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  // Format seconds to mm:ss
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{height:"100%",}}>
      <HeaderWithDesc title='Pay in Installments with KLUMP' paddingTop={50} />
    <ScrollView contentContainerStyle={{flexDirection:"column",justifyContent:"space-between", }}>
      
      <View style={[YourCart.main,{paddingHorizontal:20,marginBottom:"40%"}]}>
         {/* Title */}
        <Text style={[YourCart.price,{fontWeight:"300",marginTop:15}]}>
        With Klump, you can split your payment into easy installments. But before you proceed, here are a few important things to note:
        </Text>
        <Text style={[YourCart.title,{marginTop:15}]}>
            How Klump Works:
         </Text>
         <Text style={[YourCart.price,{fontWeight:"300",marginTop:5}]}>
         You’ll make an upfront payment of 25% of the total amount, while Klump covers the remaining 75% which you’ll repay Klump in installments
        </Text>
         <Text style={[YourCart.title,{marginTop:15}]}>
         Processing Fee
         </Text>
         <Text style={[YourCart.price,{fontWeight:"300",marginTop:5}]}>
         DecluttaKing applies a 5% processing fee on orders paid with Klump.
        </Text>
        <Text style={[YourCart.title,{marginTop:15}]}>
        KYC & Approval:
         </Text>
         <Text style={[YourCart.price,{fontWeight:"300",marginTop:5}]}>
         Klump requires identity verification (KYC) before approving your payment. 
         DecluttaKing has no influence over Klump’s decision to approve or decline your request.
        </Text>
        <Text style={[YourCart.title,{marginTop:15}]}>
        Order Cancellation:
         </Text>
         <Text style={[YourCart.price,{fontWeight:"300",marginTop:5}]}>
         If you cancel your order after payment, the 5% processing fee and the 25% upfront payment you made to Klump will be fully refunded. DecluttaKing will also refund Klump the 75% amount they covered for your order. Refund processing
          times may vary based on Klump’s terms and conditions.        
        </Text>

        <Text style={[YourCart.title,{marginTop:15}]}>
        Payment Breakdown:
         </Text>

        <View style={[YourCart.noTokenBox,{alignItems:"flex-start"}]}>
         {/* Bank Details */}
         <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingVertical:5}}>
         <Text style={YourCart.price}>
         Your Order Total
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        ₦232,000.00
        </Text>
         </View>

         <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingVertical:5, marginVertical:6,borderTopWidth:1,borderColor:"#E9E9E9"}}>
         <Text style={YourCart.price}>
         5% Processing Fee
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        ₦232,000.00
        </Text>
         </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingVertical:5, marginVertical:4,borderTopWidth:1,borderColor:"#E9E9E9"}}>
         <Text style={YourCart.price}>
         Total Amount to Pay
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        ₦232,000.00
        </Text>
         </View>

         <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingVertical:5, marginVertical:6,borderTopWidth:1,borderColor:"#E9E9E9"}}>
         <Text style={YourCart.price}>
         25% Upfront (paid to Klump)
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        ₦232,000.00
        </Text>
         </View>

         <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingVertical:5, marginVertical:6,borderTopWidth:1,borderColor:"#E9E9E9"}}>
         <Text style={YourCart.price}>
         Amount Klump Covers for You
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        ₦232,000.00
        </Text>
         </View>
         </View> 
      </View>

      </ScrollView>
      
      <View style={{paddingHorizontal:20,paddingBottom:30,gap:10 ,backgroundColor:"#fff"}}>
         {/* Action Button */}
         <TouchableOpacity onPress={handleBackCheckout} style={YourCart.bottomButton}>
          <CheckSquares />
          <Text style={YourCart.buttonText}>Click here after transfer</Text>
        </TouchableOpacity>

 {/* Change payment method */}
      <TouchableOpacity onPress={() => router.push("/(routes)/checkout")} style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
        <Refresh2 />
        <Text style={YourCart.title}>Change payment method</Text>
      </TouchableOpacity>
      </View>
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

export default Klump;