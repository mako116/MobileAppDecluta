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
        <View style={[styles.box,{height:"80%", margin:"auto"}]}>
          <Image
      source={require('../../../assets/images/createdprofile.png')}
      style={{}}
      />
          <Text style={styles.title}>Profile Created</Text>
          <Text style={{textAlign:"center"}}>Congrats your profile has been created.</Text>
          <TouchableOpacity style={[styles.button,{position:"absolute",bottom:0, width:"100%",}]} onPress={nextStep}>
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
          <Text style={styles.title}>Enable Biometrics!</Text>
          <Text style={{fontWeight:"400", textAlign:"center",lineHeight:19.6, fontSize:14,}}>Make your login & transaction faster and more secure with biometrics enabled</Text>
          <View style={{flexDirection: "row", paddingTop:90, gap:20}}>
          
          <TouchableOpacity style={styles.secondaryButton} onPress={skipStep}>
            <Text style={[styles.secondaryButtonText,{paddingHorizontal:30}]}>Not Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={nextStep}>
            <Text style={[styles.buttonText,{paddingHorizontal:35, }]}>Enable</Text>
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
          <View style={{marginTop: 90,}}>
          <TouchableOpacity style={[styles.button,{width:"100%"}]} onPress={goToHome}>
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
   
    // flex: 1,
    // marginTop:100,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin:"auto",
  },
  
  box: {
   
    
    padding: 24,
    borderRadius: 10,
    
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
    paddingVertical: 19,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    textAlign:"center",
    color: '#212121',
    fontWeight: '400',
    fontSize: 16,
    lineHeight:22.4
  },
  secondaryButton: {
    paddingVertical: 19,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth:1,
    marginTop: 16,
  },
  secondaryButtonText: {
    textAlign:"center",
    color: '#212121',
    fontWeight: '400',
    fontSize: 16,
    lineHeight:22.4
  },
});
