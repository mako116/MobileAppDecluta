import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { useCart } from '@/context/CartContext';
import YourCart from '@/styles/Cart/YourCart.styles';
import Copy from '@/assets/svg/copy';
import CheckSquares from '@/assets/svg/Check square';
import { router } from 'expo-router';

const BankTransferM = () => {
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
    <View>
      {/* Main container */}
      <View style={styles.main}>
        {/* Title */}
        <Text style={YourCart.title}>Pay in to the bank account below:</Text>

        {/* Total Amount */}
        <View style={YourCart.rows}>
          <Text style={[YourCart.price, { paddingTop: 5 }]}>
            Amount: {formatPrice(totalAmount.toString())}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Copy />
          </View>
        </View>

        {/* Account Number */}
        <View style={YourCart.rows}>
          <Text style={[YourCart.price, { paddingTop: 0}]}>
            Account Number: 01234567890
          </Text>
          <View style={{ marginTop: 10 }}>
            <Copy />
          </View>
        </View>

        {/* Bank Details */}
        <Text style={[YourCart.price, { paddingTop: 0}]}>
          Bank: Wema Bank
        </Text>
        <Text style={[YourCart.price, { paddingTop: 0 }]}>
          Account Name: DecluttaKing - Wema Bank
        </Text>

        {/* Action Button */}
        <TouchableOpacity onPress={handleBackCheckout} style={YourCart.bottomButton}>
          <CheckSquares />
          <Text style={YourCart.buttonText}>Click here after transfer</Text>
        </TouchableOpacity>

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

export default BankTransferM;
