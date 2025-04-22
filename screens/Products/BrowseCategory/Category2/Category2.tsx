import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import LocationIcons from '../../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
  name: string;
}

export default function Category2({ imageUrl, name }: CategoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageUrl}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
         <Text style={styles.name}>{name}</Text>
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     width: 102,
     height:99,
    marginRight: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E9E9E9',  
    borderRadius: 8, 
    overflow: 'hidden',
   },
  imageContainer: {
    // flex: 2,
    
    backgroundColor:"#F5EADC",
    width:94,
    height:57,
    borderRadius:4
  },
  image: {
    width: 44,
    height: 44,
    objectFit: 'contain',
    margin:"auto",
    
  },
  textContainer: {
    paddingLeft: 5,
    paddingVertical: 5,
  },
  title: {
    // fontSize: 12,
    lineHeight:22.4,
    fontWeight: '700',
    color: '#212121',
  },
  name: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"700",
    color: '#474747',
    textAlign:"center",
    fontFamily:"Helvetica Neue"
    // marginTop: 4,
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
    fontFamily:"Proxima Nova",
  },
});
