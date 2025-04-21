import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { useCart } from '@/context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationsAlert() {
  const { cart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };
    
    checkAuthStatus();
  }, []);

  const getCartSummary = () => {
    let totalAmount = 0;
    let uniqueItemCount = cart.length; // Unique items count is the number of items in the cart.
    
    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });
    
    return { totalAmount, uniqueItemCount };
  };
  
  const { uniqueItemCount } = getCartSummary();
  
  return (
    <View style={styles.container}>
      {/* Live Icon - Only visible when logged in */}
      {isLoggedIn && (
        <TouchableOpacity onPress={() => router.push("/(routes)/DkLive")}>
          <View style={styles.circle}>
            <Image 
              source={require('../../assets/images/newimages/live.png')} 
              style={{width: 36.5, height: 30, objectFit: "contain"}} 
            />
          </View>
        </TouchableOpacity>
      )}
      
      {/* Notifications - Only visible when logged in */}
      {isLoggedIn && (
        <TouchableOpacity 
          onPress={() => router.push("/(routes)/Notifications")} 
          style={{marginTop: 7, marginRight: 12}}
        >
          <Image 
            source={require('../../assets/images/newimages/notification-bing.png')} 
            style={{width: 24, height: 24, objectFit: "contain"}} 
          />
          <View style={styles.redDot}></View>
        </TouchableOpacity>
      )}
      
      {/* Cart Icon - Always visible */}
      <TouchableOpacity 
        onPress={() => router.push("/(routes)/cart")} 
        style={{marginTop: 7}}
      >
        <Image 
          source={require('../../assets/images/newimages/cart.png')} 
          style={{width: 24, height: 24, objectFit: "contain"}} 
        />
        <View style={styles.redDots}>
          <Text style={{ fontSize: 8, textAlign: "center", color: "#fff"}}>
            {uniqueItemCount}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 5,
    padding: 4,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signs: {
    position: 'absolute',
    top: -10,
    zIndex: 1,
    right: -15,
    width: 32,
    height: 20,
    fontWeight: "700",
    fontSize: 13,
    borderRadius: 8,
    backgroundColor: '#FCEAE8',
  },
  redDot: {
    position: 'absolute',
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 8,
    backgroundColor: 'red',
    top: -3,
    fontWeight: "700",
    fontSize: 13,
    color: "#fff"
  },
  redDots: {
    position: 'absolute',
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 8,
    backgroundColor: 'red',
    top: -6,
    fontWeight: "700",
    fontSize: 13,
    color: "#fff"
  },
});