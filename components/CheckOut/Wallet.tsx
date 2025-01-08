import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropdownWithSummary from './dropdownSummary/ShowSummary';
import CheckoutBoard from './Selections/CheckoutBoard';
import YourCart from '@/styles/Cart/YourCart.styles';

const Wallet = () => {
    return (
        <View style={styles.container}>
           <DropdownWithSummary/>
           <View style={{gap:15}}>
           <Text style={YourCart.title}>Select payment method</Text>
           <CheckoutBoard/>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
         paddingHorizontal:13,
        // paddingVertical:20,
        backgroundColor: '#f5f5f5',
        gap:13,
        // height:"100%"
      },
})

export default Wallet;
