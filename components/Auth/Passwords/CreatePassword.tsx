import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Creating } from '@/styles/createPassword/CreatePassword'; // Ensure this path is correct
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { useAuth } from '@/context/AuthContext';

interface RequirementProps {
  label: string;
  isValid: boolean;
}

function RequirementItem({ label, isValid }: RequirementProps) {
  return (
    <View style={Creating.requirementItem}>
      <Ionicons
        name={isValid ? 'checkmark-circle-sharp' : 'square-outline'}
        size={18}
        color={isValid ? '#DEBC8E' : 'gray'}
        
      />
      <Text
        style={{
          color: isValid ? '#212121' : 'gray',
          marginLeft: 8,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 19.6,
          width: 230,
          alignItems: 'center',
          fontFamily:"ProximaNovaR",
        }}
      >
        {label}
      </Text>
    </View>
  );
}
 

export default function CreatePassword(): JSX.Element {
  const { addPassword } = useAuth(); // Destructure onLogin from useAuth
  
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [requirements, setRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const allRequirementsMet = Object.values(requirements).every(Boolean) && password === confirmPassword;

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setRequirements({
      length: text.length >= 8,
      lowercase: /[a-z]/.test(text),
      uppercase: /[A-Z]/.test(text),
      number: /[0-9]/.test(text),
      specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(text),
    });
  };
  const handleSetPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setRequirements({
      length: text.length >= 8,
      lowercase: /[a-z]/.test(text),
      uppercase: /[A-Z]/.test(text),
      number: /[0-9]/.test(text),
      specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(text),
    });
  };

  const handleCreatePassword = async () => {
    if (!allRequirementsMet) {
      Alert.alert(
        'Error',
        'Password does not meet the required criteria or passwords do not match',
      );
      await addPassword( password, confirmPassword )
      return;
    }
    try {
      setButtonSpinner(true);
      
      router.push('/(routes)/Profile-created');

    } catch (error) {
      setButtonSpinner(false);

    } finally {
      setButtonSpinner(false);
    }
  };

  const navigateToTerms = () => router.push('/(routes)/Terms');
  const navigateToPrivacyPolicy = () => router.push('/(routes)/privacyPolicy');

  return (
    <SafeAreaView edges={['bottom']}>
      <View 
      style={[
        SignUpStyles.signs, 
        {
          justifyContent: "center", 
          paddingTop: 80 
        }
      ]}>
        <View style= { SignUpStyles.row } >
          <View style = {[ SignUpStyles.row, SignUpStyles.passedStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style = { SignUpStyles.divider } ></View>
          <View style = {[ SignUpStyles.row, SignUpStyles.passedStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style = { SignUpStyles.divider } ></View>
          <View style = {[ SignUpStyles.row, SignUpStyles.passedStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
          <View style = { SignUpStyles.divider } ></View>
          <View style = {[ SignUpStyles.row, SignUpStyles.currentStageIcon ]} >
            <Entypo name="check" size={8} color="white" />
          </View>
        </View>
      </View>

      <View style={Creating.section}>
        <Text
          style={{
            color: '#212121',
            fontWeight: '700',
            fontSize: 23,
            lineHeight: 32.2,
            fontFamily:"Helvetica Neue"

          }}
        >
          Create Password
        </Text>
      </View>

      <View style={Creating.container}>
        <Text style={{ marginVertical: 5 ,marginLeft:2, fontFamily:"Proxima Nova"}}>Enter Password</Text>
        <View
          style={[
            Creating.passwordContainer,
            password ? Creating.focusBorder : undefined, // Avoid using an empty string
          ]}
        >
          <TextInput
            style={Creating.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 15 ,marginLeft:2, fontFamily:"Proxima Nova"}}>Confirm Password</Text>
        <View
          style={[
            Creating.passwordContainer,
            confirmPassword ? Creating.focusBorder : undefined, // Avoid using an empty string
          ]}
        >
          <TextInput
            style={Creating.input}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={handleSetPasswordChange}
            placeholder="Confirm password"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Feather
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 10,
            fontSize: 14,
            fontWeight: '700',
            lineHeight: 19.6,
            color: '#212121',
              fontFamily:"Helvetica Neue"
          }}
        >
          PASSWORD REQUIREMENTS
        </Text>

        <View style={Creating.requirementsContainer}>
          <RequirementItem
            label="8 characters including"
            isValid={requirements.length}
          />
          <RequirementItem
            label="1 lowercase letter (a-z) and"
            isValid={requirements.lowercase}
          />
          <RequirementItem
            label="1 uppercase letter (A-Z) and"
            isValid={requirements.uppercase}
          />
          <RequirementItem
            label="1 numeric character (0-9) and"
            isValid={requirements.number}
          />
          <RequirementItem
            label="1 special character, for example (!@#$%^&*-).+"
            isValid={requirements.specialChar}
          />
        </View>

        <View>
          <TouchableOpacity
            style={[
              Creating.createAccountButton,
              (!allRequirementsMet || buttonSpinner) && Creating.disabledButton,
            ]}
            onPress={() => {
              setButtonSpinner(true); // Start spinner
              setTimeout(() => {
                try {
                  handleCreatePassword(); // Attempt to create the account after delay
                } catch (error) {
                } finally {
                  setButtonSpinner(false); // Stop spinner after 2 seconds
                }
              }, 1000); // 2-second delay
            }}
            disabled={!allRequirementsMet || buttonSpinner} // Disable when processing
            >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text
                style={[
                  Creating.buttonText,
                  (!allRequirementsMet || buttonSpinner) && Creating.disabledButton,
                ]}
              >
                Create Account
              </Text>
            )}
          </TouchableOpacity>
        </View>
          
        <View style={Creating.footerTextContainer}>
          <Text style={Creating.footerText}>
            By clicking create profile, you accept our
          </Text>
          <TouchableOpacity onPress={navigateToTerms}>
            <Text style={Creating.linkText}> Terms of Use</Text>
          </TouchableOpacity>
          <Text style={Creating.footerText}> and </Text>
          <TouchableOpacity onPress={navigateToPrivacyPolicy}>
            <Text style={Creating.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
