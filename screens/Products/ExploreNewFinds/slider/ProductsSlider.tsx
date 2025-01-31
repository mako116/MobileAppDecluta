import { View, ScrollView } from 'react-native';
import React from 'react';
import SlidLingCategory from '../../Rending/SlidlingCategory';

export default function ProductsSlider() {
  const products = [
    {
      id: '1',
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: 'Applesss iPhone XR',
      title: '250,000',
      locations: 'Agbowo UI, Ibadan',
      timeAgo: '2 wks ago',
    },
    {
      id: '2',
      imageUrl: require('../../../../assets/images/newimages/Group 390.png'),
      name: 'HP Spectre 360',
      title: '755,000',
      locations: 'Makola, Ibandan',
      timeAgo: '1 hr ago',
    },
    {
      id: '3',
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: 'Apple iPhone XR',
      title: '250,000',
      locations: 'Agbowo UI, Ibadan',
      timeAgo: '2 wks ago',
    },
  ];

  return (
    <View style={{ }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <SlidLingCategory
            key={product.id}
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
