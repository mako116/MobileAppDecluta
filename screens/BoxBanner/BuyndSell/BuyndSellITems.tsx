import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
export default function BuyndSellItems() {
  const searchScreen = () =>{
    router.push("/(routes)/SearchPages/SearchBoard")
  }
  return (
    <View >
      <View style={styles.row}>
        {/* First Box */}
        <View>
        <TouchableOpacity onPress={searchScreen}>
        <View style={styles.box}>
        
        <View style={{ backgroundColor: '#F5EADC' , height: '100%',justifyContent:"center",borderRadius:4,padding:8}}>
          <Image source={require('../../../assets/images/newimages/cart.png')}  style={{width:22,height:22}}  />
            </View>

           <View style={styles.textContainer}>
            <Text style={styles.title}>Buy an Items</Text>
           </View>
           <View style={{width:16, alignItems:"flex-end",}}>
           <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
           </View>
           
        </View>
        </TouchableOpacity>
        </View>
        {/* Second Box */}
        <View>
        <TouchableOpacity>
        <View style={styles.box}>
            <View style={{ backgroundColor: '#F5EADC' , height: '100%',justifyContent:"center",borderRadius:4,padding:8}}>
            <Image source={require('../../../assets/images/newimages/wallet-3.png')}  style={{width:22,height:22}}  />
            </View>
           <View style={styles.textContainer}>
            <Text style={styles.title}>Sell an Items</Text>
           </View>
           <View style={{width:16, alignItems:"flex-end",}}>
           <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
           </View>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
  box: {
    gap:6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    // padding: 16,
    width: 152,  
    height:56
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    // flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight:19.6,
    color: '#212121',
    fontFamily:'HelveticaNeueLTPro'
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
