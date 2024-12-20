import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import LocationIcons from '../../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
}

export default function BannerCat({ imageUrl }: CategoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageUrl}
          style={styles.image}
        />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 126,
    // width: 300,
    // marginLeft: 10,
     borderColor: '#E9E9E9',  
    borderRadius: 3, // Slightly rounded corners
    // overflow: 'hidden',

    
  },
  imageContainer: {
    // flex: 2,
    paddingLeft: 10,
    
  },
  image: {
    width: 300,
    height: 126,
    objectFit: "fill",
     paddingLeft: 10,
     borderRadius:4
  },
  textContainer: {
    paddingLeft: 5,
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    lineHeight:22.4,
    fontWeight: '700',
    color: '#212121',
  },
  name: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"400",
    color: '#474747',
    marginTop: 4,
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationsText: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"400",
    color: '#474747',
    marginLeft: 4,
  },
});
