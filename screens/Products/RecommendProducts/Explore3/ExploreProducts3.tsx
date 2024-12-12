import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
 import ProductsSliderT3 from '../slider3/ProductsSliderT3'
import { router } from 'expo-router'
  
export default function ExploreProducts3() {
  return (
    <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:12}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",paddingVertical:10, paddingHorizontal:5}}>
        <Text style={{fontWeight:"700",fontSize:16,lineHeight:22.4}}>See what we recommend</Text>
        <View >
           <TouchableOpacity onPress={()=> router.push("/(routes)/HomesectionViewAll/Recommend")} style={{width:100,flexDirection:"row",alignItems:"center", justifyContent:"flex-end"}}>

          
            <Text style={{fontWeight:"400",fontSize:13.4,lineHeight:15.4}}>View all</Text>
            {/* <View style={{ alignItems:"flex-end",}}> */}
           <MaterialIcons name="arrow-forward-ios" size={14} color="black" style={{fontWeight:"bold"}}/>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <ProductsSliderT3/>
      </View>
    </View>
  )
}