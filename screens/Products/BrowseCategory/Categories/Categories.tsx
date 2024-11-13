import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ProductsSlider2 from '../ProductCategories2/ProductCategories2'

export default function Categories() {
  return (
    <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:12}}>
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",paddingVertical:10, paddingHorizontal:5}}>
      <Text style={{fontWeight:"700",fontSize:16,lineHeight:22.4}}>Browse our Category</Text>
      <View >
         <TouchableOpacity style={{width:100,flexDirection:"row",alignItems:"center", justifyContent:"flex-end"}}>

        
          <Text style={{fontWeight:"400",fontSize:13.4,lineHeight:15.4}}>View all</Text>
          {/* <View style={{ alignItems:"flex-end",}}> */}
         <MaterialIcons name="arrow-forward-ios" size={14} color="black" style={{fontWeight:"bold"}}/>
          </TouchableOpacity>
      </View>
    </View>
    <View>
      <ProductsSlider2/>
    </View>
  </View>
  )
}