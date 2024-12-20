import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import LocationIcons from '../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
  name: string;
  title: string;
  locations: string;
  timeAgo: string;
  specific?: any; // Marking specific as optional
}

export default function Category({
  imageUrl,
  name,
  title,
  locations,
  timeAgo,
  specific,
}: CategoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.timeAgoContainer}>
          <Text style={styles.timeAgoText}>{timeAgo}</Text>
        </View>
        {specific && (
          <View style={styles.specificContainer}>
            <Image source={specific} style={styles.specifics} />
           </View>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.locations}>
          <LocationIcons />
          <Text style={styles.locationsText}>{locations}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 155,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 144,
    height: 144,
    borderRadius: 4,
  },
  timeAgoContainer: {
    position: 'absolute',
    bottom: '1.5%',
    right: 10,
    backgroundColor: '#21212166',
    width: 48,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 4,
  },
  timeAgoText: {
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 11.2,
    color: '#fff',
    fontFamily: 'Proxima Nova',
  },
  specificContainer: {
    position: 'absolute',
    bottom: '1.5%',
    left: 0,
     width: 48,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 4,
  },
  specifics:{
    width:20,
    height:20
  },
  textContainer: {
    paddingLeft: 12,
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '700',
    color: '#212121',
    fontFamily: 'Helvetica Neue',
  },
  name: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
    color: '#474747',
    fontFamily: 'Proxima Nova',
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationsText: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
    color: '#474747',
    marginLeft: 4,
    fontFamily: 'Proxima Nova',
  },

});
