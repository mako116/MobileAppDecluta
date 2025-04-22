import { View, Text, ScrollView, Image,  TouchableOpacity, ActivityIndicator, Alert, BackHandler, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import {SignUpStyles} from '../../../../styles/Signup/signup.style'
import GoolgSignUp from '../../Signup/GoogleSignup/GoogleSignUpComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputField from '@/UI/InputFields/TextInputField';
import TermsAndPolicyComponent from '@/components/TermsAndPolicy/TermsAndPolicy';
import SignUpWithPhone from '../../Signup/PhoneNumberSignUp/SignUpWithPhone';
import LoginPhoneButton from '../PhoneNumberLoginButton/LoginPhoneButton';
import Crossbad from '@/assets/svg/crossbad';
// import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const [password, setPassword] = useState<string>('');
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [showExitModal, setShowExitModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" })
  const [successMessage, setSuccessMessage] = useState("");
  // const { loginUser } = useAuth();
  const [email, setEmail] = useState<string>('');

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
  
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        console.log('Stored email:', storedEmail);
        if (storedEmail) {
          setEmail(storedEmail); // Set email to the state
        }
      } catch (error) {
        console.error('Error fetching email from AsyncStorage:', error);
      }
    };

    fetchEmail();
  }, []);

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

    // setErrorMessage(errors);
    return isValid;
  };

  const handleSignIn = async () => {
    try {
      setButtonSpinner(true);
      let errors = { email: "", password: "" };
      let hasError = false;
  
      if (!email) {
        errors.email = "The email you entered doesn’t exist. Please check and try again.";
        hasError = true;
      }  
  
      if (!password) {
        errors.password = "The password you entered is incorrect. Please try again or reset password.";
        hasError = true;
      }
  
      if (hasError) {
        setErrorMessage(errors);
        setButtonSpinner(false);
        return;
      }
  
      // Proceed with login
      setErrorMessage({ email: "", password: "" }); // Clear any previous errors
      console.log("login details", email, password);
      router.push("/(tabs)/home");
      // await loginUser({ email, password });
  
    } catch (err) {
      Alert.alert('Login Failed');
      setSuccessMessage("Login failed!");
    } finally {
      setButtonSpinner(false);
    }
  };
  
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
          <View style={{ marginHorizontal: 16 }} >
            <Text style={[SignUpStyles.label,]}>Email</Text>
            <TextInputField
              placeholder="Enter email"
              value={email}
              error={errorMessage.email}
              onChangeText={(value) => setEmail(value.toLowerCase())}
              placeholderTextColor='gray'
            />
            
          </View>

          <View style={{ marginTop: 5, marginHorizontal: 16 }}>
            <Text style={[SignUpStyles.label]}>Password</Text>
            <TextInputField
              placeholder="Enter password" 
              value={userInfo.password}
              onChangeText={(value) => {setUserInfo({ ...userInfo, password: value });
              setPassword(value);}}
              keyboardType="default"
              maxLength={11}
              error={errorMessage.password}
              secureTextEntry={true}
              icon={<AntDesign name="lock" size={20} color="gray" />}
            />
            
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
              <LoginPhoneButton />
              <GoolgSignUp />

            {/* Conditionally render the other buttons */}
            {showMore && (
              <>
                <TouchableOpacity style={SignUpStyles.socialButton}>
                  <AntDesign name="apple1" size={22} color="black" />
                  <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 16, fontWeight: '400' , fontFamily:"ProximaNova"}}>Continue with Apple</Text>
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
      <TermsAndPolicyComponent />

    </View>
  );
}
