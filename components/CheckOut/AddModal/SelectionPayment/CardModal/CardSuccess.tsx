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
            <Tickcircle/>
          <Text style={YourCart.modalTitle}>Card Added Successfully!</Text>
          <Text style={[YourCart.label,{paddingHorizontal:25,textAlign:"center"}]}>Your card has been securely added to your account. You're now ready to make payments with ease!</Text>

          <TouchableOpacity style={[YourCart.bottomButton,{width:"100%"}]} onPress={onClose}>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.67)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap:8,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
 
});

export default SuccessModal;
