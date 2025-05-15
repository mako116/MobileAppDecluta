import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxFilterOptionProps {
  label: string;
  sublabel?: string;
  selected: boolean;
  onSelect: () => void;
}

const CheckboxFilterOption: React.FC<CheckboxFilterOptionProps> = ({ 
  label, 
  sublabel, 
  selected, 
  onSelect 
}) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onSelect}>
      <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
        {selected && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <View style={styles.checkboxTextContainer}>
        <Text style={styles.checkboxLabel}>{label}</Text>
        {sublabel && <Text style={styles.checkboxSublabel}>{sublabel}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxSelected: {
    backgroundColor: '#f0a030',
    borderColor: '#f0a030',
  },
  checkboxTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  checkboxSublabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});

export default CheckboxFilterOption;