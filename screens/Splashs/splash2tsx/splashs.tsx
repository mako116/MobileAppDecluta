import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import Lottie from 'lottie-react-native';

export default function Splashs() {
  const router = useRouter();

  useEffect(()=>{
      setTimeout(() => {
          // router.push("/(tabs)/home")
          router.push("/(routes)/welcomebackPIn")
       }, 2800);
  },[])

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
