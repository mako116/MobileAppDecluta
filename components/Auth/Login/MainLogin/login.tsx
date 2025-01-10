import { View, Text, ScrollView, Image,  TouchableOpacity, ActivityIndicator, TextInput, Alert, BackHandler, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { AntDesign, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
 import { useFocusEffect } from '@react-navigation/native';


import {SignUpStyles} from '../../../../styles/Signup/signup.style'
import { useAuth } from '@/context/AuthContext';
import GoolgSignUp from '../../Signup/GoogleSignup/GoogleSignUpComponent';
import Closecross from '@/assets/svg/closecross';
import CloseError from '@/assets/images/Error';

export default function Login() {
  const [userEmail, setUserEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [focusInput, setFocusInput] = useState({ email: false, password: false });
  const [showExitModal, setShowExitModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const { login, setEmail } = useAuth(); // Destructure onLogin from useAuth


  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        setShowExitModal(true);
        return true;
      };

      const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

      return () => backHandler.remove();
    }, [])
  );

  const validateInputs = () => {
    let errors = { email: "", password: "" };
    let isValid = true;

    if (!userInfo.email) {
      errors.email = "The email you entered doesn’t exist. Please check and try again.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      errors.email = "The email you entered doesn’t exist. Please check and try again.";
      isValid = false;
    }

    if (!userInfo.password) {
      errors.password = "The password you entered is incorrect please try again or reset password.";
      isValid = false;
    } else if (userInfo.password.length < 6) {
      errors.password = "The password you entered is incorrect please try again or reset password.";
      isValid = false;
    }

    setErrorMessage(errors);
    return isValid;
  };

  const handleSignIn = async () => {
    if (!validateInputs()) return;
    setEmail(userEmail)
    try {
      await login(userEmail, password);
    } catch (err) {
      Alert.alert('Login Failed');
      setSuccessMessage("Login failed!");
    } finally {
      setButtonSpinner(true);
      setTimeout(() => {
        setButtonSpinner(false);
        setErrorMessage({ email: "", password: "" });
        setSuccessMessage("Login successful! Redirecting...");
        // setTimeout(() => {
        //   setSuccessMessage("");
        //   router.push("/(routes)/splashscren"); // Navigate to the dashboard or home
        // }, 2000);
      }, 1000);
    }

    
  };

  const handlePhonePush =()=>{
    router.push("/(routes)/PhoneLogin");
  }
  const handleExit = () => {
    setShowExitModal(false);
    router.back();
  };

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    // Set showMore to true when the image is clicked
    setShowMore(prevState => !prevState);
  };

  return (
    <View style={{ flex: 1 , backgroundColor: "#F9F9F9"}} >
      <View style={SignUpStyles.header}>
        <Image source={require("../../../../assets/images/newimages/9 1.png")} style={SignUpStyles.sigInImage} />
        <Text style={SignUpStyles.welcomeText}>Log in with email</Text>
      </View>
      <ScrollView scrollEventThrottle={16}>

      
      <View style={SignUpStyles.inputContainer}>
        <View>
          <Text style={[SignUpStyles.label,{marginLeft: 20}]}>Email</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}>
            <TextInput
              style={[
                SignUpStyles.input,
                focusInput.email && { borderColor: "#DEBC8E" },
                { paddingHorizontal: 40 },
              ]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="Enter email"
              placeholderTextColor='gray'
              onFocus={() => setFocusInput({ ...focusInput, email: true })}
              onBlur={() => setFocusInput({ ...focusInput, email: false })}
              onChangeText={(value) => {
                setUserInfo({ ...userInfo, email: value });
                setUserEmail(value); // Update `userEmail` in sync
              }}
            />
          </View>
          {errorMessage.email && (
           <View style={{flexDirection:"row",gap:5, marginHorizontal:14, alignItems:"center"}}>
             <CloseError/>
            <Text style={{ color: "red", fontSize: 12, marginTop: 5 , marginHorizontal:1 }}>{errorMessage.email}</Text>

           </View>          
          )}
        </View>

        <View style={{ marginTop: 5 }}>
          <Text style={[SignUpStyles.label,{marginLeft: 20}]}>Password</Text>
          <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyle]}  >
            <TextInput
              style={[
                SignUpStyles.input,
                focusInput.password && { borderColor: "#DEBC8E" },
              ]}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              placeholder="Enter password"
              placeholderTextColor='gray'
              value={userInfo.password}
              onFocus={() => setFocusInput({ ...focusInput, password: true })}
              onBlur={() => setFocusInput({ ...focusInput, password: false })}
              onChangeText={(value) => {setUserInfo({ ...userInfo, password: value });
              setPassword(value); // Update `userEmail` in sync

              }}
            />
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#747474" />
            </TouchableOpacity>
          </View>
          {errorMessage.password && (
            <View style={{flexDirection:"row",gap:5, marginHorizontal:14, alignItems:"center"}}>
             <CloseError/>
            <Text style={{ color: "red", fontSize: 12, marginTop: 5 ,marginHorizontal:1  }}>{errorMessage.password}</Text>

           </View>          
          )}
        </View>
        {successMessage && (
          <Text style={{ color: "green", fontSize: 14, marginTop: 10, textAlign: "center" }}>{successMessage}</Text>
        )}
        <TouchableOpacity onPress={() => router.push("/(routes)/forgot-password")}>
          <Text style={SignUpStyles.forgotSection}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SignUpStyles.loginButton} onPress={handleSignIn}>
          {buttonSpinner ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={SignUpStyles.loginText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={SignUpStyles.signUpRedirect}>
          <Text style={SignUpStyles.signUpText}>New to DecluttaKing?</Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/emailRegister")}>
            <Text style={SignUpStyles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={SignUpStyles.separatorContainer}>
          <View style={SignUpStyles.separator} />
          <Text style={SignUpStyles.separatorText}>OR</Text>
          <View style={SignUpStyles.separator} />
        </View>

        <View style={SignUpStyles.socialButtons}>
      <TouchableOpacity onPress={handlePhonePush} style={SignUpStyles.socialButton}>
        <MaterialIcons name="phone-android" size={26} color="black" />
        <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Phone</Text>
      </TouchableOpacity>
      
      <GoolgSignUp />

      {/* Conditionally render the other buttons */}
      {showMore && (
        <>
          <TouchableOpacity style={SignUpStyles.socialButton}>
            <AntDesign name="apple1" size={26} color="black" />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Apple</Text>
          </TouchableOpacity>

           
        </>
      )}

      {/* Arrow icon to toggle showing more buttons */}
      <View style={{ margin: "auto", paddingVertical: 14 }}>
          {!showMore && (
        <TouchableOpacity onPress={handleShowMore}>
          <Image
            style={{ height: 24, width: 24, resizeMode: "contain" }}
            source={require("../../../../assets/images/newimages/Down 2.png")} // Image path
          />
        </TouchableOpacity>
      )}


       </View>
    </View>
      <View style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", margin: "auto", gap: 10 }}>
        <TouchableOpacity onPress={() => router.push("/(routes)/Terms")}>
          <Text
           style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>
            Terms of use
            </Text>
            </TouchableOpacity>
          <View style={SignUpStyles.separator2} />
          <TouchableOpacity onPress={() => router.push("/(routes)/privacyPolicy")}>
          <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
       {/* Custom Exit Modal */}
       <Modal
        transparent={true}
        visible={showExitModal}
        animationType="slide"
        onRequestClose={() => setShowExitModal(false)}
      >
        <View style={SignUpStyles.modalContainer}>
          <View style={SignUpStyles.modalContent}>
             <Text style={SignUpStyles.modalMessage}>Enjoy these exclusive features after logging in! Are you sure you want to leave now?</Text>
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
            <View style={SignUpStyles.modalButtons}>
              <TouchableOpacity
                style={[SignUpStyles.modalButton, SignUpStyles.continueButton]}
                onPress={() => setShowExitModal(false)}
              >
                 <Text style={SignUpStyles.buttonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[SignUpStyles.modalButton, SignUpStyles.confirmButton]}
                onPress={handleExit}
              >
                 <Text style={SignUpStyles.buttonText}>Leave</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}
