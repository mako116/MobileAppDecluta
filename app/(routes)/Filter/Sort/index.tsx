import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  FilterHeader, 
  RadioFilterOption, 
  ActionButton 
} from '../../../../UI/Filter/index';

const SortScreen: React.FC = () => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState<string>('Price: lowest first');
  
  const sortOptions: string[] = [
    'Best Match',
    'Time: newly listed',
    'Price: lowest first',
    'Price: highest first',
    'Distance: nearest first'
  ];
  
  return (
    <View style={styles.container}>
      <FilterHeader 
        title="Sort" 
        onBackPress={() => router.back()} 
        showCart={true}
      />
      
      <ScrollView style={styles.scrollContent}>
        {sortOptions.map((option) => (
          <RadioFilterOption 
            key={option}
            label={option}
            selected={selectedSort === option}
            onSelect={() => setSelectedSort(option)}
          />
        ))}
      </ScrollView>
      
      <ActionButton 
        title="Show 200+ results" 
        onPress={() => {
          console.log('Sort selected:', selectedSort);
          router.back();
        }}
      />
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
});

export default SortScreen;