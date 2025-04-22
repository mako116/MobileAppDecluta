import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { commonstyles } from '@/styles/common/common.style';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInputField from '@/UI/InputFields/TextInputField';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '@/redux/Redux/slice/authSlice';
import { AppDispatch, RootState } from '@/redux/store'; // Adjust path if needed

export default function ForgotPassword() {
    const [userInfo, setUserInfo] = useState({ email: "" });
    const [required, setRequired] = useState("");
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleGoBack = () => {
        router.back();
    };
    
    const handleHelp = () => {
        router.push("/(routes)/need-help");
    };

    const handleSubmit = async () => {
        if (!userInfo.email) {
            setRequired("Email is required");
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userInfo.email)) {
            setRequired("Please enter a valid email address");
            return;
        }
        
        setButtonSpinner(true);
        try {
            await dispatch(forgotPassword(userInfo.email)).unwrap();
            // Navigation is handled within the forgotPassword thunk
        } catch (err) {
            setRequired(err as string || "Failed to process request");
        } finally {
            setButtonSpinner(false);
        }
    };

    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
            <View style={{ flex: 1 }}>
                <View style={[styles.rowJustified, { backgroundColor: "#fff" }]}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Image source={require("../../../../assets/images/leftArrow.png")} style={{ height: 20, width: 30 }} />
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <View style={[styles.row, styles.passedStageIcon]}>
                            <Entypo name="check" size={8} color="white" />
                        </View>
                        <View style={styles.divider}></View>
                        <View style={[styles.row, styles.currentStageIcon]}>
                            <Entypo name="check" size={8} color="white" />
                        </View>
                    </View>

                    {/* leave empty */}
                    <View style={{ marginLeft: 30 }}></View>
                </View>

                <View style={{ paddingHorizontal: 13 }}>
                    <Text style={[SignUpStyles.label, { fontWeight: "700", fontSize: 19, lineHeight: 26.6, marginTop: 20 }]}>Forgot password</Text>
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <Text style={SignUpStyles.label}>Email Address</Text>
                        <TextInputField
                            placeholder="Enter your email address"
                            value={userInfo.email}
                            onChangeText={(value) => {
                                setUserInfo({ ...userInfo, email: value });
                                if (required) setRequired("");  // Clear error if user starts typing
                            }}
                            keyboardType="email-address"
                            placeholderTextColor='gray'
                        />
                        {required && (
                            <View style={commonstyles.errorContainer}>
                                <Text style={commonstyles.errorText}>{required}</Text>
                            </View>
                        )}
                    </View>
                </View>

                <TouchableOpacity 
                    style={SignUpStyles.loginButton} 
                    onPress={handleSubmit}
                    disabled={buttonSpinner}
                >
                    {buttonSpinner ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={SignUpStyles.loginText}>Submit</Text>
                    )}
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "100%" }}>
                <MaterialCommunityIcons name="message-question" size={24} color="#DEBC8E" />
                <Text>Need help?</Text>
                <TouchableOpacity onPress={handleHelp}>
                    <Text style={{ color: "#DEBC8E" }}> Click Here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    row: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    rowJustified: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingTop: 65,
        paddingBottom: 20,
    },
    divider: {
        width: 70,
        height: 1,
        backgroundColor: "black",
        marginHorizontal: 7
    },
    currentStageIcon: {
        padding: 4,
        borderRadius: 20,
        backgroundColor: "#DEBC8E"
    },
    passedStageIcon: {
        padding: 4,
        borderRadius: 20,
        backgroundColor: "black"
    }
});