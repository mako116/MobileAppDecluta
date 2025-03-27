import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '@/redux/store';
import Lottie from 'lottie-react-native';
import { logout } from '../../../redux/slices/AuthSlice';
import { persistStore } from 'redux-persist';

const TWELVE_HOURS = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

export default function SplashScreen() {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);
  const lastLogin = useSelector((state: RootState) => state.auth.lastLogin);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800)); // Simulated delay
      if (!isReady) return;
      if (token && lastLogin) {
        const timeElapsed = Date.now() - lastLogin;
        
        if (timeElapsed < TWELVE_HOURS) {
          console.log("Session still valid. Navigating to home.");
          router.replace('/(tabs)/home');
        } else {
          console.log("Session expired. Redirecting to Welcome Back.");
          dispatch(logout()); // Clear token
          router.replace('/(routes)/welcomebackPIn'); // Navigate to PIN/Biometric
        }
      } else {
        console.log("No session found. Navigating to login.");
        router.replace('/(tabs)/home');
      }
    };

    checkAuth();
  }, [token, lastLogin, router, dispatch]);

  useEffect(() => {
    // Wait for redux-persist to finish hydrating
    persistStore(store, null, () => setIsReady(true));
  }, []);

  if (!isReady) return null;

  return (
    <View style={styles.background}>
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <Image
          source={require('../../../assets/images/decluttaking.png')}
          style={styles.logo}
        />
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
  container: {
    display: "flex",
    paddingBottom: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
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
});
