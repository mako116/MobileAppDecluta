import SignUpWithEmail from "@/components/Auth/Signup/EmailAddressSignUp/EmailSignUp";
import GoolgSignUp from "@/components/Auth/Signup/GoogleSignup/GoogleSignUpComponent";
import Button from "@/components/Button/button";
import TermsAndPolicyComponent from "@/components/TermsAndPolicy/TermsAndPolicy";
import { SignUpStyles } from "@/styles/Signup/signup.style";
import PhoneNumberInputField from "@/UI/InputFields/PhoneNumberInputField";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmailLoginButton from "../EmailAddressLogin/EmailLoginButton";

const PhoneLogin: React.FC = () => {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  const handlePhoneChange = (number: string) => {
    const filteredNumber = number.replace(/[^0-9]/g, '');
    setPhoneNumber(filteredNumber);
    if (filteredNumber.length > 0) {
      setPhoneError('');
    }
  };

  const NextPage = () => {
    if (!phoneNumber) {
      setPhoneError("The phone number you entered is incorrect. Please try again or continue with email login if you've forgotten your number.");
      return;
    }
  
    
  
    setPhoneError(""); // Clear any previous error
    setButtonSpinner(true);
  
    setTimeout(() => {
      router.push("/(routes)/LoginOTP");
      setButtonSpinner(false);
    }, 1000);
  };
  

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <View style={{ flex: 1 }}>
        <View style={{backgroundColor:"#fff",paddingBottom:20}}>
          <Image source={require("../../../../assets/images/newimages/9 1.png")} style={SignUpStyles.sigInImage} />
          <Text style={SignUpStyles.welcomeText}>Log in with phone</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 15, marginHorizontal: 16, backgroundColor: "#F9F9F9" }}>
            <Text style={SignUpStyles.label}>Phone</Text>
            <PhoneNumberInputField
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              error={phoneError} 
            />
            <Button
              title="Login"
              onPress={NextPage}
              backgroundColor="#DEBC8E"
              borderWidth={0}
            />
          </View>

          <View style={[SignUpStyles.signUpRedirect, { justifyContent: "center", paddingVertical: 20, alignItems: "center" }]}>
            <Text style={{ fontFamily: "Proxima Nova", fontSize: 16 }}>New to Decluttaking?</Text>
            <TouchableOpacity onPress={() => router.push("/(routes)/emailRegister")}>
              <Text style={SignUpStyles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={SignUpStyles.separatorContainer}>
            <View style={SignUpStyles.separator} />
            <Text style={SignUpStyles.separatorText}>OR</Text>
            <View style={SignUpStyles.separator} />
          </View>

          <View style={SignUpStyles.socialButtons}>
            <EmailLoginButton />
            <GoolgSignUp />

            {showMore && (
              <TouchableOpacity style={SignUpStyles.socialButton}>
                <AntDesign name="apple1" size={22} color="black" />
                <Text style={{
                  color: "#000000",
                  lineHeight: 19.6,
                  fontSize: 16,
                  fontWeight: '400',
                  fontFamily: "Proxima Nova"
                }}>Continue with Apple</Text>
              </TouchableOpacity>
            )}

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
};

export default PhoneLogin;
