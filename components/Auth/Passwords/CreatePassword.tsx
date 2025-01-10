import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Creating } from '@/styles/createPassword/CreatePassword'; // Ensure this path is correct
import Passwordheadsign from '@/assets/svg/passwordheadsign';

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
          fontFamily: "Proxima Nova",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function CreatePassword(): JSX.Element {
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

  const allRequirementsMet =
    Object.values(requirements).every(Boolean) && password === confirmPassword;

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

  const handleCreateAccount = () => {
    if (!allRequirementsMet) {
      Alert.alert(
        'Error',
        'Password does not meet the required criteria or passwords do not match'
      );
      return;
    }
    router.push('/(routes)/Profile-created');
  };

  const navigateToTerms = () => router.push('/(routes)/Terms');
  const navigateToPrivacyPolicy = () => router.push('/(routes)/privacyPolicy');

  return (
    <SafeAreaView style={{height:"100%", flexDirection:"column", justifyContent:"space-between", paddingBottom:20}}>
      <View>
       <View style={Creating.signs}>
          <Passwordheadsign />
        </View>
        <ScrollView scrollEventThrottle={16}>
        <View style={Creating.section}>
          <Text
            style={{
              color: '#212121',
              fontWeight: '700',
              fontSize: 23,
              lineHeight: 32.2,
              fontFamily: "Helvetica Neue",
            }}
          >
            Create Password
          </Text>
        </View>

        <View style={Creating.container}>
          <Text style={{ marginVertical: 5, marginLeft: 2, fontFamily: "Proxima Nova" }}>
            Enter Password
          </Text>
          <View
            style={[
              Creating.passwordContainer,
              password ? Creating.focusBorder : undefined,
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

          <Text style={{ marginTop: 15, marginLeft: 2, fontFamily: "Proxima Nova" }}>
            Confirm Password
          </Text>
          <View
            style={[
              Creating.passwordContainer,
              confirmPassword ? Creating.focusBorder : undefined,
            ]}
          >
            <TextInput
              style={Creating.input}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
              fontFamily: "Helvetica Neue",
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

         
        </View>
      </ScrollView>
       </View>
       <View style={{paddingHorizontal:16}}>
            <TouchableOpacity
              style={[
                Creating.createAccountButton,
                (!allRequirementsMet || buttonSpinner) && Creating.disabledButton,
              ]}
              onPress={() => {
                setButtonSpinner(true);
                setTimeout(() => {
                  try {
                    handleCreateAccount();
                  } catch (error) {
                  } finally {
                    setButtonSpinner(false);
                  }
                }, 1000);
              }}
              disabled={!allRequirementsMet || buttonSpinner}
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

            <View style={Creating.footerTextContainer}>
            <Text style={Creating.footerText}>
              By clicking create profile, you accept our
            </Text>
            <TouchableOpacity onPress={navigateToTerms}>
              <Text style={Creating.linkText}> Terms of Use</Text>
            </TouchableOpacity>
            <Text style={Creating.footerText}> and </Text>
            <TouchableOpacity onPress={navigateToPrivacyPolicy}>
              <Text style={Creating.linkTexts}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
      </View>

         
     </SafeAreaView>
  );
}
