import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo, Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { commonstyles } from '@/styles/common/common.style';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import * as Google from 'expo-auth-session/providers/google';
import GoolgSignUp from '../GoogleSignup/GoogleSignUpComponent';


export default function EmailSetup() {
  const { setEmail, googleLogin } = useAuth();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [required, setRequired] = useState("");
  const [token] = useState("")
  const [focusInput, setFocusInput] = useState({ email: false, password: false });
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const CLIENTID = process.env.CLIENT_ID

  const handleSignUp = () => {
    if (!userInfo.email.trim()) {
      setRequired("Email is required");
      return;
    }

    setButtonSpinner(true);

    // Store the email in your Auth context
    setEmail(userInfo.email);

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

  return (
    <SafeAreaView edges={['bottom']} style = {{ flex: 1 }} >
      <View>
          <View style={styles.signs}>
            <TouchableOpacity onPress={handleGoBack}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.texts}> Sign Up</Text>
          </View>
          
          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <Text style={SignUpStyles.label}>Email</Text>
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
            {required && (
              <View style={commonstyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
              </View>
            )}
          </View>

          <TouchableOpacity style={SignUpStyles.loginButton} onPress={handleSignUp}>
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={SignUpStyles.loginText}>Continue</Text>
            )}
          </TouchableOpacity>

          <View style={[SignUpStyles.signUpRedirect,{justifyContent:"center"}]}>
            <Text >Already have an account?</Text>
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
            <TouchableOpacity style={SignUpStyles.socialButton}>
              <MaterialIcons name="phone-android" size={24} color="black" />
              <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Phone</Text>
            </TouchableOpacity>

            <GoolgSignUp />

            {/* <TouchableOpacity style={SignUpStyles.socialButton} onPress={() => {
            promptAsync();
            }}>
              <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={require("@/assets/images/google.png")} />
              <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Google</Text>
            </TouchableOpacity> */}
          </View>

          <View style={{ margin: "auto", paddingVertical: 14 }}>
            <SimpleLineIcons name="arrow-down" size={22} color="#A4A4A4" />
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
  signs: {
    paddingHorizontal: 10,
    paddingTop: 80,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  texts: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22.4,
    color: "#212121",
    marginLeft: 10,
  },
});
