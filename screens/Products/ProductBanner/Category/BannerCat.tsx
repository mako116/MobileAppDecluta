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
    marginRight: 10,
    
  },
  image: {
    width: 330,
    height: 130,
    objectFit: "fill",
    borderRadius:4
  },
});
