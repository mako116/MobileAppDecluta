import { View, ScrollView } from 'react-native';
import React from 'react';
import BannerCat from '../Category/BannerCat';

export default function ProductsSlider4() {
  const bannerImages = [
    require('../../../../assets/images/newimages/Homepage banner 1.jpg'),
    require('../../../../assets/images/newimages/Homepage banner 2.jpg'),
    require('../../../../assets/images/newimages/Homepage banner 3.jpg'),
    require('../../../../assets/images/newimages/offer Notifications Banner.jpg'),
  ];

  return (
    <View style={{ marginTop: 8 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bannerImages.map((image, index) => (
          <BannerCat key={index} imageUrl={image} />
        ))}
      </ScrollView>
    </View>
  );
}
