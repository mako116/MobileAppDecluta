import { Linking, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIndicator from '@/assets/svg/homeIndicator';
import CloseSquare from '@/assets/svg/closeSquare';
import { SignUpStyles } from '@/styles/Signup/signup.style';

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
    router.push("/(routes)/need-help")
  }
  return (
    <SafeAreaView edges={[ 'top' ]} style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
          <HomeIndicator />
        </View>
        <View style={styles.Row}>
          <Text style={styles.modalTitle}>Report Successful!</Text>
          <TouchableOpacity
            onPress={BackToEmailLogin}>
            <CloseSquare />
          </TouchableOpacity>      
        </View>
        <Text style={styles.modalText}>Your feedback has been logged successfully.</Text>
        <Text style={styles.modalText}>
          Please be patient as we work on your request. We will send you an email or call you on the phone within 30 minutes - 24 hours.
        </Text>
        <Text style={styles.modalText}>You can also reach us directly:</Text>

        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, marginBottom: 40 }}>

          <TouchableOpacity
            style={[SignUpStyles.socialButton, { width: '100%', justifyContent: 'flex-start' }]}
            onPress={handleEmailPress}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, width: '90%' }}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={{ color: '#000000', lineHeight: 19.6, fontSize: 14, fontWeight: '400', fontFamily:"ProximaNovaR" }}>Email: help@decluttaking.com</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:"center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    paddingBottom: 20

  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: '700',
    color: '#212121',
    fontFamily:"HelveticaNeueLTPro",
    textAlign: "center",
    marginLeft: 20
  },
  modalText: {
    fontSize: 13,
    lineHeight: 19.6,
    color: '#212121',
    marginBottom: 10,
    paddingTop:10,
    fontFamily:"ProximaNovaR",
    fontWeight: 700
  },
});
