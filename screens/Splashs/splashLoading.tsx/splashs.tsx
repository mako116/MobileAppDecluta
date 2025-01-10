import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lottie from 'lottie-react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate a brief delay for the splash screen
        await new Promise((resolve) => setTimeout(resolve, 1800));

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
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <Image
          source={require('../../../assets/images/decluttaking.png')}
          style={styles.logo}
        />
        {/* loading */}
        <Lottie
          source={require('../../../assets/loading/latestsplash.json')}
          autoPlay
          style={styles.lottie}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#463e31",
    justifyContent: "center",
    alignContent: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    fontWeight: "600",
  },
  container: {
    display: "flex",
    paddingBottom: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 226,
    height: 48,
    marginTop: "-12%",
  },
  lottie: {
    width: 455,
    height: "100%",
    position: "absolute",
    marginTop: 20,
  },
  welcomeContainer: {
    justifyContent: "center",
    marginBottom: 90,
    margin: "auto",
  },
  welcomeTitle: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 23,
    lineHeight: 32.2,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  welcomeDescription: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.6,
    textAlign: "center",
    paddingHorizontal: 50,
    color: "#FFFFFF",
  },
});
