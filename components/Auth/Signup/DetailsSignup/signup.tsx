import DetailScreen from '@/screens/auth/Detailscreens/DetailsScreen';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SignUp() {
  const handleGoBack = () => {
    router.back();
  };

 

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView scrollEventThrottle={16} >
        <View style={styles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Image source={require("@/assets/images/Group 2.png")} style={{justifyContent:"center", margin:"auto"}} />
        </View>
        <View style={styles.section}>
          <Text style={{color:"#212121", fontWeight:"700", fontSize:23, lineHeight:32.2, fontFamily:"HelveticaNeueLTPro"}}>Tell Us About yourself</Text>
        </View>
        <DetailScreen/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  signs: {
    paddingHorizontal: 12,
    // paddingTop: 60,
    paddingVertical:32,
    paddingTop: 50,
    paddingBottom: 20,
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
