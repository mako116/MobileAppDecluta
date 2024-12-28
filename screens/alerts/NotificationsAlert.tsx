import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
 import Octicons from '@expo/vector-icons/Octicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
 
 export default function NotificationsAlert() {
  return (
    <View style={styles.container}>
      {/* Live Icon */}
      <TouchableOpacity>
      <View style={styles.circle}>
      <Image source={require('../../assets/images/newimages/live.png')} style={{width:36.5,height:30, objectFit:"contain"}} />

       {/* Red Dot in the Center */}
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>router.push("/(routes)/Notifications")} style={{marginTop:7,marginRight:12}}>
    <Image source={require('../../assets/images/newimages/notification-bing.png')} style={{width:24,height:24, objectFit:"contain"}} />
    <View style={styles.redDot} >
      {/* <Text style={{ fontSize:8,textAlign:"center",color:"#fff"}}>1</Text> */}
    </View>
      </TouchableOpacity>
      {/* Cart Icon */}
      <TouchableOpacity  style={{marginTop:7}}>
      <Image source={require('../../assets/images/newimages/cart.png')} style={{width: 24, height:24, objectFit:"contain"}} />
      <View style={styles.redDots} >
      <Text style={{ fontSize:8,textAlign:"center",color:"#fff"}}>1</Text>
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