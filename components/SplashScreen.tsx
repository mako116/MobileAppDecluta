// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for your stack's param list
type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

// Define props with navigation type for SplashScreen
type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home'); // Navigate to the Home screen after the splash
    }, 3000); // Set duration (3 seconds for example)

    return () => clearTimeout(timeout); // Clear timeout if component unmounts
  }, [navigation]);

  return (
    <View >
      <Text >Welcome to Decluttaking</Text>
    </View>
  );
}

 