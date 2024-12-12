import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ProductsSlider from '../slider/ProductsSlider6'
import ProductsSlider6 from '../slider/ProductsSlider6'
 
export default function DiscoverProducts() {
  return (
    <View style={{backgroundColor:"#f9f9f9",paddingRight:10}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",paddingVertical:10,paddingRight:10,paddingLeft:20}}>
        <Text style={{fontWeight:"700",fontSize:16,lineHeight:22.4}}>Discover great offers</Text>
        <View >
           <TouchableOpacity style={{width:100,flexDirection:"row",alignItems:"center", justifyContent:"flex-end"}}>

          
            <Text style={{fontWeight:"400",fontSize:13.4,lineHeight:15.4}}>View all</Text>
            {/* <View style={{ alignItems:"flex-end",}}> */}
           <MaterialIcons name="arrow-forward-ios" size={14} color="black" style={{fontWeight:"bold"}}/>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <ProductsSlider6/>
      </View>
    </View>
  )
}