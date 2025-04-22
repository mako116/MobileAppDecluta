import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import BuyndSellItems from '../BuyndSell/BuyndSellITems';
import Searchbox from '../SearchBox/Searchbox';
import BannerCategory from '../BannerCategory/BannerCategory';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 24; // Account for horizontal padding

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  
  const banners = [
    {
      id: '1',
      image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1744944613/Frame_648229_gatx6i.png',
    
    },
    {
      id: '2',
      image: require('../../../assets/images/bannerBg.png'),
     
    },
    {
      id: '3',
      image: require('../../../assets/images/bannerBg.png'),
    
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex < banners.length - 1) {
        setActiveIndex(activeIndex + 1);
        scrollViewRef.current?.scrollTo({
          x: ITEM_WIDTH * (activeIndex + 1),
          animated: true,
        });
      } else {
        setActiveIndex(0);
        scrollViewRef.current?.scrollTo({
          x: 0,
          animated: true,
        });
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Handle scroll event
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / ITEM_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={{ paddingHorizontal: 12 }}>
      {/* Banner Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {banners.map((banner, index) => (
          <View key={banner.id} style={{ width: ITEM_WIDTH }}>
            <ImageBackground
              source={typeof banner.image === 'string' ? { uri: banner.image } : banner.image}
              style={styles.background}
            >
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      
      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? '#DEBC8E' : '#D9D9D9' }
            ]}
          />
        ))}
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height:200,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: 5,
objectFit: 'cover',
width: '100%',
  },
 

 
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paginationDot: {
    width: 18,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});