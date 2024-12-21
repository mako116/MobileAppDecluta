import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
 
export default function BannerCategory() {
  return (
    <View >
      <View style={styles.row}>
        {/* First Box */}
        <View style={{justifyContent:"center",}}>
        <Image source={require('../../../assets/images/newimages/noto_fire.png')} style={{width:18, height:18}} />
        </View>
        <View style={styles.box}>
        
           <View style={styles.textContainer}>
           <TouchableOpacity style={{paddingLeft:13,paddingTop:1}}>
            <Text style={styles.title}>iPhone</Text>
            </TouchableOpacity>
           </View>
            
        </View>

        {/* Second Box */}
        <View style={styles.boxs}>
            
           <View style={styles.textContainer}>
           <TouchableOpacity  style={{paddingLeft:5}}>
            <Text style={styles.title}>HP Laptop</Text>
            </TouchableOpacity>
           </View>
           
           
        </View>
        <View style={styles.boxs}>
        
           <View style={styles.textContainer}>
           <TouchableOpacity  style={{paddingLeft:5}}> 
            <Text style={styles.title}>Generator</Text>
            </TouchableOpacity>
           </View>
           
           
        </View>

        <View >
           <TouchableOpacity style={{width:100,flexDirection:"row",alignItems:"center", justifyContent:"flex-end",paddingRight:26,}}>

          
            <Text style={{fontWeight:"700",fontSize:12,lineHeight:15.4, fontFamily:"HelveticaNeueLTPro"}}>View All</Text>
            {/* <View style={{ alignItems:"flex-end",}}> */}
           <MaterialIcons name="arrow-forward-ios" size={9} color="black" style={{fontWeight:"800", marginLeft:3}}/>
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
      gap:5,
        alignItems: "center",
      // justifyContent: 'space-around',
     },
    box: {
      flexDirection: 'row',
      justifyContent:"flex-start",
    
      backgroundColor: '#f8f9fa',
      borderRadius: 4,
      
      width: 57,  
      height:21
    },
    boxs: {
      flexDirection: 'row',
      justifyContent:"flex-start",
    
      backgroundColor: '#f8f9fa',
      borderRadius: 4,
      alignItems:"center",
      width: 75,  
      height:21
    },
    icon: {
      marginRight: 16,
    },
    textContainer: {
       
        // paddingLeft:10,
        // height:21,
        // width:74
    },
    title: {
      fontSize: 12,
      fontWeight: "400",
       lineHeight:16.8,
      color: '#463E31',
      fontFamily:"Proxima Nova"
    },
     
  });
  