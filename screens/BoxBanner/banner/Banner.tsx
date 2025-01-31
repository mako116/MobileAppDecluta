import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import BuyndSellItems from '../BuyndSell/BuyndSellITems';
import Searchbox from '../SearchBox/Searchbox';
import BannerCategory from '../BannerCategory/BannerCategory';
import { router } from 'expo-router';

export default function Banner() {
 
  return (
   <View style={{paddingHorizontal:12}}>
     <ImageBackground
      source={require('../../../assets/images/bannerBg.png')}
      style={styles.background}
      
    >
      {/* Overlay with semi-transparent background color */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Image source={require('../../../assets/images/heroicons_sp.png')}  style={{ objectFit:"contain", width:20, height:20}} />
          <Text style={styles.headingText}>Hello, There!</Text>
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
    borderRadius: 10,  
    overflow: 'hidden', 
 
    // borderRadius:10,
  },
  overlay: {
    backgroundColor: '#DEBC8E',
    opacity: 0.7, 
     ...StyleSheet.absoluteFillObject, 
 // Rounded corners for the overlay
  },
  container: {
    borderRadius: 10,
    paddingTop: 20,
    paddingVertical: 10,
    zIndex: 1, // Place content above overlay
  },
  headingText: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22.4,
    color: '#212121',
    fontFamily: 'HelveticaNeue',
  },
  subText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#212121',
    fontFamily: 'ProximaNova',
  },
});
