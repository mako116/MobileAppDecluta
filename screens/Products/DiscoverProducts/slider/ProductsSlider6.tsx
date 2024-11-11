import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Category from '../Category/category6';

export default function ProductsSlider6() {
  return (
    <View style={{ marginTop: 5 }}>
      <View >
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Category
                  imageUrl={require('../../../../assets/images/meduimphone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}        />
        <Category
                  imageUrl={require('../../../../assets/images/speaker.png')}
                  name="Category 2"
                  locations={'HP Spectre 360'} title={'₦755,000'}        />
                 </View>
                 <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Category
                  imageUrl={require('../../../../assets/images/meduimphone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}         />
                  <Category
                  imageUrl={require('../../../../assets/images/meduimphone.png')}
                  name="Apple iPhone XR"
                  title="₦250,000" 
                  locations={'Agbowo UI, Ibadan'}         />
       </View>
       </View>
    </View>
  );
}
