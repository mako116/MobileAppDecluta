import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions,NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import SlidLingCategory from '../../Rending/SlidlingCategory';
import { router } from 'expo-router';
import Products from '@/constants/DemoConstantData';

export default function ProductsSliderT3() {
  const flatListRef = useRef<FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderItem =({ item }: { item: any })=> (
    <View style={{ width: screenWidth - 20 }}>
      <SlidLingCategory
        imageUrl={item.image}
        name={item.name}
        price={item.price}
        location={item.location}
        timeAgo={item.timeAgo}
        originalPrice={item.originalPrice}
        itemsLeft={item.itemsLeft}
        postedBy={item.postedBy}
        hasVideo={item.hasVideo}
        type={item.type}
        onPress={() =>
          router.push({
            pathname: '/(routes)/ProductDetails',
            params: { 
              id: item.id, 
              imageUrl: item.image, 
              name: item.name, 
              title: item.price, 
              locations: item.location, 
              condition: item.timeAgo,
              timeAgo: item.timeAgo 
            },
          })
        }
      />
    </View>
  );

  const renderDotIndicator = () => {
    return (
      <View style={indicatorStyles.dotContainer}>
        {Products.map((_, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              indicatorStyles.dot, 
              activeIndex === index && indicatorStyles.activeDot
            ]}
            onPress={() => {
              flatListRef.current && flatListRef.current.scrollToIndex({ index, animated: true });
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={Products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={screenWidth}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.listContainer}
      />
      {renderDotIndicator()}
    </View>
  );
}

// Original styles unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
});


const indicatorStyles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#d4a456',
    width: 20,
    height: 10,
    borderRadius: 5,
  }
});