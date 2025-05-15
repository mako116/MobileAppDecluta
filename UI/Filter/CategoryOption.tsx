import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface CategoryOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const CategoryOption: React.FC<CategoryOptionProps> = ({ 
  label, 
  selected, 
  onSelect 
}) => {
  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={onSelect}>
      <View style={[styles.radioButton, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#f0a030',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#f0a030',
  },
  categoryLabel: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
});

export default CategoryOption;