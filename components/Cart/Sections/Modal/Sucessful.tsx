import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckSquare from '@/assets/svg/CheckSquare';

const CouponAppliedModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onClose(); // Close the modal after 3 seconds
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [visible, onClose]);

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <CheckSquare/>
           <Text style={styles.modalText}>Coupon applied successfully!</Text>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
     justifyContent: "flex-end",
     paddingHorizontal:20,
    paddingVertical:"30%",
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  modalContent: {
    flexDirection:"row",
    width:"100%",
    paddingVertical:15,
    paddingHorizontal:20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    gap:10
  },
  modalText: {
    fontSize: 16,
    color: '#212121',
    fontFamily:"Helvetica Neue",
    lineHeight:22.4,
    fontWeight: "700",
   },
  closeButton: {
     padding: 10,
    backgroundColor: '#DEBC8E',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CouponAppliedModal;
