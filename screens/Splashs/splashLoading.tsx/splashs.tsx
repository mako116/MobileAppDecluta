import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '@/redux/store';
import Lottie from 'lottie-react-native';
import { useAppDispatch } from '@/redux/Redux/hook/hook';
import { loginWithTokenUser } from '@/redux/Redux/slice/authSlice';

const TWELVE_HOURS = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

export default function SplashScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const lastLogin = useSelector((state: RootState) => state.auth.lastLogin);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const rehydrateStore = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Small delay
      setIsReady(true);
    };
    rehydrateStore();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isReady) return;
  
      console.log('Splash screen delay...');
      await new Promise((resolve) => setTimeout(resolve, 1800));
  
      try {
        await dispatch(loginWithTokenUser()).unwrap(); // try to login with token
        console.log('Token valid. Navigating to home...');
        router.replace('/(tabs)/home');
      } catch (error: any) {
        console.warn('Token invalid or expired:', error);
  
        if (error === 'Token login failed: No token found' || error === 'Invalid or expired token' || error === 'Invalid or expired token') {
          console.log('Navigating to Welcome Back due to token issue...');
          router.replace('/(routes)/welcomebackPIn');
        } else {
          console.log('Navigating to home anyway (fallback)...');
          router.replace('/(tabs)/home');
        }
      }
    };
  
    checkAuth();
  }, [isReady]);
  

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
