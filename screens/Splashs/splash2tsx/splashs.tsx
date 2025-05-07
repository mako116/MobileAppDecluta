import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import Lottie from 'lottie-react-native';
import { useAppDispatch } from '@/redux/Redux/hook/hook';
import { loginWithTokenUser } from '@/redux/Redux/slice/authSlice';

export default function Splashs() {
  const router = useRouter();
  const dispatch = useAppDispatch();
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
      await new Promise((resolve) => setTimeout(resolve, 1800));
  
      try {
        await dispatch(loginWithTokenUser()).unwrap(); // try to login with token
        router.replace('/(tabs)/home');
      } catch (error: any) {
        console.warn('Token invalid or expired:', error);
  
        if (error === 'Token login failed: No token found' || error === 'Invalid or expired token' || error === 'Invalid or expired token') {
          router.replace('/(routes)/welcomebackPIn');
        } else {
          router.replace('/(tabs)/home');
        }
      }
    };
  
    checkAuth();
  }, [isReady]);

  return (
    <View style={styles.background}>
      {/* <Text style={styles.welcomeText}>splashs</Text> */}

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

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>
          Welcome to
          DecluttaKing
        </Text>
        <Text style={styles.welcomeDescription}>
          Sell and swap your used items in minutes! Happy Declutta-ing!
        </Text>
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
    marginTop:"-12%"
  },
  lottie: {
    width: 455,
    height: "100%",
    position:"absolute",
    marginTop:20
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
