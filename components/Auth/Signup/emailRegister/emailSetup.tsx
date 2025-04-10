import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { commonstyles } from '@/styles/common/common.style';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoolgSignUp from '../GoogleSignup/GoogleSignUpComponent';
import TermsAndPolicyComponent from '@/components/TermsAndPolicy/TermsAndPolicy';
import TextInputField from '@/UI/InputFields/TextInputField';
import SignUpWithPhone from '../PhoneNumberSignUp/SignUpWithPhone';
import SignUpWithApple from '../AppleSignUp/SignUpWithApple';
import HeaderProp from '@/UI/Header/HeaderProp';
// Import Redux hooks and actions
import { useAppDispatch, useAppSelector } from '@/redux/Redux/hook/hook';
import { setEmail } from '@/redux/Redux/slice/authSlice';

export default function EmailSetup() {
  const [userInfo, setUserInfo] = useState({ email: "" });
  const [required, setRequired] = useState("");
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  // Redux hooks
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

// In EmailSetup.tsx
const handleContinue = async () => {
  if (!userInfo.email) {
    setRequired("Email is required");
    return;
  }
  
  if (!validateEmail(userInfo.email)) {
    setRequired("Please enter a valid email address");
    return;
  }

  setButtonSpinner(true);
  try {
    // Dispatch setEmail action to Redux store
    await dispatch(setEmail(userInfo.email.toLowerCase()));
    // Navigate to details page
    router.push("/(routes)/details-setup");
  } catch (err) {
    console.error("Error setting email:", err);
  } finally {
    setButtonSpinner(false);
  }
};
  const handleShowMore = () => {
    setShowMore(prevState => !prevState);
  };
  
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <View style={{ flex: 1 }}>
        <HeaderProp title="Sign Up" />
        <View style={{ flex: 1 }}>
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
            
            {required && (
              <View style={commonstyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
                <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>{required}</Text>
              </View>
            )}
            
            {error && (
              <View style={commonstyles.errorContainer}>
                <Entypo name="cross" size={18} color="red" />
                <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>{error}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={SignUpStyles.loginButton} onPress={handleContinue}>
            {buttonSpinner || loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={SignUpStyles.loginText}>Continue</Text>
            )}
          </TouchableOpacity>

          <View style={[SignUpStyles.signUpRedirect, {justifyContent:"center", paddingVertical: 20, alignItems:"center"}]}>
            <Text style={{fontFamily:"Proxima Nova", fontSize: 16}}>Already have an account?</Text>
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
                    source={require("../../../../assets/images/newimages/Down 2.png")}
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