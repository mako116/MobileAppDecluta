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
          <Text style={{fontWeight:"400", fontSize:8, lineHeight:11.2, color:"#fff", alignItems:"center",fontFamily: "Proxima Nova"}}>{timeAgo}
          </Text> 
        </View>
      </View>
      <View>
        <View style={styles.row} >
          <Image source={require("../../../assets/images/naira.png")} style={styles.nairaIconStyle} />
          <Text style={styles.title}>{title}</Text>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',  
    borderRadius: 8, // Slightly rounded corners
    overflow: 'hidden',
    backgroundColor:"#fff",
    marginRight: 10,
  },
  imageContainer: {
    // flex: 2,
    position:"relative",
    alignItems:"center",
    justifyContent:"center",
    margin:"auto"
  },
  image: {
    width: 147,
    height: 147,
    objectFit: 'contain',
    borderRadius: 5,
 
  },
  nairaIconStyle: {
    width: 12.44,
    height: 12,
    marginRight: 3,
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
    fontFamily:"Helvetica Neue",
    paddingVertical: 5,
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
    paddingTop: 5,
  },
  locationsText: {
    fontSize: 12,
    lineHeight:16.8,
    fontWeight:"400",
    color: '#474747',
    marginLeft: 4,
    fontFamily:"Proxima Nova"

  },
});
