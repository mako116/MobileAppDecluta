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

const BankTransfer = () => {
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
      <HeaderWithDesc title='Pay with Bank Transfer' paddingTop={50} />
    <ScrollView contentContainerStyle={{flexDirection:"column",justifyContent:"space-between", }}>
      
      <View style={[YourCart.main,{paddingHorizontal:20,marginBottom:"40%"}]}>
      <DropdownWithSummary />
        {/* Title */}
        <Text style={[YourCart.title,{fontWeight:"300",fontSize:23,lineHeight:40,textAlign:"center",marginTop:5}]}>
        Transfer ₦232,000.00
        </Text>
        <Text style={[YourCart.title,{textAlign:"center"}]}>Account number expires in: <Text style={{ color: '#E42527', fontWeight: '700' }}>{expired ? 'Expired' : formatTime(timeLeft)}</Text>
        </Text>

        <View style={[YourCart.noTokenBox,{alignItems:"flex-start"}]}>
         {/* Bank Details */}
         <Text style={[YourCart.title, { fontSize:15}]}>
          Bank Name
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
          moniepoint mfb
        </Text>

         {/* Account name */}
         <Text style={[YourCart.title,{textTransform:"uppercase",marginTop:10}]}>
          Account Name
        </Text>
        <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
        DecluttaKing limited
           </Text>

        
           
        {/* Account Number */}
        <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{textTransform:"uppercase"}]}>
            Account Number
          </Text>
             <Copy width={20} height={16} />
         </View>
         <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
         01234567890
           </Text>

           {/* Total Amount */}
           <View style={[YourCart.rowed,{justifyContent:"space-between",width:"100%",marginTop:10}]}>
        <Text style={[YourCart.title,{textTransform:"uppercase"}]}>
            Amount
          </Text>
          <Copy width={20} height={16} />
          </View>
          <Text style={[YourCart.price,{textTransform:"uppercase"}]}>
          {formatPrice(totalAmount.toString())}
        </Text>
       
        </View>
        {/* Note */}
        <Text
          style={{
            lineHeight: 16.8,
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Proxima Nova',
            marginTop: 6,
          }}
        >
          <Text style={{ fontWeight: '700' }}>Note:</Text> Please transfer the
          exact order total amount to the account details above. The account
          number is only valid for this transaction and expires in{' '}
          <Text style={{ color: '#E42527', fontWeight: '700' }}>59:30</Text>.
          Only make payment from an account that is in your legal name.
        </Text>

       

        
      </View>

      </ScrollView>
      
      <View style={{paddingHorizontal:20,paddingBottom:30,gap:10 }}>
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

export default BankTransfer;
