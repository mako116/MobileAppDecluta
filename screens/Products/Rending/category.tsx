import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import LocationIcons from '../../icons';
import CategoryStyles from '@/styles/CategoriesDisplayStyles/CategoryProductItems.style';

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
    <View style={CategoryStyles.container}>
      <View style={CategoryStyles.imageContainer}>

        {/* product image */}
        <Image source={imageUrl} style={CategoryStyles.image} />

        <View style={CategoryStyles.timeAgoContainer}>
          <Text style={CategoryStyles.timeAgoText}> 
            {timeAgo}
          </Text>
        </View>
        {specific && (
          <View style={CategoryStyles.specificContainer}>
            <Image source={specific} style={CategoryStyles.specifics} />
           </View>
        )}
      </View>
      
      <View>
        <View style={CategoryStyles.row} >
          <Image source={require("../../../assets/images/naira.png")} style={CategoryStyles.nairaIconStyle} />
          <Text style={CategoryStyles.title}>{title}</Text>
        </View>
        <Text style={CategoryStyles.name}>{name}</Text>
        <View style={CategoryStyles.locations}>
          <LocationIcons />
          <Text style={CategoryStyles.locationsText}>{locations}</Text>
        </View>
      </View>
    </View>
  );
}
