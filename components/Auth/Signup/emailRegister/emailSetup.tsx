import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign, Entypo, Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { commonstyles } from '@/styles/common/common.style';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import * as Google from 'expo-auth-session/providers/google';
import GoolgSignUp from '../GoogleSignup/GoogleSignUpComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function EmailSetup() {
  const { googleLogin } = useAuth();
  const [userInfo, setUserInfo] = useState({ email: ""});
  const [required, setRequired] = useState("");
  const [token] = useState("")
  const [focusInput, setFocusInput] = useState({ email: false, password: false });
  const [buttonSpinner, setButtonSpinner] = useState(false);

  // const CLIENTID = process.env.CLIENT_ID

  const handleSaveEmail = async (email: string) => {
    try {
      await AsyncStorage.setItem('email', email.toLowerCase());
      console.log('Email saved successfully:', email);
    } catch (error) {
      console.error('Error saving email to AsyncStorage:', error);
    }

    setTimeout(() => {
      setButtonSpinner(false);
      router.push("/(routes)/details-setup")
      // Navigate to the dashboard or home after successful login
    }, 1000);
  };
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '850314571191-tba9n0iea4el6d7o4ic6v4u93gnpudh7.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@dev.david/decluttaking-mobileapp',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
      // Send `authentication.accessToken` to your backend for further validation.
    }
  }, [response]);

  const handleGoBack = () => {
    router.back();
  };

  const navigateToTerms = () => router.push("/(routes)/Terms");

  
    const [showMore, setShowMore] = useState(false);
  
    const handleShowMore = () => {
      setShowMore(prevState => !prevState);
    };

    
      const handlePhonePush =()=>{
        router.push("/(routes)/PhoneLogin");
      }
  return (
    <SafeAreaView edges={['bottom']} style = {{ flex: 1 }} >
      <View style = {{ flex: 1, backgroundColor: "#F9F9F9" }}>
        <View style={SignUpStyles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require("../../../../assets/images/leftArrow.png")} style={{ height: 15, width: 30 }} />
          </TouchableOpacity>
          <Text style={SignUpStyles.texts}> Sign Up</Text>
        </View>

        <View style = {{ flex: 1 }} >
          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <Text style={SignUpStyles.label}>Email</Text>
            <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
              <TextInput
                style={[
                  SignUpStyles.input,
                  focusInput.email && { borderColor: "#DEBC8E" },
                  { paddingHorizontal: 40 },
                ]}
                keyboardType="email-address"
                value={userInfo.email}
                placeholder="Enter email"
                placeholderTextColor='gray'
                onFocus={() => setFocusInput({ ...focusInput, email: true })}
                onBlur={() => setFocusInput({ ...focusInput, email: false })}
                onChangeText={(value) => {
                  setUserInfo({ ...userInfo, email: value });
                  if (required) setRequired("");  // Clear error if user starts typing
                }}
              />
            </View>
            {/* come back to this */}
            {required && (
              <View style={commonstyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
              </View>
            )}
          </View>

          <TouchableOpacity style={SignUpStyles.loginButton} onPress={() => handleSaveEmail(userInfo.email)}>
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={SignUpStyles.loginText}>Continue</Text>
            )}
          </TouchableOpacity>

          <View style={[SignUpStyles.signUpRedirect,{justifyContent:"center", paddingVertical: 20, alignItems:"center"}]}>
            <Text style={{fontFamily:"Proxima Nova", fontSize: 16,}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
              <Text style={SignUpStyles.signUpLink}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={SignUpStyles.separatorContainer}>
            <View style={SignUpStyles.separator} />
            <Text style={SignUpStyles.separatorText}>OR</Text>
            <View style={SignUpStyles.separator} />
          </View>

          <View style={SignUpStyles.socialButtons}>
            <TouchableOpacity onPress={handlePhonePush} style={SignUpStyles.socialButton}>
              <MaterialIcons name="phone-android" size={26} color="black" />
              <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Phone</Text>
            </TouchableOpacity>
            
            <GoolgSignUp />
      
            {/* Conditionally render the other buttons */}
            {showMore && (
              <>
                <TouchableOpacity style={SignUpStyles.socialButton}>
                  <AntDesign name="apple1" size={26} color="black" />
                  <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Apple</Text>
                </TouchableOpacity>

                
              </>
            )}

            {/* Arrow icon to toggle showing more buttons */}
            <View style={{ margin: "auto", paddingVertical: 14 }}>
              <TouchableOpacity onPress={handleShowMore}>
                <SimpleLineIcons
                  name={showMore ? "arrow-up" : "arrow-down"}
                  size={22}
                  color="#A4A4A4"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 80, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <TouchableOpacity onPress={navigateToTerms}>
            <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 }}>Terms of use</Text>
            </TouchableOpacity>
            <View style={SignUpStyles.separator2} />
            <TouchableOpacity onPress={() => router.push("/(routes)/privacyPolicy")}>
            <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 }}>Privacy Policy</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({

});
