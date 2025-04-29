import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions,NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import SlidLingCategory from '../../Rending/SlidlingCategory';
import { router } from 'expo-router';
import Products from '@/constants/DemoConstantData';
import { getProducts } from '@/api/Product/Hooks/useProduct';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function ProductsSliderT3() {
  const dispatch = useDispatch<AppDispatch>();
  const flatListRef = useRef<FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const { products } = useSelector((state: RootState) => state.products);
  console.log("productState", products);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };


  const renderItem =({ item }: { item: any })=> (
    <View style={{ width: screenWidth - 20 }}>
      <SlidLingCategory
        imageUrl={item.productImages[0]}
        name={item.productTitle || item.title}
        price={item.price}
        location={item.loaction}
        timeAgo={item.timeAgo}
        originalPrice={item.originalPrice}
        itemsLeft={item.quantity}
        postedBy={item.sellerName}
        hasVideo={item.hasVideo}
        type={item.type}
        onPress={() =>
          router.push({
            pathname: '/(routes)/ProductDetails',
            params: { 
              id: item.id, 
              imageUrl: item.productImages, 
              name: item.productTitle || item.title, 
              title: item.price, 
              locations: item.loaction, 
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
        {Array.isArray(products) && products?.map((_, index) => (
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
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
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