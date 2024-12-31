import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Category from '@/screens/Products/Rending/category';

interface CategoryItem {
    id: number;
    imageUrl: any; // This could be a string if the image is a URL
    name: string;
    title: string;
    locations: string;
    timeAgo:string;
    specific?: any;
  }
export default function ProductsSlider6() {
// Define categories as an array of CategoryItem
  const categories: CategoryItem[] = [
    { id: 1, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 2, imageUrl: require('../../../../assets/images/speakks.png'), name: 'Category 2', title: '755,000', locations: 'HP Spectre 360' ,timeAgo:"2 wks ago",},
    { id: 3, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 hrs ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 4, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"1 hr ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 5, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 6, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 7, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 8, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago",specific: require('../../../../assets/images/newimages/play.png'),},
    { id: 9, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XR', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago"},
    { id: 10, imageUrl: require('../../../../assets/images/phones.png'), name: 'Apple iPhone XRs', title: '250,000', locations: 'Agbowo UI, Ibadan' ,timeAgo:"2 wks ago"},
  ];

  const [visibleCategories, setVisibleCategories] = useState<number>(4); // Initially display 4 items
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to load more categories when scrolled to the bottom
  const loadMoreCategories = () => {
    if (visibleCategories >= categories.length || isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleCategories((prev) => Math.min(prev + 4, categories.length));
      setIsLoading(false);
    }, 3000);  
  };

  // Render footer with Lottie animation while loading
  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <LottieView
          source={{ uri: 'https://lottie.host/21a8a60c-9138-4223-bd08-116521b66149/6WwzwgIlXf.lottie' }}
          autoPlay
          loop
          style={{ width: 24, height: 50 }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={categories.slice(0, visibleCategories)} // Slice the data to display based on visibleCategories
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 0 }}>
          <Category
            imageUrl={item.imageUrl}
            name={item.name}
            title={item.title}
            locations={item.locations}
            timeAgo={item.timeAgo}  
            specific={item.specific}       
           />
        </View>
      )}
      onEndReached={loadMoreCategories} // Trigger load more when scrolled to the end
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter} // Footer with loading animation
      numColumns={2} // Automatically handle two-column layout 
      columnWrapperStyle={{ marginBottom: 10, marginHorizontal:"auto" , gap:15}} // Add spacing between rows
      contentContainerStyle={{ paddingTop: 1, gap: 5, marginBottom: '10%' }}
    />
  );
};

const styles = StyleSheet.create({});

 