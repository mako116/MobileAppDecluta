import { useState, useEffect } from "react";
import KycSignup from "@/styles/Kyc/signup.styles";
import VerificationStyle from "@/styles/Kyc/VerificationStyles";
import HeaderProp from "@/UI/Header/HeaderProp";
import TextInputField from "@/UI/InputFields/TextInputField";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMonnify } from "@/utils/Monnify/useMonnify";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import {Picker} from '@react-native-picker/picker';

const BvnVerification: React.FC = () => {
    const [bvn, setBvn] = useState(""); // Track NIN input
    const [dateOfBirth, setDateOfBirth] = useState(""); // Track date of birth input
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<"success" | "error" | "pending" | null>(null);
    const { verifyNBvnUser } = useMonnify();
    const { getUser } = useAuth()
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());


    useEffect(() => {
        const verify = async () => {
            const user = getUser();
            try {
                setVerifying(true);
                setVerificationStatus("pending");
                const user = await getUser();
                const response = await verifyNBvnUser( {
                    bvn,
                    name: user?.name,
                    dateOfBirth,
                    mobileNo: user?.phoneNumber
                }); // Now correctly returns a value
                console.log('Res data', response);
    
                if (response?.responseMessage === "success") { // ✅ Check responseMessage properly
                    setVerificationStatus("success");
                } else {
                    setVerificationStatus("error");
                }
            } catch (error) {
                console.error("Error verifying NIN:", error);
                setVerificationStatus("error");
                setVerifying(false);
            }
        };
    
        if (bvn.length === 11) {
            verify();
        }
    }, []);
    
    
    

    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <HeaderProp title="Identity Verification" subTile="(Step 2/2)" />
            <View style={[VerificationStyle.container]}>
                <Text style={[VerificationStyle.TextHeader]}>
                    BVN <Text style={VerificationStyle.SubTextHeader}>(Bank Verification Number)</Text>
                </Text>
                <View style={[VerificationStyle.row]}>
                    <Image 
                        source={require('../../../assets/images/info-circle.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={VerificationStyle.InfoText}>
                        Kindly provide your BVN to create your wallet and ensure quick, secure transactions on DecluttaKing.
                    </Text>
                </View>
                
                {/* Text Input Field */}
                <TextInputField
                    placeholder="Enter your 11-digit NIN"
                    value={bvn}
                    onChangeText={setBvn}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <Text style={[VerificationStyle.TextHeader, { marginTop: 20 }]}>
                    Date of Birth
                </Text>
                <View style={[VerificationStyle.row]}>
                    <Image 
                        source={require('../../../assets/images/info-circle.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Text style={VerificationStyle.InfoText}>
                        Your date of birth is required to verify your BVN and complete your wallet setup. It must match your BVN document.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Picker
                        selectedValue={day}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue) => setDay(itemValue)}
                    >
                        <Picker.Item label="Day" value="" />
                        {days.map((d) => <Picker.Item key={d} label={d} value={d} />)}
                    </Picker>
                    <Picker
                        selectedValue={month}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue) => setMonth(itemValue)}
                    >
                        <Picker.Item label="Month" value="" />
                        {months.map((m) => <Picker.Item key={m} label={m} value={m} />)}
                    </Picker>
                    <Picker
                        selectedValue={year}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue) => setYear(itemValue)}
                    >
                        <Picker.Item label="Year" value="" />
                        {years.map((y) => <Picker.Item key={y} label={y} value={y} />)}
                    </Picker>
                </View>

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

export default BvnVerification;
