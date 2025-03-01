import { Linking, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import { router } from 'expo-router';

export default function SuccessModalScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:help@decluttaking.com');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://twitter.com/decluttaking');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/decluttaking/');
  };

  const BackToEmailLogin =()=>{
    router.push("/(routes)/login")
  }
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.Row}>
          <Text style={styles.modalTitle}>Report Successful!</Text>
          <TouchableOpacity  
          style={{ position: 'absolute', right: 0,  }}
           onPress={BackToEmailLogin}>
          <Entypo style={{alignItems:"center", justifyContent:"center",marginBottom:10}} name="cross" size={24} color="black" />
        </TouchableOpacity>      
             </View>
        <Text style={styles.modalText}>Your feedback has been logged successfully.</Text>
        <Text style={styles.modalText}>
          Please be patient as we work on your request. We will send you an email or call you on the phone within 30 minutes - 24 hours.
        </Text>
        <Text style={styles.modalText}>You can also reach us directly:</Text>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', gap: 15 }}>
          <TouchableOpacity
            style={[SignUpStyles.socialButton, { width: '100%', justifyContent: 'flex-start', gap: 24 }]}
            onPress={handleEmailPress}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={{ color: '#000000', lineHeight: 19.6, fontSize: 14, fontWeight: '400' , fontFamily:"ProximaNovaR"}}>
                Email: help@decluttaking.com
              </Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[SignUpStyles.socialButton, { width: '100%', justifyContent: 'flex-start' }]}
            onPress={handleTwitterPress}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, width: '90%' }}>
              <FontAwesome6 name="square-x-twitter" size={24} color="black" />
              <Text style={{ color: '#000000', lineHeight: 19.6, fontSize: 14, fontWeight: '400', fontFamily:"ProximaNovaR" }}>Follow @decluttaking</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[SignUpStyles.socialButton, { width: '100%', justifyContent: 'flex-start' }]}
            onPress={handleInstagramPress}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, width: '90%' }}>
              <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('@/assets/images/insta.png')} />
              <Text style={{ color: '#000000', lineHeight: 19.6, fontSize: 14, fontWeight: '400', fontFamily:"ProximaNovaR" }}>Follow @decluttaking</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  Row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  modalContent: {
    width: 320,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 26.6,
    color: '#212121',
    marginBottom: 10,
      fontFamily:"HelveticaNeueLTPro"
  },
  modalText: {
    fontSize: 13,
    lineHeight: 19.6,
    color: '#212121',
    marginBottom: 10,
    paddingTop:10,
     fontFamily:"ProximaNovaR"
  },
});
