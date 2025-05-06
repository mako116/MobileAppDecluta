import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import BuyndSellItems from '../BuyndSell/BuyndSellITems';
import Searchbox from '../SearchBox/Searchbox';
import BannerCategory from '../BannerCategory/BannerCategory';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 24; 

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  
  const banners = [
    {
      id: '1',
      image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1746527523/decluttaking-banner-01_uwf5oh.jpg',
    
    },
    {
      id: '2',
      image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1746527419/decluttaking-banner-02_alt_ecs8ti.jpg",
     
    },
    {
      id: '3',
      image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1746527421/decluttaking-banner-03_alt_jkdg7m.jpg",
    
    },

    {
      id: '4',
      image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1746527423/decluttaking-banner-04_alt_ibidch.jpg",
    
    },

    {
      id: '5',
      image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1746527425/decluttaking-banner-05_alt_qerdjd.jpg",
    
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
               index === activeIndex &&  styles.paginationActive ,
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
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#DEBC8E',

    opacity: 0.5,
   
  },

  paginationActive: {
    backgroundColor: '#DEBC8E',
    width: 25,
    height: 8,
    borderRadius: 4,
    opacity: 1,
  },
});

// #DEBC8E