import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import LocationIcons from '../../icons';

interface CategoryProps {
  imageUrl: ImageSourcePropType;
  name: string;
  title: string;
  locations: string;
  timeAgo: string; 
}

export default function SlidLingCategory({ imageUrl, name, title, locations,timeAgo }: CategoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageUrl}
          style={styles.image}
        />
         <View style={{ position:"absolute",bottom:"2%", right:0, backgroundColor:"#21212166" ,width:48, height:20,alignItems:"center", justifyContent:"center",borderBottomEndRadius:4}}>
                <Text style={{fontWeight:"400", fontSize:8, lineHeight:11.2, color:"#fff", alignItems:"center",fontFamily: "Proxima Nova"}}>{timeAgo}</Text> 
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 155,
    marginLeft: 5,
    marginRight: 5,
    
    borderWidth: 1,
    borderColor: '#E9E9E9',  
    borderRadius: 8, // Slightly rounded corners
    overflow: 'hidden',
    backgroundColor:"#fff",
    // Shadow properties for iOS
    // position:"relative"
  },
  imageContainer: {
    // flex: 2,
position:"relative",
alignItems:"center",
justifyContent:"center",
margin:"auto"
  },
  image: {
    width: 140,
    height: 147,
    objectFit: 'contain',
    borderRadius:4,
 
  },
  textContainer: {
    paddingLeft:9,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    lineHeight:22.4,
    fontWeight: '700',
    color: '#212121',
    fontFamily:"Helvetica Neue"
  },
  name: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"400",
    color: '#474747',
    fontFamily:"Proxima Nova"
    // marginTop: 4,
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 4,
  },
  locationsText: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"400",
    color: '#474747',
    marginLeft: 4,
    fontFamily:"ProximaNovaR"

  },
});
