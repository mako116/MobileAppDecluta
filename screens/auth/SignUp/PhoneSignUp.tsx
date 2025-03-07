import GoolgSignUp from "@/components/Auth/Signup/GoogleSignup/GoogleSignUpComponent";
import SignUpWithPhone from "@/components/Auth/Signup/PhoneNumberSignUp/SignUpWithPhone";
import Button from "@/components/Button/button";
import TermsAndPolicyComponent from "@/components/TermsAndPolicy/TermsAndPolicy";
import { SignUpStyles } from "@/styles/Signup/signup.style";
import HeaderProp from "@/UI/Header/HeaderProp";
import PhoneNumberInputField from "@/UI/InputFields/PhoneNumberInputField";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const PhoneSignUpScreen: React.FC = () => {
    const handleGoBack = () => {
        router.back();
      };
        const [buttonSpinner, setButtonSpinner] = useState(false);
        const [phoneNumber, setPhoneNumber] = useState('');
         const [callingCode, setCallingCode] = useState('234');  // Default calling code for 'US'
        const [isButtonEnabled, setIsButtonEnabled] = useState(false); // State for button enabled/disabled
      const [showMore, setShowMore] = useState(false);
      
        const handleShowMore = () => {
          // Set showMore to true when the image is clicked
          setShowMore(prevState => !prevState);
        };
        useEffect(() => {
          setIsButtonEnabled(phoneNumber.length > 0);
        }, [phoneNumber]);
      
        // Handle phone number change, only numeric values
        const handlePhoneChange = (number: string) => {
          const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
          setPhoneNumber(filteredNumber);
        };
      
       
      
        const NextPage = () => {
          setButtonSpinner(true);
          setTimeout(() => {
            router.push("/(routes)/LoginOTP");
            setButtonSpinner(false);
          }, 1000);
        };
    return (
        <SafeAreaView edges={['bottom']} style = {{ backgroundColor: "#F9F9F9"  }} >
            <HeaderProp title="Sign Up" />
            <View style={{ backgroundColor: "#F9F9F9" }} >
                <View style={{ marginTop: 15, marginHorizontal: 16, backgroundColor: "#F9F9F9" }}>
                    <Text style={SignUpStyles.label}>Phone Number</Text>
                    <PhoneNumberInputField />
                    <Button
                        title=" Continue "
                        onPress={NextPage}
                        backgroundColor="#DEBC8E"
                        borderWidth="1"
                    />
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
                        <TouchableOpacity style={SignUpStyles.socialButton}>
                        <AntDesign name="apple1" size={22} color="black" />
                        <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 16, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Apple</Text>
                        </TouchableOpacity>
                    )}

                    {/* Arrow icon to toggle showing more buttons */}
                    <View style={{ margin: "auto", paddingVertical: 14 }}>
                        {!showMore && (
                    <TouchableOpacity onPress={handleShowMore}>
                        <Image
                        style={{ height: 24, width: 24, resizeMode: "contain" }}
                        source={require("../../../assets/images/newimages/Down 2.png")} // Image path
                        />
                    </TouchableOpacity>
                    )}


                    </View>
                </View>
                
                {/* <TouchableOpacity
                    onPress={NextPage}
                    style={[
                        { marginTop: 20 },
                        SignUpStyles.loginButton,
                        !isButtonEnabled && { backgroundColor: "#E9E9E9" }, // Gray out if disabled
                    ]}
                    disabled={!isButtonEnabled} // Disable button if not enabled
                >
                    {buttonSpinner ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text
                        style={[
                            !isButtonEnabled && { backgroundColor: "#E9E9E9", color: "#E9E9E9" },
                            SignUpStyles.loginText,
                        ]}
                        >
                        Login
                        </Text>
                    )}
                </TouchableOpacity> */}
            </View>
            <TermsAndPolicyComponent />
        </SafeAreaView>
    )
}

export default PhoneSignUpScreen;