import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropdownUssD from './UssDModal/USSDModal';
import YourCart from '@/styles/Cart/YourCart.styles';

const UssDM = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[YourCart.title, styles.title]}>Select Bank</Text>
        <Text style={YourCart.bonusText}>
          Select your bank to initiate USSD payment. Transfer from your own bank account.
        </Text>
      </View>
      {/* Dropdown for USSD Payment */}
      <DropdownUssD />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingBottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 4,  
    backgroundColor: '#FFFFFF',  
  },
  header: {
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    // fontWeight: '600',  
    // color: '#333333',  
  },
});

export default UssDM;
