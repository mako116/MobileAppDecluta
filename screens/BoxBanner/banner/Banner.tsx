import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import BuyndSellItems from '../BuyndSell/BuyndSellITems';
import Searchbox from '../SearchBox/Searchbox';
import BannerCategory from '../BannerCategory/BannerCategory';

export default function Banner() {
  return (
   <View >
     <ImageBackground
      source={require('../../../assets/images/bgimage1.jpg')}
      style={styles.background}
    >
      {/* Overlay with semi-transparent background color */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Image source={require('../../../assets/images/heroiconssparkles.png')} />
          <Text style={styles.headingText}>Hello, Mathew</Text>
        </View>
        <Text style={styles.subText}>How can we help you today?</Text>
      </View>
      <View>
        <BuyndSellItems/>
      </View>
      <View>
        <Searchbox/>
      </View>
      <View>
        <BannerCategory/>
      </View>
    </ImageBackground>
   </View>
  );
}

const styles = StyleSheet.create({
  background: {
    padding: 10,
    borderRadius: 10, // Rounded corners for the image
    overflow: 'hidden', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  
    backgroundColor: '#DEBC8E', // Your background color
    opacity: 0.5,  
    borderRadius:10, // Rounded corners for the overlay
  },
  container: {
    borderRadius: 10,
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    zIndex: 1, // Place content above overlay
  },
  headingText: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22.4,
    color: '#212121',
  },
  subText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#212121',
  },
});
