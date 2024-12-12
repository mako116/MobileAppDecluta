import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react';
import LocationIcons from '../../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
  name: string;
  title: string;
  locations: string;
}

export default function Category6({ imageUrl, name, title, locations }: CategoryProps) {
  return (
      <TouchableOpacity style={styles.container}>
     <View style={styles.imageContainer}>
        <Image
          source={imageUrl}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.locations}>
          <LocationIcons />
          <Text style={styles.locationsText}>
            {locations}
          </Text>
        </View>
      </View>
     </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 148,
    marginLeft: 10,
    marginRight:10,
    padding: 7,
    borderWidth: 1,
    borderColor: '#E9E9E9',  
    borderRadius: 8, // Slightly rounded corners
    overflow: 'hidden',
     backgroundColor:"#fff",
    // Shadow properties for iOS
    shadowColor: '#E9E9E9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    // Shadow property for Android
    elevation: 5,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
