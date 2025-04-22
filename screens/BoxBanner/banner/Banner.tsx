import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';

const { width } = Dimensions.get('window');

const images = [
  require('../../../assets/images/dklive/banner.png'),
  require('../../../assets/images/dklive/banner.png'),
  require('../../../assets/images/dklive/banner.png'),
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={img}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Dot Indicator */}
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width - 24,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 12,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#DEBC8E',
    width: 20,
    height: 10,
  },
});
