import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
 import ProductsSliderT3 from '../slider3/ProductsSliderT3'
import { router } from 'expo-router'
  
export default function ExploreProducts3() {
  return (
    <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",paddingVertical:15}}>
        <Text style={{fontWeight:"700",fontSize:17,lineHeight:22.4, fontFamily:"Helvetica Neue"}}>See what we recommend</Text>
        <View >
           <TouchableOpacity onPress={()=> router.push("/(routes)/HomesectionViewAll/Recommend")} style={{width:100,flexDirection:"row",gap:5,justifyContent:"flex-end", alignItems:"center", paddingRight:0}}>
           <Text style={{fontWeight:"400",fontSize:17,lineHeight:22.4, fontFamily:"Proxima Nova", color:"#212121"}}>View All</Text>
            <Image source={require('../../../../assets/images/newimages/Vector.png')} style={{width:6,height:11}} />
           </TouchableOpacity>
        </View>
      </View>
      <View>
        {/*  */}
        <ProductsSliderT3/>
      </View>
    </View>
  )
}