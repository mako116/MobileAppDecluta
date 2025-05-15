import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FilterHeader }from '../../../../UI/Filter/index';
interface PriceRange {
  label: string;
  count: number;
}

const PriceScreen: React.FC = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  
  const priceRanges: PriceRange[] = [
    { label: 'Under ₦ 20k', count: 200 },
    { label: '₦ 20k to ₦ 50k', count: 110 },
    { label: '₦ 50k to ₦ 100k', count: 105 },
    { label: '₦ 100k to ₦ 500k', count: 70 },
    { label: '₦ 500k and above', count: 37 }
  ];
  
  return (
    <View style={styles.container}>
      <FilterHeader 
        title="Price" 
        onBackPress={() => router.back()} 
        showCart={true}
      />
      
      <ScrollView style={styles.scrollContent}>
        <View style={styles.priceInputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Min (₦)</Text>
            <TextInput
              style={styles.priceInput}
              value={minPrice}
              onChangeText={setMinPrice}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Max (₦)</Text>
            <TextInput
              style={styles.priceInput}
              value={maxPrice}
              onChangeText={setMaxPrice}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
        </View>
        
        {priceRanges.map((range) => (
          <TouchableOpacity 
            key={range.label}
            style={[
              styles.priceRangeOption,
              selectedRange === range.label && styles.selectedRangeOption
            ]}
            onPress={() => setSelectedRange(range.label)}
          >
            <Text style={styles.priceRangeLabel}>{range.label}</Text>
            <Text style={styles.itemCount}>({range.count} items)</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => {
          console.log('Price range selected:', { minPrice, maxPrice, selectedRange });
          router.back();
        }}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    flex: 1,
  },
  priceInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  priceInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
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
  selectedRangeOption: {
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
  buttonsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cancelButton: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 60,
  },
  saveButton: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#888',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default PriceScreen;