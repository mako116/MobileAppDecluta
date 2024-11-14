import { SignUpStyles } from '@/styles/Signup/signup.style';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function CreatePassword() {
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

  const handlePasswordChange = (text) => {
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
      Alert.alert('Error', 'Password does not meet the required criteria or passwords do not match');
      return;
    }
    // Continue with account creation
  };

  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.signs}>
          <Image source={require("@/assets/images/Group 2.png")} style={{ justifyContent: "center", margin: "auto" }} />
        </View>
        <View style={styles.section}>
          <Text style={{ color: "#212121", fontWeight: "700", fontSize: 23, lineHeight: 32.2 }}>Create Password</Text>
        </View>
        
        <View style={styles.container}>
          <Text style={{ marginVertical: 5 }}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter password"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          
          <Text style={{ marginVertical: 5 }}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <View style={styles.requirementsContainer}>
            <RequirementItem label="At least 8 characters" isValid={requirements.length} />
            <RequirementItem label="At least 1 lowercase letter (a-z)" isValid={requirements.lowercase} />
            <RequirementItem label="At least 1 uppercase letter (A-Z)" isValid={requirements.uppercase} />
            <RequirementItem label="At least 1 numeric character (0-9)" isValid={requirements.number} />
            <RequirementItem label="At least 1 special character (!@#$%^&*-_+)" isValid={requirements.specialChar} />
          </View>

          <TouchableOpacity
            style={[styles.createAccountButton, !allRequirementsMet && styles.disabledButton]}
            onPress={handleCreateAccount}
            disabled={!allRequirementsMet}
          >
            <Text style={[styles.buttonText,!allRequirementsMet && styles.disabledButton]}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function RequirementItem({ label, isValid }) {
  return (
    <View style={styles.requirementItem}>
      <Feather name={isValid ? "check-square" : "square"} size={20} color={isValid ? "#DEBC8E" : "gray"} />
      <Text style={{ color: isValid ? "#212121" : "gray", marginLeft: 8 }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  signs: {
    paddingHorizontal: 12,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    marginHorizontal: 16,
  },
  phoneInput: {
    height: 55,
    borderRadius: 3,
    borderLeftWidth: 1,
    borderColor: "#E9E9E9",
    paddingLeft: 15,
    fontSize: 14,
    backgroundColor: "white",
    color: "#a1a1a1",
  },
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 55,
    borderRadius: 3,
    // borderWidth: 1,
    borderColor: "#E9E9E9",
    paddingLeft: 15,
    fontSize: 14,
    marginTop: 8,
    backgroundColor: "white",
    color: "#212121",
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 3,
    paddingRight: 10,
    marginTop: 8,
    backgroundColor: "white",
  },
  requirementsContainer: {
    marginVertical: 10,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  createAccountButton: {
    marginTop: 20,
    backgroundColor: "#DEBC8E",
    paddingVertical: 15,
    color:"#212121",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#212121",
    fontSize: 16,
    fontWeight: "700",
  },
  section: {
    paddingTop: 13,
    paddingHorizontal: 13,
  },
  disabledButton: {
    backgroundColor: "#E9E9E9",
    color:"#A4A4A4"
  },
});
