import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ActionButtonProps {
  title: string;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#debc8e',
    borderRadius: 4,
    paddingVertical: 15,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ActionButton;