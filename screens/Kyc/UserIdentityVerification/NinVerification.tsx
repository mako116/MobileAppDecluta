import { useState, useEffect } from "react";
import KycSignup from "@/styles/Kyc/signup.styles";
import VerificationStyle from "@/styles/Kyc/VerificationStyles";
import HeaderProp from "@/UI/Header/HeaderProp";
import TextInputField from "@/UI/InputFields/TextInputField";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMonnify } from "@/utils/Monnify/useMonnify";
import { router } from "expo-router";

const NinVerification: React.FC = () => {
    const [nin, setNin] = useState(""); // Track NIN input
    const [verifying, setVerifying] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<"success" | "error" | "pending" | null>(null);
    const { verifyNinUser } = useMonnify();

    useEffect(() => {
        // const verify = async () => {
        //     try {
        //         setVerifying(true);
        //         setVerificationStatus("pending");
    
        //         const response = await verifyNinUser({nin}); // Call your actual verification function
    
        //         if (response === "success") {
        //             setVerificationStatus("success");
        //         } else {
        //             setVerificationStatus("error");
        //         }
        //     } catch (error) {
        //         console.error("Error verifying NIN:", error);
        //         setVerificationStatus("error");
        //     } finally {
        //         setVerifying(false);
        //     }
        // };
    
        // if (nin.length === 11) {
        //     verify(); // Call the async verification function
        // }
        if (nin.length === 11) {
            setVerifying(true);
            setVerificationStatus("pending");
    
            setTimeout(() => {
                if (nin === "12345678901") { // Simulate a valid NIN
                    setVerificationStatus("success");
                } else {
                    setVerificationStatus("error");
                }
                setVerifying(false);
            }, 2000);
    
            // verify(); // Call the async function
        }
    }, [nin]);
    
    
    

    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <HeaderProp title="Identity Verification" subTile="(Step 1/2)" />
            <View style={[VerificationStyle.container]}>
                <Text style={[VerificationStyle.TextHeader]}>
                    NIN <Text style={VerificationStyle.SubTextHeader}>(National Identity Number)</Text>
                </Text>
                <View style={[VerificationStyle.row]}>
                    <Image 
                        source={require('../../../assets/images/info-circle.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={VerificationStyle.InfoText}>
                        We need your NIN to verify the personal information you provided during signup.
                    </Text>
                </View>
                
                {/* Text Input Field */}
                <TextInputField
                    placeholder="Enter your 11-digit NIN"
                    value={nin}
                    onChangeText={setNin}
                    keyboardType="numeric"
                    maxLength={11}
                />

                {/* Status Messages */}
                {verifying && 
                    <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/images/Loading.png')} style={{ width: 13, height: 13 }}/>

                        <Text style={{ color: "gray", fontStyle: 'italic' }} > Verifying... </Text>
                    </View>}
                {verificationStatus === "error" && (
                    <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/images/X.png')} style={{ width: 15, height: 15 }}/>

                        <Text style={{ color: "#E42527", fontStyle: 'italic' }}> Unable to process request. Invalid NIN provided</Text>
                    </View>
                )}
                {verificationStatus === "success" && (
                    <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/images/Check.png')} style={{ width: 15, height: 15 }}/>

                        <Text style={{ color: "#009262", fontStyle: 'italic' }}> NIN verified successfully</Text>
                    </View>
                )}
            </View>
            
            {/* Button */}
            <TouchableOpacity
                onPress={() => router.push("/(routes)/kyc/bvnVerificationScreen")}
                disabled={verificationStatus !== "success"} // Only enable if verified
                style={[
                    KycSignup.button,
                    { 
                        marginBottom: 0, 
                        marginHorizontal: 20, 
                        backgroundColor: verificationStatus === "success" ? "#DEBC8E" : "#E9E9E9"
                    }
                ]}
            >
                <Text style={[
                    KycSignup.buttonText,
                    {
                        color: verificationStatus === "success" ? "black" : "#A4A4A4"
                    }
                ]}>
                    Next
                </Text>
            </TouchableOpacity>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '400',
                        fontFamily: 'Proxima Nova',
                        fontSize: 14,
                    }}
                >
                    Identity verification powered by
                </Text>
                <Image source={require('../../../assets/images/monnifyIcon.png')} style={{ width: 90, height: 15 }}/>
            </View>
        </SafeAreaView>
    );
}

export default NinVerification;
