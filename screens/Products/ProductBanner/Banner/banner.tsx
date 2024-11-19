import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ProductsSlider from '../slider/ProductsSlider4'
 
export default function ProductBanner() {
  return (
    <View style={{backgroundColor:"#f9f9f9",marginVertical:10, paddingHorizontal:12}}>
        <ProductsSlider/>
     </View>
  )
}