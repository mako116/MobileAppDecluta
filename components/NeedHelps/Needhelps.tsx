import NeedHelpScreen from '@/screens/Conditions/NeedHelpScreen';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';

export default function NeedHelps() {
    const handleGoBack = () => {
        router.back();
      };
    
  return (
    <SafeAreaView style={{paddingTop:30}}>
         <View style={styles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{color:"#212121", fontWeight:"700", fontSize:23, lineHeight:32.2}}>Need help?</Text>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <NeedHelpScreen/>
        </ScrollView>
        
         </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    signs: {
      paddingHorizontal: 12,
      paddingVertical:20,
      gap:40,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    containers:{
      paddingHorizontal:10
    },
    texts: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 22.4,
      color: "#212121",
      marginLeft: 10,
    },
    contents:{
      paddingVertical:20,
      paddingHorizontal:13
    },
    section:{
      paddingTop:13,
      paddingHorizontal:13
    }
  });
  