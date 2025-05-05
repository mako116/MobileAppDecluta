import Cube from '@/assets/images/cart/cube';
import Tag from '@/assets/images/cart/tag';
import Rightarrow from '@/assets/images/kyc/rightarrow';
import PinLocation from '@/assets/svg/PinLocationIcon';
import YourCart from '@/styles/Cart/YourCart.styles';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SellersDetails = () => {
    return (
        <View>
            
        {/* Note */}
        <Text style={{ 
            fontWeight: '700',
            lineHeight: 16.8,
            fontSize: 14,
            fontFamily: 'Proxima Nova',
            marginTop: 12,
        }}>Pickup Details:</Text>
        <Text
          style={{
            lineHeight: 16.8,
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Proxima Nova',
            marginTop: 6,
          }}
        >
         Collect your item from the seller before  
         <Text style={{ color: '#E42527', fontWeight: '700',marginHorizontal:3 }}> June 31st.</Text>
         Chat or call the seller, confirm details, 
         and collect your purchase. 
         Don't miss the deadline!
         </Text>

         {/* seller details */}
         <View style={[YourCart.noTokenBox,{alignItems:"flex-start",padding:8,paddingHorizontal:20}]}>
        {/* name */}
        <View style={[YourCart.rowed,{ gap:10,width:"100%",marginTop:10,alignItems:"flex-start"}]}>
            <Image source={require("../../../assets/images/New folder/user-square.png")} style={{width:24,height:24}} />
          <View>
          <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',}]}>
           Segun Agbakoba
          </Text>
          <Text style={[YourCart.price,{fontSize:12,fontWeight:'200',color:"#7E7E7E"}]}>
           Full name
        </Text>
          </View>
          </View>

         {/* Phone */}
         <View style={[YourCart.rowed,{ gap:10,width:"100%",marginTop:10,alignItems:"flex-start"}]}>
            <Image source={require("../../../assets/images/New folder/bi_phone.png")} style={{width:24,height:24}} />
          <View>
          <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',}]}>
          +234 01234 56789
          </Text>
          <Text style={[YourCart.price,{fontSize:12,fontWeight:'200',color:"#7E7E7E"}]}>
           Phone number
        </Text>
          </View>
          <View style={{alignItems:"flex-end", marginLeft:"auto"}}>
            <Rightarrow />
          </View>
          </View>

         {/* chat  */}
         <View style={[YourCart.rowed,{ gap:10,width:"100%",marginTop:10,alignItems:"flex-start"}]}>
            <Image source={require("../../../assets/images/New folder/message.png")} style={{width:24,height:24}} />
          <View>
          <Text style={[YourCart.title,{fontSize:14,fontWeight:'200',}]}>
          Chat with seller
          </Text>
          <Text style={[YourCart.price,{fontSize:12,fontWeight:'200',color:"#7E7E7E"}]}>
           Text, call in-app or video call
        </Text>
          </View>
          <View style={{alignItems:"flex-end", marginLeft:"auto"}}>
            <Rightarrow />
          </View>
          </View>

         {/* Pickup Address */}
          <Text style={[YourCart.title,{fontSize:14}]}>
            Pickup address
        </Text>

         <View style={{
            flexDirection:'row',
            gap:9,
            paddingRight:10,
            alignItems:"flex-start",
            marginVertical:12,
            width:"100%"
         }}>
            <PinLocation width={26} height={26}/>
         <Text style={[YourCart.bonusText,{fontSize:14,}]}>
        Ibadan Southwest, Ibadan, Oyo State. 
        (Contact seller for pickup full address)
        </Text>
        {/* Arrow */}
         
        </View>       
        {/* Item to Pickup  */}
        <Text style={[YourCart.title,{fontSize:14}]}>Item to Pickup</Text>
        <View style={[YourCart.rowed,{ gap:10,width:"100%",marginTop:10,alignItems:"flex-start"}]}>
            <Image source={require("../../../assets/images/New folder/Frame 646237.png")} style={{width:64,height:64}} />
          <View>
          <Text style={[YourCart.title,{fontSize:15,fontWeight:'200',}]}>
          Samsung Galaxy A05 6.7
          </Text>
          <Text style={[YourCart.price,{fontSize:14,fontWeight:'200', }]}>
          <Tag/> ₦75,000
        </Text>
        <Text style={[YourCart.price,{fontSize:14,fontWeight:'200', }]}>
          <Cube/> Used
        </Text>
          </View>
          </View>
        </View>
        </View>
    );
}

 
export default SellersDetails;
