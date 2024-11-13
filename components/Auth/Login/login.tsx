import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Alert, BackHandler, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { Entypo, FontAwesome, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { commonstyles } from '@/styles/common/common.style';

export default function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [required, setRequired] = useState("");
  // const [error, setError] = useState({ password: "" });
  const [focusInput, setFocusInput] = useState({ email: false, password: false });
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const backAction = () => {
      setShowExitModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleExit = () => {
    setShowExitModal(false);
    router.back();
  };
  const handleSignIn = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      setButtonSpinner(false);
      // Navigate to the dashboard or home after successful login
    }, 1000);
  };

  return (
    <ScrollView style={{ flex: 1 }} scrollEventThrottle={16}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/king.png")} style={styles.sigInImage} />
        <Text style={styles.welcomeText}>Log in with email</Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[
              styles.input,
              focusInput.email && { borderColor: "#DEBC8E" },
              { paddingHorizontal: 40 }
            ]}
            keyboardType="email-address"
            value={userInfo.email}
            placeholder="Enter email"
            onFocus={() => setFocusInput({ ...focusInput, email: true })}
            onBlur={() => setFocusInput({ ...focusInput, email: false })}
            onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
          />
          {required && (
            <View style={commonstyles.errorContainer}>
              <Entypo name="cross" size={18} color="red" />
            </View>
          )}
        </View>

        <View style={{ marginTop: 5 }}>
          <Text style={styles.label}>Password</Text>
          <View>
            <TextInput
              style={[
                styles.input,
                focusInput.password && { borderColor: "#DEBC8E" }
              ]}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              placeholder="******"
              onFocus={() => setFocusInput({ ...focusInput, password: true })}
              onBlur={() => setFocusInput({ ...focusInput, password: false })}
              // onChangeText={handlePasswordValidation}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#747474" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/(routes)/forgot-password")}>
          <Text style={styles.forgotSection}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.signUpRedirect}>
          <Text style={styles.signUpText}>New to DecluttaKing?</Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/sign-up")}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="phone-android" size={24} color="black" />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={require("@/assets/images/google.png")} />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' }}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: "auto", paddingVertical: 14 }}>
          <SimpleLineIcons name="arrow-down" size={22} color="#A4A4A4" />
        </View>

        <View style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", margin: "auto", gap: 5 }}>
          <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 }}>Terms of use</Text>
          <View style={styles.separator2} />
          <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 }}>Privacy Policy</Text>
        </View>
      </View>

       {/* Custom Exit Modal */}
       <Modal
        transparent={true}
        visible={showExitModal}
        animationType="slide"
        onRequestClose={() => setShowExitModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* <Ionicons name="alert-circle" size={50} color="#DEBC8E" /> */}
            {/* <Text style={styles.modalTitle}>Hold on!</Text> */}
            <Text style={styles.modalMessage}>Enjoy these exclusive features after logging in! Are you sure you want to leave now?</Text>
            <View style={{flexDirection:"row",gap:40}}>
              <View style={{alignItems:"center",paddingVertical:5,gap:2}}>
              <Image source={require("@/assets/images/lockback2.png")}  />
              <Text style={{fontSize:13,lineHeight:18.2, fontWeight:"700", textAlign:"center"}}>Cheapest items</Text>
              <Text style={{fontSize:14,lineHeight:19.6, fontWeight:"400", textAlign:"center"}}>Selected for you </Text>
              </View>

              <View style={{alignItems:"center",paddingVertical:5,gap:2}}>
              <Image source={require("@/assets/images/lockback.png")}  />
              <Text style={{fontSize:13,lineHeight:18.2, fontWeight:"700", textAlign:"center"}}>Cheapest items</Text>
              <Text style={{fontSize:14,lineHeight:19.6, fontWeight:"400", textAlign:"center"}}>To protect you </Text>
              </View>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.continueButton]}
                onPress={() => setShowExitModal(false)}
              >
                 <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleExit}
              >
                 <Text style={styles.buttonText}>Leave</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 20,
  },
  sigInImage: {
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
  },
  welcomeText: {
    fontWeight: "700",
    lineHeight: 22.4,
    textAlign: "center",
    fontSize: 16,
    color: "#212121",
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    gap: 10,
  },
  label: {
    marginLeft: 18,
    marginBottom: 5,
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    paddingLeft: 15,
    fontSize: 14,
    backgroundColor: "white",
    color: "#a1a1a1",
  },
  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 15,
  },
  forgotSection: {
    color: "#7E7E7E",
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 14,
    lineHeight: 19.6,
  },
  loginButton: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#DEBC8E",
    marginTop: 5,
  },
  loginText: {
    color: "#000",
    textAlign: "center",
  },
  signUpRedirect: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingVertical: 14,
  },
  signUpText: {
    color: "#7E7E7E",
  },
  signUpLink: {
    color: "#DEBC8E",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  separatorText: {
    width: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#7E7E7E",
    fontWeight: "600",
    lineHeight: 19.6,
  },
  socialButtons: {
    gap: 15,
    marginHorizontal: 16,
    marginVertical: 15,
  },
  socialButton: {
    flexDirection: "row",
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    gap: 20,
  },
  separator2: {
    height: "100%",
    width: 2,
    backgroundColor: "#D3D3D3",
  },

   // Modal styles
   modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    width: "85%",
    padding: 10,
    // paddingVertical:10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DEBC8E",
    marginVertical: 10
  },
  modalMessage: {
    fontSize: 14,
    color: "#333",
    fontWeight:'400',
    lineHeight:19.6,
    textAlign: "center",
    marginBottom: 20
  },
  modalButtons: {
    flexDirection: "column",
    padding:20,
     justifyContent: "center",
    width: "100%",
    gap:10,
    marginTop: 10
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",  // Center horizontally
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  continueButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#DEBC8E",
   
  },
  confirmButton: {
    textAlign:"center",
    alignItems:"center",
    // margin:"auto",
    backgroundColor: "#fff",
    borderWidth:1,
        
  },
  buttonText: {
    color: "#000",
    fontWeight:"400",
    lineHeight:22.4,
    fontSize: 16,
    textAlign: "center"  // Center text within the Text component
  }
});
