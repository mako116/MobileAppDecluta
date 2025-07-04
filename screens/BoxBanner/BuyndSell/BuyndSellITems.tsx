import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
export default function BuyndSellItems() {
  const searchScreen = () =>{
    router.push("/(routes)/SearchPages/SearchBoard")
  }
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.box} onPress={searchScreen}>
        <View style={{ backgroundColor: '#F5EADC' ,justifyContent:"center", paddingHorizontal:"3%", paddingVertical:22}}>
          <Image source={require('../../../assets/images/newimages/cart.png')}  style={{width:22,height:22,paddingHorizontal:"5%", marginHorizontal:"auto"}}  />
        </View>

        <View>
          <Text style={styles.title}>Buy an Item</Text>
        </View>
        <View style={{marginHorizontal:"auto"}}>
          <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
        </View>
      </TouchableOpacity>

      {/* Second Box */}
      <TouchableOpacity onPress={()=> router.push("/(routes)/sellanItem/FirstStep")}>
        <View style={styles.box}>
          <View style={{ backgroundColor: '#F5EADC',justifyContent:"center", paddingHorizontal:"3%", paddingVertical:22}}>
            <Image source={require('../../../assets/images/newimages/wallet.png')}   style={{width:22,height:22,paddingHorizontal:"5%", marginHorizontal:"auto"}}   />
          </View>
          <View>
            <Text style={styles.title}>Sell an Item</Text>
          </View>
          <View style={{marginHorizontal:"auto"}}>
            <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    // gap:10
   },
  box: {
    gap:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 4,
    overflow: 'hidden',
  },
  icon: {
    marginRight: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight:19.6,
    color: '#212121',
    fontFamily:' HelveticaNeue',
    marginLeft:5
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
