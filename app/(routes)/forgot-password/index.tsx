 import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import{
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
}from "@expo-google-fonts/nunito"
 
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import ForgotPassword from '@/components/Auth/Passwords/ForgotPasswords/ForgotPassword';
  export default function ForgotPasswords() {
    
  return (
   <ForgotPassword/>
 
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  buttonText:{
    color:"white",
    textAlign:"center"
 },
  headerText:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:10
  },
  subText:{
    fontSize:16,
    color: "#666",
    textAlign:'center',
    marginBottom:10
  },
  inputContainer:{
   flexDirection:'row',
    marginBottom:20
  },
  input:{
    height:55,
    marginHorizontal:16,
    borderRadius:8,
    paddingLeft:35,
    fontSize:14,
    backgroundColor:"white",
    color:"#a1a1a1"
  },
  inputBox:{
    width:60,
    height:60,
    borderWidth:1,
    borderColor:"#ddd",
    textAlign:"center",
    marginRight:10,
    borderRadius:10,
    fontSize:20
  }
})
