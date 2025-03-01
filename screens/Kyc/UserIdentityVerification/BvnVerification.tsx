import { useState, useEffect } from "react";
import KycSignup from "@/styles/Kyc/signup.styles";
import VerificationStyle from "@/styles/Kyc/VerificationStyles";
import HeaderProp from "@/UI/Header/HeaderProp";
import TextInputField from "@/UI/InputFields/TextInputField";
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMonnify } from "@/utils/Monnify/useMonnify";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import MonthModal from "@/components/Modals/PickerMonthModal";

const BvnVerification: React.FC = () => {
    const [bvn, setBvn] = useState(""); // Track NIN input
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<"success" | "error" | "pending" | null>(null);
    const [isMonth, setIsMonth] = useState(false);
    const { verifyNBvnUser } = useMonnify();
    const { getUser } = useAuth()

    const toggleModals = () => {
        setIsMonth(!isMonth)
    };


    useEffect(() => {
        if (bvn.length === 11 && day && month && year) {
            const dob = `${day}-${month}-${year}`;
            
    
            const verify = async () => {
                try {
                    setVerifying(true);
                    setVerificationStatus("pending");
    
                    // const user = await getUser();
                    // const response = await verifyNBvnUser({
                    //     bvn,
                    //     name: `${user.data.users.lastName} ${user.data.users.firstName}`, // Join first and last name with a space
                    //     dateOfBirth: dob, // Use local dob instead of state
                    //     mobileNo: user.data.users.phoneNumber
                    // });
    
                    // console.log('Res data', response);
    
                    // if (response?.responseMessage === "success") {
                    //     setVerificationStatus("success");
                    // } else {
                    //     setVerificationStatus("error");
                    // }

                    setTimeout(() => {
                        if (bvn === "12345678901") { // Simulate a valid NIN
                            setVerificationStatus("success");
                        } else {
                            setVerificationStatus("error");
                        }
                        setVerifying(false);
                    }, 2000);
                } catch (error) {
                    console.error("Error verifying BVN:", error);
                    setVerificationStatus("error");
                    setVerifying(false);
                }
            };
    
            verify();
        }
    }, [bvn, day, month, year]); // ✅ Depend on day, month, year instead of dateOfBirth
    
    
    
    

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
                <View style={[styles.row, ]} >
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.label}>Day</Text>
                        <TextInput
                            style={styles.inputIOS}
                            value={day}
                            onChangeText={setDay}
                            keyboardType="numeric"
                            maxLength={2}
                            placeholder="DD"
                        />
                    </View>

                    <View>
                        <Text style={styles.label} >
                            Month
                        </Text>
                        <TouchableOpacity onPress={toggleModals} style={[styles.row, styles.dropDown, { gap: 15 } ]} >
                            <Text  style={{ color: "gray", fontFamily: 'Proxima Nova', fontWeight: '400' }}>
                                {month || "Select"}
                            </Text>
                            <Entypo name="chevron-thin-down" size={16} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.label}>Year</Text>
                        <TextInput
                            style={styles.inputIOS}
                            value={year}
                            onChangeText={setYear}
                            keyboardType="numeric"
                            maxLength={4}
                            placeholder="YYYY"
                        />
                    </View>
                    
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

                        <Text style={{ color: "#E42527", fontStyle: 'italic' }}> Unable to process request. Invalid BVN provided</Text>
                    </View>
                )}
                {verificationStatus === "success" && (
                    <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/images/Check.png')} style={{ width: 15, height: 15 }}/>

                        <Text style={{ color: "#009262", fontStyle: 'italic' }}> BVN verified successfully</Text>
                    </View>
                )}
            </View>
            
            {/* Button */}
            <TouchableOpacity
                onPress={() => router.push("/(routes)/kyc/sucess")}
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
            {isMonth && (
                <MonthModal
                    isMonth={isMonth}
                    onSelectMonth={setMonth}
                    toggleMod={toggleModals}
                />
            )}
        </SafeAreaView>
    );
}

export default BvnVerification;


const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontFamily: 'Proxima Nova',
    fontWeight: '400',
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingRight: 60,
        borderWidth: 2,
        borderColor: "#E9E9E9",
        borderRadius: 4,
        color: "gray",
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        flex: 1,
        backgroundColor: "white"
    },
    dropDown: {
        fontSize: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: "#E9E9E9",
        borderRadius: 4,
        color: "black",
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        backgroundColor: "white"
    }
  });