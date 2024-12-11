import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const navigation = useNavigation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        if (email) {
          router.replace('/(routes)/welcomebackPIn'); // Navigate to appropriate screen
        } else {
          router.replace('/(routes)/welcomebackPIn'); // Navigate to splash or login screen
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setIsCheckingAuth(false); // Allow children to render once auth check is complete
      }
    };

    // Check navigation readiness to avoid premature navigation
    if (navigation.isFocused()) {
      checkAuth();
    }
  }, [router, navigation]);

  if (isCheckingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
