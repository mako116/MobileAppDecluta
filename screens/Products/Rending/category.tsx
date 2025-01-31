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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    // overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    
  },
  image: {
    width: "100%",
    height: 144,
    borderRadius: 4,
    paddingHorizontal:"22%"
  },
  timeAgoContainer: {
    position: 'absolute',
    bottom: '1.5%',
    right: 0,
    backgroundColor: '#21212166',
    paddingVertical:5,
    paddingHorizontal:4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 7,
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
  nairaIconStyle: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  title: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '700',
    color: '#212121',
    fontFamily: 'Helvetica Neue',
    paddingVertical: 5,
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
    marginTop: 5,
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
