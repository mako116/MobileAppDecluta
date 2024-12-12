import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
 import LottieView from 'lottie-react-native';
import Category from '@/screens/Products/ExploreNewFinds/Category/category';

const categories = [
  { id: 1, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 2, imageUrl: require('../../../assets/images/speaker.png'), name: 'Category 2', title: '₦755,000', locations: 'HP Spectre 360' },
  { id: 3, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 4, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 5, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 6, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 7, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 8, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 9, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
  { id: 10, imageUrl: require('../../../assets/images/meduimphone.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan' },
];

export default function SearchProduct() {
  const [visibleCategories, setVisibleCategories] = useState(4); // Initially display 4 items
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCategories = () => {
    if (visibleCategories >= categories.length || isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleCategories((prev) => Math.min(prev + 4, categories.length));
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds of loading
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
         <LottieView
        source={{ uri: 'https://lottie.host/21a8a60c-9138-4223-bd08-116521b66149/6WwzwgIlXf.lottie' }}
        autoPlay
        loop
        style={{ width: 50, height: 50 ,}}
       />
      </View>
    );
  };

  return (
    <FlatList
      data={categories.slice(0, visibleCategories)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20 }}>
          <Category
            imageUrl={item.imageUrl}
            name={item.name}
            title={item.title}
            locations={item.locations}
          />
        </View>
      )}
      onEndReached={loadMoreCategories}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      numColumns={2} // Automatically handle two-column layout
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 ,}} // Add spacing between rows
      contentContainerStyle={{ padding: 10, gap: 10 , marginBottom: "100%" ,}}
    />
  );
}
