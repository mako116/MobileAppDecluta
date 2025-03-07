import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { commonstyles } from '@/styles/common/common.style';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import * as Google from 'expo-auth-session/providers/google';
import GoolgSignUp from '../GoogleSignup/GoogleSignUpComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TermsAndPolicyComponent from '@/components/TermsAndPolicy/TermsAndPolicy';
import TextInputField from '@/UI/InputFields/TextInputField';
import SignUpWithPhone from '../PhoneNumberSignUp/SignUpWithPhone';
import SignUpWithApple from '../AppleSignUp/SignUpWithApple';


export default function EmailSetup() {
  const { googleLogin } = useAuth();
  const [userInfo, setUserInfo] = useState({ email: ""});
  const [required, setRequired] = useState("");
  const [token] = useState("")
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
    <SafeAreaView edges={['bottom']} style = {{ flex: 1, backgroundColor: "#F9F9F9"  }} >
      <View style = {{ flex: 1 }}>
        <View style={SignUpStyles.signs}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require("../../../../assets/images/leftArrow.png")} style={{ height: 15, width: 30 }} />
          </TouchableOpacity>
          <Text style={SignUpStyles.texts}> Sign Up</Text>
        </View>

        <View style = {{ flex: 1 }} >
          <View style={{ marginTop: 40, marginBottom: 10, paddingHorizontal: 13 }}>
            <Text style={[SignUpStyles.label]}>Email</Text>
            <TextInputField
              placeholder="Enter email"
              value={userInfo.email}
              onChangeText={(value) => {
                setUserInfo({ ...userInfo, email: value });
                if (required) setRequired("");  // Clear error if user starts typing
              }}
              keyboardType="email-address"
              placeholderTextColor='gray'
              icon={<AntDesign name="lock" size={20} color="gray" />}
            />
            
            {/* <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
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
            </View> */}

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
            <SignUpWithPhone />
            
            <GoolgSignUp />
      
            {/* Conditionally render the other buttons */}
            {showMore && (
              <>
                <SignUpWithApple />

                
              </>
            )}

            {/* Arrow icon to toggle showing more buttons */}
              <View style={{ margin: "auto", paddingVertical: 14 }}>
                {!showMore && (
                  <TouchableOpacity onPress={handleShowMore}>
                     <Image
                      style={{ height: 24, width: 24, resizeMode: "contain" }}
                       source={require("../../../../assets/images/newimages/Down 2.png")} // Image path
                       />
                  </TouchableOpacity>
                )}
              </View>
          </View>
        </View>
      </View>
      <TermsAndPolicyComponent />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({

});
