import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import BannerCat from '../Category/BannerCat';
 
export default function ProductsSlider4() {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <BannerCat
                  imageUrl={require('../../../../assets/images/newimages/Homepage banner 1.jpg')}
                      />
        <BannerCat
                  imageUrl={require('../../../../assets/images/newimages/Homepage banner 2.jpg')}
                  />
        <BannerCat
                  imageUrl={require('../../../../assets/images/newimages/Homepage banner 3.jpg')}
                    />
                    <BannerCat
                  imageUrl={require('../../../../assets/images/newimages/offer Notifications Banner.jpg')}
                    />
       </ScrollView>
    </View>
  );
}
