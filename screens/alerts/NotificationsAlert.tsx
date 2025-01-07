import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { useCart } from '@/context/CartContext';
 
 export default function NotificationsAlert() {
  const { cart} = useCart();
  
  const getCartSummary = () => {
     let itemCount = 0;

    cart.forEach((item) => {
       itemCount += item.count; // Total items
    });

    return {itemCount };
  };

  const { itemCount } = getCartSummary();

  return (
    <View style={styles.container}>
      {/* Live Icon */}
      <TouchableOpacity>
      <View style={styles.circle}>
      <Image source={require('../../assets/images/newimages/live.png')} style={{width:36.5,height:30, objectFit:"contain"}} />
     </View>
    </TouchableOpacity>

    {/* Notifications */}
    <TouchableOpacity onPress={()=>router.push("/(routes)/Notifications")} style={{marginTop:7,marginRight:12}}>
    <Image source={require('../../assets/images/newimages/notification-bing.png')} style={{width:24,height:24, objectFit:"contain"}} />
    <View style={styles.redDot} >
     </View>
    </TouchableOpacity>

      {/* Cart Icon */}
      <TouchableOpacity onPress={()=>router.push("/(routes)/cart")} style={{marginTop:7}}>
      <Image source={require('../../assets/images/newimages/cart.png')} style={{width: 24, height:24, objectFit:"contain"}} />
      <View style={styles.redDots} >
      <Text style={{ fontSize:8,textAlign:"center",color:"#fff"}}>
      {itemCount}
      </Text>
    </View>
      </TouchableOpacity>
     </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap:5,
    padding: 4,
  },
  icon: {
    // marginHorizontal: 10,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
  },
  signs:{
    position: 'absolute',
    top:-10,
    zIndex:1,
    right:-15,
   width:32,
   height:20,
   fontWeight:"700",
   fontSize:13,
   borderRadius:8,
    // borderWidth:2,
     backgroundColor: '#FCEAE8',
  },
  redDot: {
    position: 'absolute',
    right:0,
    width: 12,
    height: 12,
    borderRadius: 8, // Makes the dot circular
    backgroundColor: 'red',
    top:-3,
    fontWeight:"700",
    fontSize:13,
    color:"#fff"
  },
  redDots: {
    position: 'absolute',
    right:-2,
    width: 12,
    height: 12,
    borderRadius: 8, // Makes the dot circular
    backgroundColor: 'red',
    top:-6,
    fontWeight:"700",
    fontSize:13,
    color:"#fff"
  },
});