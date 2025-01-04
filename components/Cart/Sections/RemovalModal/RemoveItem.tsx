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
      <View style={styles.modalOverlay}>
        
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Are you sure you want to remove this item?</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity onPress={handleRemove} style={[styles.modalButton, { backgroundColor: '#FF6347' }]}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the background for better focus on the modal
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,  // Slightly rounded corners for better aesthetics
    alignItems: 'center',
    elevation: 5, // Add some shadow to give a lifted effect
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',  // Dark text for better readability
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',  // White text for buttons to stand out
  },
});

export default ModalPage;
