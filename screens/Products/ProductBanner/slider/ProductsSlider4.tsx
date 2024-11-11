import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Category from '../Category/category4';

export default function ProductsSlider4() {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category
                  imageUrl={require('../../../../assets/images/banner.png')}
                      />
        <Category
                  imageUrl={require('../../../../assets/images/banner.png')}
                  />
        <Category
                  imageUrl={require('../../../../assets/images/banner.png')}
                    />
       </ScrollView>
    </View>
  );
}
