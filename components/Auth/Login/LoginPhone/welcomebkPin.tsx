import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { SignUpStyles } from "@/styles/Signup/signup.style";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import welcomePin from "@/styles/welcomebackpin/welcomeback.styles";
import { loginUserWithPin, logoutUser } from "@/redux/Redux/slice/authSlice";
import { useAppDispatch } from "@/redux/Redux/hook/hook";

export default function WelcomeBkPin() {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isModalVisible, setModalVisible] = useState(false); 
  const dispatch = useAppDispatch();

  // Function to show the modal when fingerprint button is pressed
  const handleFingerprint = () => {
    setModalVisible(true); // Show the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalVisible(false); // Hide the modal
  };

  // Validate the PIN only when all 4 digits are entered
  const validatePin = async (updatedPin: string[]) => {
    // Only proceed if all PIN digits are filled
    if (updatedPin.some(digit => digit === "")) {
      return; // Don't attempt login with incomplete PIN
    }

    const enteredPin = updatedPin.join("");
    try {
      // Dispatch loginUser action with proper payload structure
      const resultAction = await dispatch(loginUserWithPin({ 
        pin: enteredPin
      }));
      
      if (loginUserWithPin.fulfilled.match(resultAction)) {
        setSuccessMessage("Login successful!");
        
        // Navigate to home screen after successful login
        setTimeout(() => {
          router.push("/(tabs)/home");
        }, 500);
      } else {
        if (resultAction.payload) {
          Alert.alert('Login Failed', resultAction.payload as string);
        } else {
          Alert.alert('Login Failed', 'Please check your credentials and try again');
        }

        // Clear PIN on failed login
        setPin(["", "", "", ""]);
      }
    } catch (err) {
      Alert.alert('Login Failed', 'An unexpected error occurred');
      // Clear PIN on error
      setPin(["", "", "", ""]);
    }
  };

  // Handle input changes for PIN code
  const handlePinChange = (text: string, index: number) => {
    if (index === -1) return; // No empty position found
    
    const updatedPin = [...pin];
    updatedPin[index] = text;
    setPin(updatedPin);
    
    // Move focus to the next input after entering a digit
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Only validate when the PIN is complete (all 4 digits entered)
    if (!updatedPin.includes("")) {
      validatePin(updatedPin);
    }
  };

  // Handle delete action for the PIN code, starting from right to left
  const handlePinDelete = () => {
    const updatedPin = [...pin];
    for (let i = pin.length - 1; i >= 0; i--) {
      if (updatedPin[i] !== "") {
        updatedPin[i] = ""; // Remove the value at the rightmost non-empty index
        
        // Set focus to the cleared position if it's not the first position
        if (i > 0) {
          inputRefs.current[i]?.focus();
        }
        break;
      }
    }
    setPin(updatedPin);
  };

  // Handle logout action - clear token and navigate to login screen
  const handleLogout = async () => {
    try {
      // Dispatch logout action to clear authentication token
      await dispatch(logoutUser());
      
      // Navigate to login screen
      router.replace("/login");
    } catch (error) {
      Alert.alert('Logout Failed', 'An error occurred while logging out.');
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={welcomePin.container}>
        <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
          <View style={SignUpStyles.headers}>
            <Image
              source={require("@/assets/images/king.png")}
              style={SignUpStyles.sigInImage}
            />
            <Text
              style={[
                SignUpStyles.welcomeText,
                { fontSize: 23, lineHeight: 32.2, paddingTop: 30, color: "#212121" },
              ]}
            >
              Welcome back, 
            </Text>

            {/* Pin Code Input */}
            <View style={welcomePin.pinContainer}>
              <Text style={[welcomePin.pinText, { textAlign: "center" }]}>
                Enter your Pin
              </Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FlatList
                  horizontal
                  data={pin}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TextInput
                      ref={(el) => (inputRefs.current[index] = el)}
                      style={[
                        welcomePin.input,
                        item ? welcomePin.inputFilled : null,
                        {
                          paddingVertical: 17,
                          paddingHorizontal: 21,
                          marginHorizontal: 10,
                          backgroundColor: "#fff",
                        },
                      ]}
                      value={item}
                      editable={false} // Prevent the keyboard from showing up
                      keyboardType="number-pad"
                      maxLength={1}
                    />
                  )}
                />
              </View>

              {/* Number Pad */}
              <View style={welcomePin.calculatorContainer}>
                <View style={welcomePin.calculatorRow}>
                  {[1, 2, 3].map((num) => (
                    <TouchableOpacity
                      key={num}
                      style={welcomePin.calculatorButton}
                      onPress={() => handlePinChange(num.toString(), pin.indexOf(""))}
                    >
                      <Text style={welcomePin.buttonText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={welcomePin.calculatorRow}>
                  {[4, 5, 6].map((num) => (
                    <TouchableOpacity
                      key={num}
                      style={welcomePin.calculatorButton}
                      onPress={() => handlePinChange(num.toString(), pin.indexOf(""))}
                    >
                      <Text style={welcomePin.buttonText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={welcomePin.calculatorRow}>
                  {[7, 8, 9].map((num) => (
                    <TouchableOpacity
                      key={num}
                      style={welcomePin.calculatorButton}
                      onPress={() => handlePinChange(num.toString(), pin.indexOf(""))}
                    >
                      <Text style={welcomePin.buttonText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={welcomePin.calculatorRow}>
                  <TouchableOpacity
                    onPress={handleFingerprint}
                    style={welcomePin.calculatorButton}
                  >
                    <Text style={welcomePin.buttonText}>
                      <Ionicons name="finger-print" size={24} color="black" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={welcomePin.calculatorButton}
                    onPress={() => handlePinChange("0", pin.indexOf(""))}
                  >
                    <Text style={welcomePin.buttonText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={welcomePin.calculatorButton}
                    onPress={handlePinDelete}
                  >
                    <Text style={welcomePin.buttonText}>
                      <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color="#E42527"
                      />
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
              <View style={welcomePin.modalBackground}>
                <View style={welcomePin.modalContainer}>
                  <Image
                    source={require("@/assets/images/fingerptrint1.png")}
                  />
                  <Text style={welcomePin.modalTitle}>
                    Error! Biometrics Disabled
                  </Text>
                  <Text style={welcomePin.modalMessage}>
                    Biometric is disabled at the moment. Please log in using
                    passcode. You can enable biometrics in your account settings
                    after logging in.
                  </Text>
                  <TouchableOpacity
                    style={welcomePin.modalButton}
                    onPress={handleCloseModal}
                  >
                    <Text style={welcomePin.modalButtonText}>Okay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
              <Text style={welcomePin.pinText}>Not your account?</Text>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={welcomePin.logout}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}