import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Dimensions,
  NativeScrollEvent, 
  NativeSyntheticEvent 
} from 'react-native';
import SlidLingCategory from '../../Rending/SlidlingCategory';
import { router } from 'expo-router';
import { getProducts } from '@/api/Product/Hooks/useProduct';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

export default function ProductsSliderT3() {
  const dispatch = useDispatch<AppDispatch>();
  const flatListRef = useRef<FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get screen width to make each slide take full screen width
  const screenWidth = Dimensions.get('window').width;
  
  const { products } = useSelector((state: RootState) => state.products);
  console.log('products here oooo =========gggr', products);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };
  
  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.itemContainer, { width: screenWidth }]}>
      <SlidLingCategory
        imageUrl={item.productImages[0]}
        name={item.productTitle || item.title}
        price={item.price}
        location={item.loaction}
        timeAgo={item.timeAgo || "3d ago"}
        originalPrice={item.originalPrice}
        itemsLeft={item.quantity}
        postedBy={item.sellerName}
        hasVideo={item.hasVideo}
        type={item.type || "P2P"}
        onPress={() => 
          router.push({
            pathname: '/(routes)/ProductDetails',
            params: {
              id: item._id,
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
        pagingEnabled={true} 
      />
      {renderDotIndicator()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
  
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15, 
  }
});

const indicatorStyles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DEBC8E',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: '#DEBC8E',
    width: 25,
    height: 8,
    borderRadius: 4,
    opacity: 1,
  }
});