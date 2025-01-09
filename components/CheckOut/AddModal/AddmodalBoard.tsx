import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Close from '@/assets/images/kyc/close';
import { SignUpStyles } from '@/styles/Signup/signup.style';
import YourCart from '@/styles/Cart/YourCart.styles';
import Headermodal from './ModalPayments/HeaderModal';

interface AddModalProps {
  addmodal: boolean;
  ProceedAdd: () => void;
}

const modalOptions = [
  {
    title: "Add Money",
    clos: <Close />,
  },
];

const Addmodal: React.FC<AddModalProps> = ({ addmodal, ProceedAdd }) => {
  const [amount, setAmount] = useState('');
  // const [addmodal, setAddmodal] = useState(false);
  const [ProceedAdds, setProceedAdds] = useState(false);

  
  // Function to toggle modal visibility
  const toggleAdd = () => {
    setProceedAdds(!ProceedAdds);
  };

  // Function to handle the Proceed button click
  const ProceedAd = () => {
    toggleAdd(); // Show modal when Proceed is clicked
  };

  const formatPrice = (price: string): string => {
    // Remove any non-numeric characters except the period
    const numericValue = price.replace(/[^0-9]/g, '');

    if (!numericValue) return ''; // Return empty if no valid number is present

    const parsedValue = parseInt(numericValue, 0);
    if (isNaN(parsedValue)) return '';

    return `₦ ${parsedValue.toLocaleString('en-NG')}`;
  };

  const handleChange = (text: string) => {
    const formatted = formatPrice(text);
    setAmount(formatted);
  };

  // Bank Transfer / card / UssD
  const ProceedBank =()=>{
    toggleAdd()
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addmodal}
      onRequestClose={ProceedAdd}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {/* Modal Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>{modalOptions[0].title}</Text>
              <TouchableOpacity onPress={ProceedAdd} style={styles.closeButton}>
                {modalOptions[0].clos}
              </TouchableOpacity>
            </View>

            {/* Amount Input */}
            <Text style={styles.label}>Amount</Text>
            <View style={[SignUpStyles.row, SignUpStyles.inputContainerStyles]}>
              <TextInput
                style={[
                  SignUpStyles.inputs,
                   
                ]}
                keyboardType="phone-pad"
                placeholder="Enter amount"
                placeholderTextColor="gray"
                value={amount}
                onChangeText={handleChange} // Wire the input handler here
              />
            </View>
            <Text style={styles.description}>
              Add <Text style={{fontSize:14}}>₦175,000.00</Text> to your wallet to cover your order total.
            </Text>

            <TouchableOpacity
          style={YourCart.bottomButton}
          onPress={ProceedBank}
          // disabled={cart.length === 0}
        >
           <Text style={YourCart.buttonText}>Continue</Text>
        </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
       {/* modal for  */}
      <Headermodal ProceedAdds={ProceedAdds} ProceedAd={ProceedAd} />
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 40,
  },
  headerText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#212121',
    margin:"auto",
    marginTop: 13,
    fontFamily:"Helvetica Neue",
    paddingBottom:14,
    lineHeight:26.6
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
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

export default Addmodal;
