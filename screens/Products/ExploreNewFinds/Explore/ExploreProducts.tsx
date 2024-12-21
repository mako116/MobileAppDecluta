import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ProductsSlider from '../slider/ProductsSlider'
import { router } from 'expo-router'
 
export default function ExploreProducts() {
  return (
    <View style={{backgroundColor:"#f9f9f9", paddingHorizontal:12}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",paddingVertical:10, }}>
        <Text style={{fontWeight:"700",fontSize:17,lineHeight:22.4, fontFamily:"Helvetica Neue",color:"#212121"}}>Explore new finds</Text>
        <View >
           <TouchableOpacity onPress={()=> router.push("/(routes)/HomesectionViewAll/Explore")} style={{width:100,flexDirection:"row",gap:5,justifyContent:"flex-end", alignItems:"center", paddingRight:5}}>
            <Text style={{fontWeight:"400",fontSize:16,lineHeight:22.4, fontFamily:"Proxima Nova", color:"#212121"}}>View All</Text>
                <Image source={require('../../../../assets/images/newimages/Vector.png')} style={{width:6,height:11}} />
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <ProductsSlider/>
      </View>
    </View>
  )
}