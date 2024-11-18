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
  } from "react-native";
  import React, { useState, useRef } from "react";
  import { SignUpStyles } from "@/styles/Signup/signup.style";
  import { Ionicons, MaterialIcons } from "@expo/vector-icons";
  import { router } from "expo-router";
  import welcomePin from "@/styles/welcomebackpin/welcomeback.styles";
  
  export default function WelcomeBkPin() {
    const inputRefs = useRef<(TextInput | null)[]>([]); // Fixing the type of the ref
    const [pin, setPin] = useState(["", "", "", ""]);
    const [isModalVisible, setModalVisible] = useState(false); // State to control the modal visibility
  
    // Function to show the modal when fingerprint button is pressed
    const handleFingerprint = () => {
      setModalVisible(true); // Show the modal
    };
  
    // Function to close the modal
    const handleCloseModal = () => {
      setModalVisible(false); // Hide the modal
    };
  
    // Validate the PIN and navigate if correct
    const validatePin = (updatedPin: string[]) => {
      const enteredPin = updatedPin.join(""); // Combine PIN array into a string
      if (enteredPin === "1234") {
        router.push("/(tabs)/home"); // Navigate to the home page
      }
    };
  
    // Handle input changes for PIN code
    const handlePinChange = (text: string, index: number) => {
      const updatedPin = [...pin];
      updatedPin[index] = text;
      setPin(updatedPin);
      validatePin(updatedPin);
  
      // Move focus to the next input after entering a digit
      if (text && index < 3) {
        inputRefs.current[index + 1]?.focus(); // Use optional chaining to avoid accessing undefined
      }
    };
  
    // Handle delete action for the PIN code, starting from right to left
    const handlePinDelete = () => {
      const updatedPin = [...pin];
      for (let i = pin.length - 1; i >= 0; i--) {
        if (updatedPin[i] !== "") {
          updatedPin[i] = ""; // Remove the value at the rightmost non-empty index
          break;
        }
      }
      setPin(updatedPin);
    };
  
    return (
        <>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={welcomePin.container}>
        <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
          <View style={SignUpStyles.header}>
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
              Welcome back, Olabode
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
        { padding: 13, marginHorizontal: 10 },
      ]}
      value={item}
      editable={false} // Prevent the keyboard from showing up
      keyboardType="numeric"
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
                      onPress={() =>
                        handlePinChange(num.toString(), pin.indexOf(""))
                      }
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
                      onPress={() =>
                        handlePinChange(num.toString(), pin.indexOf(""))
                      }
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
                      onPress={() =>
                        handlePinChange(num.toString(), pin.indexOf(""))
                      }
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
                    onPress={() =>
                      handlePinChange("0", pin.indexOf(""))
                    }
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
                    // style={welcomePin.modalImage}
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
            <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
            <Text style={welcomePin.span}>Not your account?</Text>
            <TouchableOpacity>
                <Text style={welcomePin.logout}>Log Out</Text>
            </TouchableOpacity>
          </View>
          </View>
         
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }
  