import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react';
import LocationIcons from '../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
  name: string;
  title: string;
  locations: string;
  condition: string;
  timeAgo: string;
  onPress: () => void;
}

export default function SlidLingCategory({ imageUrl, name, title, locations, timeAgo, onPress }: CategoryProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
          <View style={styles.timeAgoContainer}>
            <Text style={styles.timeAgoText}>{timeAgo}</Text>
          </View>
        </View>
        
        {/* Text Details */}
        <View>
          {/* Title and Icon */}
          <View style={styles.row}>
            <Image source={require("../../../assets/images/naira.png")} style={styles.nairaIconStyle} />
            <Text style={styles.title}>{title}</Text>
          </View>
          
          {/* Name */}
          <Text style={styles.name}>{name}</Text>
          
          {/* Location Details */}
          <View style={styles.locations}>
            <LocationIcons />
            <Text style={styles.locationsText}>{locations}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: "#fff",
    marginRight: 10,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  image: {
    width: 147,
    height: 147,
    objectFit: 'contain',
    borderRadius: 5,
  },
  timeAgoContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#21212166",
    width: 48,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 4,
  },
  timeAgoText: {
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 11.2,
    color: "#fff",
    fontFamily: "Proxima Nova",
    alignItems: "center",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nairaIconStyle: {
    width: 12.44,
    height: 12,
    marginRight: 3,
  },
  title: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '700',
    color: '#212121',
    fontFamily: "Helvetica Neue",
    paddingVertical: 5,
  },
  name: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: "400",
    color: '#474747',
    fontFamily: "Proxima Nova",
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  locationsText: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: "400",
    color: '#474747',
    marginLeft: 4,
    fontFamily: "Proxima Nova",
  },
});
