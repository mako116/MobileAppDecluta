import Homes from '@/styles/Homes/Home.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '@/context/CartContext';
import Floatingcart from '@/assets/svg/floatingcart';

const FloatingCart = () => {
  const { cart } = useCart(); // Access cart state from context

  // Calculate cart summary
  const getCartSummary = () => {
    let totalAmount = 0;
    let uniqueItemCount = cart.length; // Count of unique items in the cart

    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });

    return { totalAmount, uniqueItemCount };
  };

  const { uniqueItemCount } = getCartSummary();

  // Only display the FloatingCart component if the cart has items
  if (cart.length === 0) {
    return null;
  }

  return (
    <View style={Homes.float}>
      <TouchableOpacity style={Homes.cartIcon}>
        <Floatingcart />
        <View style={Homes.cartBadge}>
          <Text style={Homes.cartBadgeText}>{uniqueItemCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Additional styling if needed
  },
});

export default FloatingCart;
