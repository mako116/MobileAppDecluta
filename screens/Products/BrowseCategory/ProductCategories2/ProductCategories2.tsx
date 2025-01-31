import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import Category2 from '../Category2/Category2';

export default function ProductsSlider2() {
  const categories = [
    {
      id: '1',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Electronics',
    },
    {
      id: '2',
      imageUrl: require('../../../../assets/images/newimages/phone.png'),
      name: 'Smartphones',
    },
    {
      id: '3',
      imageUrl: require('../../../../assets/images/newimages/lap.png'),
      name: 'Laptops',
    },
    {
      id: '4',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Laptops',
    },
    {
      id: '5',
      imageUrl: require('../../../../assets/images/newimages/compu.png'),
      name: 'Electronics',
    },
  ];

  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Category2 imageUrl={item.imageUrl} name={item.name} />
        )}
      />
    </View>
  );
}
