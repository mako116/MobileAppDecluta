import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
 import ProductsSlider6 from '../slider/ProductsSlider6'
import { router } from 'expo-router' 
 
export default function DiscoverProducts() {
  return (
    <View style={{backgroundColor:"#f9f9f9", paddingHorizontal: 15}}>
      <View 
        style={{
          flexDirection:"row", 
          alignItems:"center", 
          justifyContent:"space-between",
          paddingVertical: 10,
        }}
      >
        <Text style={{fontWeight:"800",fontSize:18,lineHeight:22.4,fontFamily:"Helvetica Neue",color:"#212121"}}>Discover great offers</Text>
        <View >
          <TouchableOpacity onPress={()=> router.push("/(routes)/HomesectionViewAll/Discover")}  style={{width:100,flexDirection:"row",gap:5,justifyContent:"flex-end", alignItems:"center", paddingRight:5}}>
            <Text style={{fontWeight:"400",fontSize:18,lineHeight:22.4, fontFamily:"Proxima Nova", color:"#212121"}}>View All</Text>
            <Image source={require('../../../../assets/images/newimages/Vector.png')} style={{width:6,height:11}} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ProductsSlider6/>
      </View>
    </View>
  )
}