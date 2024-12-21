import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import SlidLingCategory from '../../Rending/SlidlingCategory';
  
export default function ProductsSliderT3() {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SlidLingCategory
                  imageUrl={require('../../../../assets/images/phone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'} 
                  timeAgo={"2 weeks ago"}       />
        <SlidLingCategory
                  imageUrl={require('../../../../assets/images/laptop.png')}
                  name="SlidLingCategory 2"
                  locations={'HP Spectre 360'} title={'₦755,000'}   
                  timeAgo={"2 weeks ago"}       />
        <SlidLingCategory
                  imageUrl={require('../../../../assets/images/phone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}  
                  timeAgo={"2 weeks ago"}         />
       </ScrollView>
    </View>
  );
}
