import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DropdownWithSummary from './dropdownSummary/ShowSummary';
import CheckoutBoard from './Selections/CheckoutBoard';
import YourCart from '@/styles/Cart/YourCart.styles';

const Wallet = () => {
    return (
        <View style={styles.container}>
          <View style={{gap:13,}}>
          <DropdownWithSummary/>
           <View style={{gap:15}}>
           <Text style={YourCart.title}>Select payment method</Text>
           <CheckoutBoard/>
           </View>
          </View>
         <View 
         style={styles.footer}
        // onPress={Proceed} 
        >
          <Text style={YourCart.title}>💯 Secure Payment Protection</Text>
          <Image
          source={require('../../assets/svg/payemnes.png')}
          style={styles.images}
        />
        </View>
       
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
         paddingHorizontal:13,
        paddingVertical:20,
        backgroundColor: '#f5f5f5',
        
        height:"87%"
      },
      footer: {
        gap: 12,
         alignItems: 'center',
       },
      image: {
        width: '55%',
        height: 30,
      },
      images: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 3.43,
        width: '70%',
        height: 30,
      },
})

export default Wallet;
