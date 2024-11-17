import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Feather ,MaterialCommunityIcons} from '@expo/vector-icons';
import { router } from 'expo-router';
import { commonstyles } from '@/styles/common/common.style';
import { SignUpStyles } from '@/styles/Signup/signup.style';

export default function ForgotPassword() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [required, setRequired] = useState("");
    const [focusInput, setFocusInput] = useState({ email: false, password: false });
    const [buttonSpinner, setButtonSpinner] = useState(false);

    const handleGoBack = () => {
        router.back();
      };
      const handleHelp = () =>{
        router.push("/(routes)/need-help")
      }

      const handleRestEmail = () =>{
        router.push("/(routes)/reset-password")
      }
  return (
    <SafeAreaView>
    <ScrollView scrollEventThrottle={16}>
     <View style={{height:"100%"}}>
     <View style={styles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Image source={require("@/assets/images/forget.png")} style={{justifyContent:"center", margin:"auto"}} />
        </View>
        <View style={{}}>
            <Text style={[SignUpStyles.label,{fontWeight:"700",fontSize:19, lineHeight:26.6, marginTop:20}]}>Forgot password</Text>
        <View style={{ marginTop: 20, marginBottom: 10 ,}}>
            <Text style={SignUpStyles.label}>Email</Text>
            <TextInput
              style={[
                SignUpStyles.input,
                focusInput.email && { borderColor: "#DEBC8E" },
                { paddingHorizontal: 40 },
              ]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="Enter your email Address"
              onFocus={() => setFocusInput({ ...focusInput, email: true })}
              onBlur={() => setFocusInput({ ...focusInput, email: false })}
              onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
            />
            {required && (
              <View style={commonstyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
              </View>
            )}
          </View>
          
          <TouchableOpacity style={SignUpStyles.loginButton} onPress={handleRestEmail}>
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={SignUpStyles.loginText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row", justifyContent: "center",marginTop:"100%"}}>
          <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
          <Text>Need help?</Text>
          <TouchableOpacity onPress={handleHelp}>
            <Text style={{color:"#DEBC8E"}}> Click Here</Text>
          </TouchableOpacity>
        </View>
     </View>
     </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    signs: {
      paddingHorizontal: 12,
    //    marginVertical:42,
       paddingTop:60,
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
  