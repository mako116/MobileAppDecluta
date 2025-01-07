import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Category from '@/screens/Products/Rending/category';

// Define the type for the category item
interface CategoryItem {
  id: number;
  imageUrl: any; // This could be a string if the image is a URL
  name: string;
  title: string;
  locations: string;
  timeAgo: string;
}

const Recommend: React.FC = () => {
   // Define categories as an array of CategoryItem
    const categories: CategoryItem[] = [
      { id: 1, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 2, imageUrl: require('../../../assets/images/speaker.png'), name: 'Category 2', title: '₦755,000', locations: 'HP Spectre 360', timeAgo: '2 weeks ago' },
      { id: 3, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 4, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 5, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 6, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 7, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
      { id: 8, imageUrl: require('../../../assets/images/newimages/gadget.png'), name: 'Apple iPhone XR', title: '₦250,000', locations: 'Agbowo UI, Ibadan', timeAgo: '2 weeks ago' },
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
      }, 3000); // Simulate 3 seconds of loading
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
            style={{ width: 50, height: 50 }}
          />
        </View>
      );
    };
  
    return (
      <ScrollView
        contentContainerStyle={{
          paddingTop: 15,
          // paddingHorizontal: 10,
          // gap: 10,
        }}
        onScrollEndDrag={loadMoreCategories} // Trigger load more when scrolled to the end
      >
        <View style={styles.grid}>
          {categories.slice(0, visibleCategories).map((item) => (
            <View key={item.id} style={styles.categoryWrapper}>
              <Category
                imageUrl={item.imageUrl}
                name={item.name}
                title={item.title}
                locations={item.locations}
                timeAgo={item.timeAgo}
              />
            </View>
          ))}
        </View>
        {renderFooter()}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 10,
    },
    categoryWrapper: {
      width: '48%',  
      marginBottom: 5,
    },
  });

 
export default Recommend;
