import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate a brief delay for the splash screen
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const email = await AsyncStorage.getItem('email');
        if (email) {
          console.log('Authenticated user found. Navigating to home.');
          router.replace('/(routes)/login'); // Navigate to the home screen for authenticated users
        } else {
          console.log('No user found. Navigating to login.');
          router.replace('/(tabs)/home'); // Navigate to login for unauthenticated users
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <View style={styles.background}>
      <Image
        source={require('../../../assets/images/decluttaking.png')}
        style={styles.logo}
      />
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <Image
          style={{ width: 280, height: 80 }}
          source={require('../../../assets/loading/Animation.gif')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#463e31',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
