import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { commonstyles } from '@/styles/common/common.style';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyEmail() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [timeLeft, setTimeLeft] = useState(59); // 59 seconds timer
    
    // Create refs for each input
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    // Timer countdown effect
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [timeLeft]);

    const handleGoBack = () => {
        router.back();
    };
    
    const handleHelp = () => {
        router.push("/(routes)/need-help");
    };

    const handleCodeInput = (text, index) => {
        // Only allow digits
        if (/^\d*$/.test(text)) {
    
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = text;
            setVerificationCode(newVerificationCode);
            
            // If a digit is entered and there's a next input, focus on it
            if (text.length === 1 && index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        // If backspace is pressed and the current input is empty, focus on the previous input
        if (e.nativeEvent.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleResendCode = () => {
        // Reset the timer when resending code
        setTimeLeft(59);
  
    };

    const handleVerify = () => {
        // Add your verification logic here
        setButtonSpinner(true);
        setTimeout(() => {
            setButtonSpinner(false);
 
        }, 1500);
    };

    const formatTime = (seconds) => {
        return `00:${seconds < 10 ? '0' + seconds : seconds}`;
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
                        <View style={styles.divider}></View>
                        <View style={[styles.row, styles.passedStageIcon]}>
                            <Entypo name="check" size={8} color="white" />
                        </View>
                    </View>

                    {/* leave empty */}
                    <View style={{ marginLeft: 30 }}></View>
                </View>

                <View style={{ paddingHorizontal: 23 }}>
                    <Text style={[SignUpStyles.label, { fontWeight: "700", fontSize: 19, lineHeight: 26.6, marginTop: 20 }]}>
                        Verify Your Email Address
                    </Text>
                    <Text style={{ marginTop: 10, color: "#212121" }}>
                        We sent a 4-digit code to matthew.c@gmail.com.
                    </Text>
                    <Text style={{ color: "#212121" }}>
                        Please enter it below to verify your account.
                    </Text>

                    {/* Verification code input boxes */}
                    <View style={styles.codeContainer}>
                        {verificationCode.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={inputRefs[index]}
                                style={styles.codeInput}
                                value={digit}
                                onChangeText={(text) => handleCodeInput(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                selectTextOnFocus
                            />
                        ))}
                    </View>

                    <View style={styles.timerContainer}>
                        <Text>Get a new code in {formatTime(timeLeft)}</Text>
                        {timeLeft === 0 && (
                            <TouchableOpacity onPress={handleResendCode}>
                                <Text style={styles.resendButton}>Resend</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <TouchableOpacity 
                    style={[
                        SignUpStyles.loginButton, 
                        !verificationCode.every(digit => digit !== '') && styles.disabledButton
                    ]} 
                    onPress={handleVerify}
                    disabled={!verificationCode.every(digit => digit !== '')}
                >
                    {buttonSpinner ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={SignUpStyles.loginText}>Verify</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.helpContainer}>
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
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 15,
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: 'white',
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    resendButton: {
        color: '#DEBC8E',
        marginLeft: 5,
        fontWeight: '600',
    },
    disabledButton: {
        opacity: 0.7,
    },
    helpContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        marginBottom: 30,
    }
});