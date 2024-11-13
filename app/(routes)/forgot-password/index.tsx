 import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import{
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
}from "@expo-google-fonts/nunito"
 
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
  export default function ForgotPassword() {
    let [ fontsLoaded, fontError] = useFonts({
      Nunito_400Regular,
      Nunito_500Medium,
      Nunito_700Bold,
      Nunito_600SemiBold,
    });
  
    if (!fontsLoaded && !fontError){
      return null;
    }
  return (
    <LinearGradient
    colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]} 
    >
      <Text style={[styles.headerText,{fontFamily:"Nunito_400Regular"}]}>
        Reset Email Password
      </Text>

      <TextInput
      style={[styles.input]}
      placeholder='username@gmail.com'
      keyboardType='email-address'/>
      <TouchableOpacity>
        <Text style={[styles.buttonText]}>
          send
        </Text>

      </TouchableOpacity>
      <View >
        <Text>
          Back To
        </Text>
        <TouchableOpacity onPress={()=> router.back()}>
          Sign In 
        </TouchableOpacity>
      </View>
    </LinearGradient>
 
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
