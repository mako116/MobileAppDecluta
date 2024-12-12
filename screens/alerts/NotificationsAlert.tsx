import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
      <Text style={styles.signs} >
        Live
      </Text>
           <Octicons name="circle" size={29} color="black" />
      {/* Red Dot in the Center */}
      <View style={styles.redDot} />
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <Octicons name="bell" size={24} color="black" style={styles.icon}/>
      </TouchableOpacity>
      {/* Cart Icon */}
      <TouchableOpacity onPress={()=>router.push("/(routes)/Notifications")}>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
     </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap:10,
    // padding: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
    width: 10,
    height: 10,
    borderRadius: 8, // Makes the dot circular
    backgroundColor: 'red',
  },
});