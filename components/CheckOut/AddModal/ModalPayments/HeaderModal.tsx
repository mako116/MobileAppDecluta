import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';
import Close from '@/assets/images/kyc/close';
 
import BackButton2 from '@/assets/images/kyc/LeftArrow2';
import { useCart } from '@/context/CartContext';
import PaymentBoard from './PaymentsBoard';

interface AddModalProps {
    ProceedAdds: boolean;
  ProceedAd: () => void;
}

 

const Headermodal: React.FC<AddModalProps> = ({ ProceedAdds, ProceedAd }) => {
    const [amount, setAmount] = useState('');
    const { cart } = useCart();
  
    const getCartSummary = () => {
      let totalAmount = 0;
  
      cart.forEach((item) => {
        totalAmount += item.price * item.count;
      });
  
      return { totalAmount };
    };
  
    const { totalAmount } = getCartSummary();
  
    const formatPrice = (price: string): string => {
      const numericValue = price.replace(/[^0-9]/g, ''); // Keep only numbers
  
      if (!numericValue) return ''; // Return empty if no valid number is present
  
      const parsedValue = parseInt(numericValue, 10); // Convert string to number
      if (isNaN(parsedValue)) return ''; // Return empty for invalid numbers
  
      return `₦ ${parsedValue.toLocaleString('en-NG')}`; // Format as currency
    };
  
    // const handleChange = (text: string) => {
    //   const formatted = formatPrice(text);
    //   setAmount(formatted);
    // };
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={ProceedAdds}
        onRequestClose={ProceedAd}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}
            >
              {/* Modal Header */}
              <View style={styles.header}>
                <TouchableOpacity >
                <BackButton2 />
                </TouchableOpacity>
                {/* Convert totalAmount to string */}
                <Text style={styles.headerText}>Add {formatPrice(totalAmount.toString())} to Wallet</Text>
                <TouchableOpacity onPress={ProceedAd}  >
                <Close />
                </TouchableOpacity>
              </View>
  
              {/* Select Payment Method Toggle */}
              <PaymentBoard/>
  
               
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 15,
    paddingVertical: 15,
    maxHeight: '90%',
   },
  header: {
     flexDirection: 'row',
      alignItems: 'center',
     justifyContent:"space-between",
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  headerText: {
     fontSize: 19,
    fontWeight: '700',
    color: '#212121',
     marginTop: 13,
    fontFamily:"Helvetica Neue",
    paddingBottom:14,
    lineHeight:26.6
  },
  closeButton: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
    fontFamily:"Helvetica Neue",
    color: '#212121',
    // paddingBottom:14,
    lineHeight:19.6
  },
  description: {
    fontSize: 12,
    color: '#A4A4A4',
    lineHeight: 16.8,
    marginVertical: 10,
    fontFamily:"Proxima Nova"
  },
});

export default Headermodal;
