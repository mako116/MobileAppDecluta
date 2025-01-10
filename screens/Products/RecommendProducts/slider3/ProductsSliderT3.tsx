import { View, ScrollView } from 'react-native';
import React from 'react';
import SlidLingCategory from '../../Rending/SlidlingCategory';

export default function ProductsSliderT3() {
  const products = [
    {
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: "Apple iPhone XR",
      title: "250,000",
      locations: "Agbowo UI, Ibadan",
      timeAgo: "2 wks ago",
    },
    {
      imageUrl: require('../../../../assets/images/newimages/Group 390.png'),
      name: "HP Spectre 360",
      title: "755,000",
      locations: "HP Spectre 360",
      timeAgo: "2 wks ago",
    },
    {
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: "Apple iPhone XR",
      title: "250,000",
      locations: "Agbowo UI, Ibadan",
      timeAgo: "2 wks ago",
    },
  ];

  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
          <SlidLingCategory
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            title={product.title}
            locations={product.locations}
            timeAgo={product.timeAgo}
          />
        ))}
      </ScrollView>
    </View>
  );
}
