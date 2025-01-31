import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ProductsSlider2 from '../ProductCategories2/ProductCategories2'
import { router } from 'expo-router'

export default function Categories() {
  return (
    <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15}}>
    <View style={{
      flexDirection:"row", 
      alignItems:"center", justifyContent:"space-between",paddingVertical:10
      }}
    >
      <Text style={{fontWeight:"700",fontSize:18,lineHeight:22.4, fontFamily:"Helvetica Neue"}}>Browse our category</Text>
      <View>
        <TouchableOpacity 
          onPress={()=> router.push("/(routes)/HomesectionViewAll/Browse")} style={{width:100,flexDirection:"row",gap:5,justifyContent:"flex-end", alignItems:"center"}}
        >
          <Text style={{fontWeight:"400",fontSize:18,lineHeight:22.4, fontFamily:"Proxima Nova", color:"#212121"}}>View All</Text>
          <Image source={require('../../../../assets/images/newimages/Vector.png')} style={{width:6,height:11}} />
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <ProductsSlider2/>
    </View>
  </View>
  )
}