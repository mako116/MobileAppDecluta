import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Category from '../../ExploreNewFinds/Category/category';
 
export default function ProductsSliderT3() {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category
                  imageUrl={require('../../../../assets/images/phone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}        />
        <Category
                  imageUrl={require('../../../../assets/images/laptop.png')}
                  name="Category 2"
                  locations={'HP Spectre 360'} title={'₦755,000'}        />
        <Category
                  imageUrl={require('../../../../assets/images/phone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}         />
       </ScrollView>
    </View>
  );
}
