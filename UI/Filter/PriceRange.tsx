import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PriceRangeOptionProps {
  label: string;
  itemCount: number;
  selected: boolean;
  onSelect: () => void;
}

const PriceRangeOption: React.FC<PriceRangeOptionProps> = ({ 
  label, 
  itemCount, 
  selected, 
  onSelect 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.priceRangeOption, selected && styles.priceRangeSelected]} 
      onPress={onSelect}
    >
      <Text style={styles.priceRangeLabel}>{label}</Text>
      <Text style={styles.itemCount}>({itemCount} items)</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  priceRangeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  priceRangeSelected: {
    backgroundColor: '#f7f7f7',
  },
  priceRangeLabel: {
    fontSize: 16,
    color: '#333',
  },
  itemCount: {
    fontSize: 14,
    color: '#888',
  },
});

export default PriceRangeOption;