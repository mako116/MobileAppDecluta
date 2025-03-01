import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
 
export default function BannerCategory() {
  return (
    <View style={{ marginVertical: 10 }} >
      <View style={styles.row}>
        {/* First Box */}
        <View style={styles.categoryRow} >
          <View style={{justifyContent:"center",}}>
            <Image source={require('../../../assets/images/newimages/noto_fire.png')} style={{width:20, height:20}} />
          </View>

          <TouchableOpacity style={styles.boxs} >
            <Text style={styles.title}>iPhone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxs} >
            <Text style={styles.title}>HP Laptop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxs} >
            <Text style={styles.title}>Generator</Text>
          </TouchableOpacity>
        </View>


        <View >
           <TouchableOpacity style={{flexDirection:"row",alignItems:"center",}}>

          
            <Text style={{fontWeight:"700",fontSize:12,lineHeight:15.4, fontFamily:"Helvetica Neue Lt"}}>View All</Text>
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
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
     },
     categoryRow: {
      flexDirection: 'row',
      alignItems: "center",
      gap: 5,
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
      backgroundColor: '#f8f9fa',
      borderRadius: 5,
      alignItems:"center",
      paddingHorizontal: 10,
      paddingVertical: 5,
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
      fontFamily:"Proxima Nova",
      textAlign:"center"
    },
     
  });
  