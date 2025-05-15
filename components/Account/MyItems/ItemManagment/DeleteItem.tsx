import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DeleteModalProps {
  visible: boolean;
  onCancel: () => void;
  onDelete: () => void;
  itemName?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  visible,
  onCancel,
  onDelete,
  itemName = 'this item'
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* Trash icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </View>
          
          {/* Modal title */}
          <Text style={styles.modalTitle}>Delete Item?</Text>
          
          {/* Modal message */}
          <Text style={styles.modalText}>
            Are you sure you want to delete {itemName}?
            This action is permanent and cannot be undone.
          </Text>
          
          {/* Delete button */}
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          
          {/* Cancel button */}
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 20,
  },
  deleteButton: {
    backgroundColor: '#f0d6b1',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  deleteButtonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default DeleteModal;