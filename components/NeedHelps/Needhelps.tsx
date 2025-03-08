import NeedHelpScreen from '@/screens/Conditions/NeedHelpScreen';
import HeaderProp from '@/UI/Header/HeaderProp';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NeedHelps() {
    const handleGoBack = () => {
        router.back();
      };
    
  return (
    <SafeAreaView edges={[ 'bottom' ]} style = {{flex: 1, backgroundColor: "#F9F9F9"  }}>
      <HeaderProp title='Need help?' />
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
  