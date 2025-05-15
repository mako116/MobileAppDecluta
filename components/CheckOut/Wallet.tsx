import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropdownWithSummary from './dropdownSummary/ShowSummary';
import CheckoutBoard from './Selections/CheckoutBoard';
import YourCart from '@/styles/Cart/YourCart.styles';
import ModalProceed from '../Cart/Sections/Modal/ModalProceed';
import Rightarrow from '@/assets/images/kyc/rightarrow';

const Wallet = () => {
    const [modalProceed, setModalProceed] = useState(false);

    const toggleModal = () => {
      setModalProceed(!modalProceed);
    };
  return (
    <SafeAreaView style={{height:"100%"}}>
    <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
      <View style={{ gap: 13 }}>
        <DropdownWithSummary />
        <View style={{ gap: 15 }}>
          <Text style={YourCart.title}>Select payment method</Text>
          <CheckoutBoard />
        </View>
       
      </View>
            {/* <TouchableOpacity onPress={toggleModal} style={YourCart.secureSection}>
              <Image
                source={require('../../assets/svg/Frame 645480.png')}
                style={{ width: '55%', height: 30 }}
                resizeMode="contain"
              />
            </TouchableOpacity> */}
      
      
            <View style={styles.footer}>
        <TouchableOpacity onPress={toggleModal} style={styles.footer}>
              <Text style={YourCart.title}>💯 Secure Payment Protection. Learn more 
              <Rightarrow color='#292D32' width={14} height={14}/>

              </Text>

          </TouchableOpacity>
            <View style={styles.images}>
            <Image
                source={require('../../assets/svg/payemnes.png')}
                style={styles.img}
              />
            </View>
            </View>
    </ScrollView>
    <ModalProceed modalProceed={modalProceed} toggleModal={toggleModal} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent:"space-between",
    // height:"100%",
    paddingHorizontal: 13,
    // paddingVertical: 20,
    paddingBottom: "65%",
    backgroundColor: '#f5f5f5',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    gap:10
  },
  images: {
    // borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 3.43,
    width: '88%',
    height: 50,
    objectFit:"contain"
  },
  img:{
    width: '100%',
    height: 50,
    objectFit:"contain"

  }
});

export default Wallet;
