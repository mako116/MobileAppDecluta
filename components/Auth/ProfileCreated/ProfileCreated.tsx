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
        <View style={[styles.box,{height:"100%", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}]}>
        <View style={{marginVertical:"20%", justifyContent:"center", alignItems:"center", paddingHorizontal:"20%"}}>
        <Image
      source={require('../../../assets/images/createdprofile.png')}
      style={{}}
      />
          <Text style={styles.title}>Profile Created</Text>
          <Text style={{textAlign:"center",fontFamily:"Proxima Nova",marginTop:-10,lineHeight:19.6, fontSize:14,fontWeight:'400', letterSpacing:0.1}}>Congrats your profile has been created.</Text>
        </View>
          <TouchableOpacity style={[styles.button ]} onPress={nextStep}>
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
          <Text style={{fontWeight:"400", textAlign:"center",lineHeight:19.6, fontSize:14, fontFamily:"Proxima Nova"}}>Make your login & transaction faster and more secure with biometrics enabled</Text>
          <View style={{flexDirection: "row", marginTop:"90%", gap:20}}>
          
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
        <View style={{}}>
             <Image
      source={require('../../../assets/images/sucesshand.png')}
      style={{alignItems:"center", margin:'auto'}}
      />
          <Text style={styles.title}>Biometric Setup Successful</Text>
          <View style={{marginTop: "80%",}}>
          <TouchableOpacity style={[styles.button,{  }]} onPress={goToHome}>
            <Text style={[styles.buttonText,{}]}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingHorizontal:20,
    flex: 1,
    marginTop:100,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5F5F5',
    // margin:"auto",
  },
  
  box: {
   
    
    padding: 24,
    borderRadius: 10,
    
    alignItems: 'center',
     
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    lineHeight:32.2,
    color: '#212121',
    marginBottom: 16,
    textAlign:"center",
    marginTop:4,
     fontFamily:"Helvetica Neue"
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
    lineHeight:22.4,
      fontFamily:"Proxima Nova"
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
    lineHeight:22.4,
      fontFamily:"Proxima Nova"
  },
});
