import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Category2 from '../Category2/Category2';
 
export default function ProductsSlider2() {
  return (
    <View style={{ }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category2
          imageUrl={require('../../../../assets/images/newimages/compu.png')}
          name="Electronics"
              
        />
        <Category2
          imageUrl={require('../../../../assets/images/newimages/phone.png')}
          name="Smartphones"
        />
        <Category2
          imageUrl={require('../../../../assets/images/newimages/lap.png')}
          name="Laptops"
        />
        <Category2
          imageUrl={require('../../../../assets/images/newimages/compu.png')}
          name="Laptops"
        />
        <Category2
          imageUrl={require('../../../../assets/images/newimages/compu.png')}
          name="Electronics"      
        />
       </ScrollView>
    </View>
  );
}
