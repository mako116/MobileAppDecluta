import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ModalPageProps = {
  isModalVisible: boolean;
  handleCancel: () => void;
  handleRemove: () => void;
};

const ModalPage: React.FC<ModalPageProps> = ({ isModalVisible, handleCancel, handleRemove }) => {
  if (!isModalVisible) return null; // Don't render anything if modal is not visible

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={handleCancel}
      
    >
      {/* Semi-transparent background overlay */}
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Remove Item?</Text>
          <Text style={styles.modalPara}>
            Are you sure you want to remove Samsung Galaxy A05 from your cart?
          </Text>
          <View style={styles.modalActions}>
            <TouchableOpacity onPress={handleRemove} style={[styles.modalButton, { backgroundColor: '#DEBC8E' }]}>
              <Text style={styles.modalButtonText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={[styles.modalButton, { backgroundColor: '#E9E9E9' }]}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darken the background for better focus on the modal
  },
  modalContent: {
 
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 6,
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#212121',
    lineHeight: 22.4,
    fontFamily: "Helvetica Neue",
    paddingHorizontal: 10,
  },
  modalPara: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20,
    color: '#212121',
    lineHeight: 19.6,
    fontFamily: "Helvetica Neue",
    paddingHorizontal: 10,
  },
  modalActions: {
    gap: 13,
  },
  modalButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22.4,
    fontFamily: "Proxima Nova",
    color: '#463E31',
  },
});

export default ModalPage;
