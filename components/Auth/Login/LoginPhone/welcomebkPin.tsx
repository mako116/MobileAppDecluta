import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState, useRef } from 'react'
import { SignUpStyles } from '@/styles/Signup/signup.style'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function WelcomeBkPin() {
 
  const inputRefs = useRef<(TextInput | null)[]>([]); // Fixing the type of the ref
  const [pin, setPin] = useState(['', '', '', '']);
  const [isModalVisible, setModalVisible] = useState(false); // State to control the modal visibility

  // Function to show the modal when fingerprint button is pressed
  const handleFingerprint = () => {
      setModalVisible(true); // Show the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
      setModalVisible(false); // Hide the modal
  };
    // Handle input changes for PIN code
    const handlePinChange = (text: string, index: number) => {
        const updatedPin = [...pin];
        updatedPin[index] = text;
        setPin(updatedPin);

        // Move focus to the next input after entering a digit
        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus(); // Use optional chaining to avoid accessing undefined
        }
    };

    // Handle delete action for the PIN code, starting from right to left
    const handlePinDelete = () => {
        const updatedPin = [...pin];
        for (let i = pin.length - 1; i >= 0; i--) {
            if (updatedPin[i] !== '') {
                updatedPin[i] = ''; // Remove the value at the rightmost non-empty index
                break;
            }
        }
        setPin(updatedPin);
    };

 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
                <View style={SignUpStyles.header}>
                    <Image source={require("@/assets/images/king.png")} style={SignUpStyles.sigInImage} />
                    <Text style={[SignUpStyles.welcomeText,{fontSize:23,lineHeight:32.2,paddingTop:30, color:'#212121'}]}>Welcome back, Olabode</Text>

                    {/* Pin Code Input (FlatList version) */}
                    <View style={styles.pinContainer}>
                        <Text style={[styles.pinText,{textAlign:"center"}]}>Enter your Pin </Text>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <FlatList
                                horizontal
                                data={pin}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <TextInput
                                        ref={(el) => inputRefs.current[index] = el}
                                        style={[
                                            styles.input,
                                            item ? styles.inputFilled : null,
                                            { padding: 13, marginHorizontal: 10 } // Style when input has text
                                        ]}
                                        value={item}
                                        onChangeText={text => handlePinChange(text, index)}
                                        keyboardType="numeric"
                                        maxLength={1}
                                    />
                                )}
                            />
                        </View>

                        {/* Number Pad */}
                        <View style={styles.calculatorContainer}>
                            <View style={styles.calculatorRow}>
                                {[1, 2, 3].map((num) => (
                                    <TouchableOpacity
                                        key={num}
                                        style={styles.calculatorButton}
                                        onPress={() => handlePinChange(num.toString(), pin.indexOf(''))}
                                    >
                                        <Text style={styles.buttonText}>{num}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.calculatorRow}>
                                {[4, 5, 6].map((num) => (
                                    <TouchableOpacity
                                        key={num}
                                        style={styles.calculatorButton}
                                        onPress={() => handlePinChange(num.toString(), pin.indexOf(''))}
                                    >
                                        <Text style={styles.buttonText}>{num}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.calculatorRow}>
                                {[7, 8, 9].map((num) => (
                                    <TouchableOpacity
                                        key={num}
                                        style={styles.calculatorButton}
                                        onPress={() => handlePinChange(num.toString(), pin.indexOf(''))}
                                    >
                                        <Text style={styles.buttonText}>{num}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.calculatorRow}>
                                <TouchableOpacity onPress={handleFingerprint} style={styles.calculatorButton}>
                                    <Text style={styles.buttonText}>
                                        <Ionicons name="finger-print" size={24} color="black" />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.calculatorButton}
                                    onPress={() => handlePinChange('0', pin.indexOf(''))}
                                >
                                    <Text style={styles.buttonText}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.calculatorButton}
                                    onPress={handlePinDelete}
                                >
                                    <Text style={styles.buttonText}>
                                        <MaterialIcons name="keyboard-arrow-left" size={24} color="#E42527" />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                     {/* Modal for Error Message */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Error! Biometrics Disabled</Text>
                        <Text style={styles.modalMessage}>
                            Biometric is disabled at the moment. Please log in using passcode. You can enable biometrics in your account settings after logging in.
                        </Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
     },
    pinContainer: {
        marginVertical: 30,
        paddingHorizontal: 20,
    },
    pinText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
    },
    inputFilled: {
        borderColor: '#DEBC8E', // Highlight filled inputs
    },
    calculatorContainer: {
        marginTop: 20,
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    calculatorButton: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
    },
      // Modal styles
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
