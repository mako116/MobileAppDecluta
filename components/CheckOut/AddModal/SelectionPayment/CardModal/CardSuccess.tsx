import Good from '@/assets/images/checkbox/Good';
import Close from '@/assets/images/kyc/close';
import Tickcircle from '@/assets/svg/tickcircle';
import YourCart from '@/styles/Cart/YourCart.styles';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
}

const SuccessModal = ({ visible, onClose }: SuccessModalProps) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
         
          <View style={{ gap:10}}>
          <Good/>
          <Text style={[YourCart.modalTitle,{marginHorizontal:"auto", paddingBottom:3}]}>Card Added Successfully!</Text>
      
          </View>
          <Text style={[YourCart.label,{textAlign:"center"}]}>Your card has been securely added to your account. You're now ready to make payments with ease!</Text>

          <TouchableOpacity style={[YourCart.bottomButton,{width:"100%", marginTop:20}]} onPress={onClose}>
            <Text style={YourCart.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
     flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal:20,
     backgroundColor: 'rgba(0, 0, 0, 0.7)',  
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 15,
   
     borderRadius: 5,
     width: '100%',
    alignItems: 'center',
  },
 
});

export default SuccessModal;
