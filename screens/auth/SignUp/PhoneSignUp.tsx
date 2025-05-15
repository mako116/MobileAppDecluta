import SignUpWithEmail from "@/components/Auth/Signup/EmailAddressSignUp/EmailSignUp";
import GoolgSignUp from "@/components/Auth/Signup/GoogleSignup/GoogleSignUpComponent";
import Button from "@/components/Button/button";
import TermsAndPolicyComponent from "@/components/TermsAndPolicy/TermsAndPolicy";
import { useAppDispatch } from "@/redux/Redux/hook/hook";
import { setUserPhoneNumber } from "@/redux/Redux/slice/authSlice";
import { SignUpStyles } from "@/styles/Signup/signup.style";
import HeaderProp from "@/UI/Header/HeaderProp";
import PhoneNumberInputField from "@/UI/InputFields/PhoneNumberInputField";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const PhoneSignUpScreen: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [required, setRequired] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const dispatch = useAppDispatch();
    const handleShowMore = () => {
        // Set showMore to true when the image is clicked
        setShowMore(prevState => !prevState);
    };
    useEffect(() => {
        setIsButtonEnabled(phoneNumber.length >= 10);
    }, [phoneNumber]);
    
    // Handle phone number change, only numeric values
    const handlePhoneChange = (number: string) => {
        const filteredNumber = number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        
        // If the number starts with '0', remove it
        if (filteredNumber.startsWith('0')) {
        setPhoneNumber(filteredNumber.substring(1));
        } else {
        setPhoneNumber(filteredNumber);
        }
    };

    // Format phone number with +234 prefix for submission
    const formatPhoneNumber = (number: string) => {
        // If the number starts with '0', remove it before adding the prefix
        if (number.startsWith('0')) {
        return `+234${number.substring(1)}`;
        }
        // Otherwise, just add the prefix
        return `+234${number}`;
    };
    const NextPage = async () => {
        if (!phoneNumber) {
            setRequired("Phone number is required");
            return;
        }
        try {
            const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
            // Dispatch setEmail action to Redux store
            await dispatch(setUserPhoneNumber(phoneNumber.toLowerCase()));
            // Navigate to details page
            router.push("/(routes)/details-setup");
        } catch (err) {
            console.error("Error setting phone number:", err);
        }
    };
    return (
        <SafeAreaView edges={['bottom']} style = {{flex: 1, backgroundColor: "#F9F9F9"  }} >
            <View style={{ flex: 1 }} >
                <HeaderProp title="Sign Up" />
                <View style={{ flex: 1 }} >
                    <View style={{ marginTop: 15, marginHorizontal: 16, backgroundColor: "#F9F9F9" }}>
                        <Text style={SignUpStyles.label}>Phone Number</Text>
                        <PhoneNumberInputField 
                            value={phoneNumber}
                            onChangeText={handlePhoneChange}
                        />
                        <Button
                            title="Continue"
                            onPress={NextPage}
                            backgroundColor="#DEBC8E"
                            borderWidth= {1}
                            disabled={!isButtonEnabled}
                        />
                    </View>
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
                        <SignUpWithEmail />
                        
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
            </View>
            <TermsAndPolicyComponent />
        </SafeAreaView>
    )
}

export default PhoneSignUpScreen;