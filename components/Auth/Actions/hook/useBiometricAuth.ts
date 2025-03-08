import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

const BIOMETRIC_STORAGE_KEY = "biometricEnabled";

export const enableBiometricAuth = async (): Promise<boolean> => {
    try {
      // Check if the device supports biometrics
      const isSupported = await LocalAuthentication.hasHardwareAsync();
      if (!isSupported) {
        Alert.alert("Error", "Biometric authentication is not supported on this device.");
        return false;
      }
  
      // Check if biometrics are enrolled
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert("Error", "No biometrics are enrolled. Please set up Face ID or Fingerprint in your phone settings.");
        return false;
      }
  
      // Prompt user for biometric authentication
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Enable Biometric Authentication",
        cancelLabel: "Cancel",
      });
  
      if (result.success) {
        await AsyncStorage.setItem("biometricEnabled", "true");
        return true;
      } else {
        Alert.alert("Cancelled", "Biometric authentication was not enabled.");
        return false;
      }
    } catch (error) {
      console.error("Error enabling biometrics:", error);
      Alert.alert("Error", "An error occurred while enabling biometrics.");
      return false;
    }
  };

export const isBiometricAuthEnabled = async (): Promise<boolean> => {
  const storedValue = await AsyncStorage.getItem(BIOMETRIC_STORAGE_KEY);
  return storedValue === "true";
};

export const disableBiometricAuth = async () => {
  await AsyncStorage.removeItem(BIOMETRIC_STORAGE_KEY);
  console.log("Biometric authentication disabled.");
};
