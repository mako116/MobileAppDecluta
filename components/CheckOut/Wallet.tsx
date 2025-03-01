import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropdownWithSummary from './dropdownSummary/ShowSummary';
import CheckoutBoard from './Selections/CheckoutBoard';
import YourCart from '@/styles/Cart/YourCart.styles';

const Wallet = () => {
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
      <View style={styles.footer}>
              <Text style={YourCart.title}>💯 Secure Payment Protection</Text>
              <Image
                source={require('../../assets/svg/payemnes.png')}
                style={styles.images}
              />
            </View>
    </ScrollView>
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
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 3.43,
    width: '70%',
    height: 30,
  },
});

export default Wallet;
