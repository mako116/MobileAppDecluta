import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
 
export default function BannerCategory() {
  return (
    <View >
      <View style={styles.row}>
        {/* First Box */}
        <View style={{justifyContent:"center",}}>
        <Image source={require('../../../assets/images/noto_fire.png')} />
        </View>
        <View style={styles.box}>
        
           <View style={styles.textContainer}>
           <TouchableOpacity>
            <Text style={styles.title}>iPhone</Text>
            </TouchableOpacity>
           </View>
            
        </View>

        {/* Second Box */}
        <View style={styles.box}>
            
           <View style={styles.textContainer}>
           <TouchableOpacity>
            <Text style={styles.title}>HP Laptop</Text>
            </TouchableOpacity>
           </View>
           
           
        </View>
        <View style={styles.box}>
        
           <View style={styles.textContainer}>
           <TouchableOpacity> 
            <Text style={styles.title}>Generator</Text>
            </TouchableOpacity>
           </View>
           
           
        </View>

        <View >
           <TouchableOpacity style={{width:100,flexDirection:"row",alignItems:"center", justifyContent:"flex-end",paddingRight:14}}>

          
            <Text style={{fontWeight:"bold",fontSize:10.4,lineHeight:15.4}}>View all</Text>
            {/* <View style={{ alignItems:"flex-end",}}> */}
           <MaterialIcons name="arrow-forward-ios" size={14} color="black" style={{fontWeight:"bold"}}/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
    row: {
        paddingVertical:5,
      flexDirection: 'row',
      gap:5
    //   justifyContent: 'space-around',
     },
    box: {
      flexDirection: 'row',
      justifyContent:"flex-start",
    //   alignItems: "flex-start",
      backgroundColor: '#f8f9fa',
      borderRadius: 4,
      // padding: 16,
      elevation: 3, // Adds shadow for Android
      shadowColor: '#000', // Adds shadow for iOS
      shadowOpacity: 0.2,
      shadowOffset: { width: 1, height: 2 },
      shadowRadius: 4,
      width: 65,  
      height:21
    },
    icon: {
      marginRight: 16,
    },
    textContainer: {
        margin:"auto",
    },
    title: {
      fontSize: 12,
      fontWeight: "400",
       lineHeight:16.6,
      color: '#463E31',
    },
     
  });
  