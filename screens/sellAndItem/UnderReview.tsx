import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
   ActivityIndicator,
   SafeAreaView,
} from 'react-native';

 import AddVideo from '../../assets/images/laptop.png';
import { ReviewsStyles } from '@/styles/ReviewItem/Review.styles';
import SellItems from '@/styles/sellItem/Sellitem';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { router } from 'expo-router';
import HeaderWithNoArrow from '@/UI/Header/HeaderWithNoArrow';
import ReloadBig from '@/assets/images/ReloadBig';
import Button from '@/components/Button/button';
// import CancelItem from './Modal/cancelItem/CancelItem';

const ItemUnderReview = () => {
  const [formData, setFormData] = useState({
    availability: '',
    condition: '',
    description:'',
    category: '',
    title: '',
    location: '',
    price: '',
    salePrice: '',
    discountPrice: '',
  });

  const [editableFields, setEditableFields] = useState({
    availability: false,
    condition: false,
    title:false,
    category: false,
    description:false,
    location: false,
    price: false,
    salePrice: false,
    discountPrice: false,
  });

 
 

  const formatToNGN = (value: string) => {
    const number = parseFloat(value.replace(/,/g, ''));
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleEditToggle = (field: keyof typeof editableFields) => {
    setEditableFields(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  
  const itemImages = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    uri: AddVideo,
  }));

  
  return ( 
    <SafeAreaView
      style={
        {
            backgroundColor: '#F9F9F9',
            height: '100%',
        }
      }
    >
      <HeaderWithNoArrow title="Item Under Review"  paddingTop={50} headerSave="Done" />

      <ScrollView contentContainerStyle={[SellItems.scrollViewContent]}>
        <View style={SellItems.contains}>
         <View style={SellItems.Box}>
          <ReloadBig/>
          <Text style={[SellItems.optionSubText,{textAlign:"center"}]}>
           Your item has been successfully uploaded and is now under review by our team to ensure it meets our guidelines. This review process typically takes between 1 minute and 24 hours. Once approved, your item will be visible to potential buyers on DecluttaKing. Thank you for your patience!
          </Text>
         </View>

         <View style={SellItems.Box}>
          <Text style={[[SellItems.label,{fontSize:16}],{marginVertical:5}]}>Next Actions</Text>
        
          <View style={[SellItems.flexDif,{paddingRight:"10%",gap:10,marginTop:10}]}>
          <Image source={require("../../assets/images/tab/Frame 645294.png")} style={{width:26,height:26}} />
         <View style={{gap:10}}>
          <Text style={[SellItems.label,{fontSize:14}]}>Upload another item</Text>
          <Text style={[SellItems.optionSubText]}>
          Have more items to declutter or swap? List another one and discover new ones while making more space in your life.
          </Text>
          <Button padding={12} fontSize={15} title="Upload Another item" onPress={()=> router.push("/(routes)/sellanItem/FirstStep")} backgroundColor="#DEBC8E" borderWidth={0} />
          
          </View>
         </View>

         <View style={[SellItems.flexDif,{paddingRight:"10%",gap:10,marginTop:25}]}>
         <Image source={require("../../assets/images/tab/stars.png")} style={{width:26,height:26}} />
         <View style={{gap:10}}>
          <Text style={[SellItems.label,{fontSize:14}]}>Rate Your Experience</Text>
          <Text style={[SellItems.optionSubText]}>
          Please take a moment to rate the platform and the seller to help us improve our service.
          </Text>
          <Button padding={12} fontSize={15} title="Rate Decluttaking" onPress={() =>{}} backgroundColor="#fff" borderWidth={1}  />
          
          </View>
         </View>
         </View>
          {/* Fee Summary */}
          
        </View>
      </ScrollView>
       
    </SafeAreaView>
  );
};



export default ItemUnderReview;
