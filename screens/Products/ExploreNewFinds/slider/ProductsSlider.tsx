import { View, ScrollView } from 'react-native';
import React from 'react';
import SlidLingCategory from '../../Rending/SlidlingCategory';
import { router } from 'expo-router';

export default function ProductsSlider() {
  const products = [
    {
      id: '1',
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: 'Apple iPhone XR',
      title: '250,000',
      locations: 'Agbowo UI, Ibadan',
      condition: 'Used',
      timeAgo: '2 wks ago',
    },
    {
      id: '2',
      imageUrl: require('../../../../assets/images/newimages/Group 390.png'),
      name: 'HP Spectre 360',
      title: '755,000',
      locations: 'Makola, Ibandan',
      condition: 'Used',
      timeAgo: '1 hr ago',
    },
    {
      id: '3',
      imageUrl: require('../../../../assets/images/newimages/image 26.png'),
      name: 'Apple iPhone XR',
      title: '250,000',
      locations: 'Agbowo UI, Ibadan',
      condition: 'Used',
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
            condition={product.condition}
            timeAgo={product.timeAgo}
            onPress={() =>
              router.push({
                pathname: '/(routes)/ProductDetails',
                params: { 
                  id: product.id, 
                  imageUrl: product.imageUrl, 
                  name: product.name, 
                  title: product.title, 
                  locations: product.locations, 
                  condition: product.condition,
                  timeAgo: product.timeAgo 
                },
              })
            }          
          />
        ))}
      </ScrollView>
    </View>
  );
}
