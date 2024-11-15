import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function ProfileCreationFlow() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  const nextStep = () => setStep((prev) => prev + 1);
  const skipStep = () => setStep(3); // Skip to final step
  const goToHome = () => router.push('/(routes)/welcomscreen'); // Adjust 'Home' to your home route name

  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && (
        <View style={styles.box}>
          <Image
      source={require('../../../assets/images/createdprofile.png')}
      style={{}}
      />
          <Text style={styles.title}>Profile Created</Text>
          <Text style={{textAlign:"center"}}>Congrats your profile has been created.</Text>
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 2 && (
        <View style={styles.box}>
            <Image
      source={require('../../../assets/images/bio.png')}
      style={{}}
      />
          <Text style={styles.title}>Make your login & transaction faster and more secure with biometrics enabled</Text>
          <View style={{flexDirection: "row", marginTop:80, gap:10}}>
          <TouchableOpacity style={styles.button} onPress={nextStep}>
            <Text style={styles.buttonText}>Enable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={skipStep}>
            <Text style={styles.secondaryButtonText}>Not Now</Text>
          </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 3 && (
        <View style={styles.box}>
             <Image
      source={require('../../../assets/images/sucesshand.png')}
      style={{}}
      />
          <Text style={styles.title}>Biometric Setup Successful</Text>
          <View style={{marginTop: 90}}>
          <TouchableOpacity style={styles.button} onPress={goToHome}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  
  box: {
    // width: '80%',
    height:"100%",
    padding: 24,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
     
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#DFBD8F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 10,
    padding: 10,
  },
  secondaryButtonText: {
    color: '#DEBC8E',
    fontSize: 16,
  },
});
