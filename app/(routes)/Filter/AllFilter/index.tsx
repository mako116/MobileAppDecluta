import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  FilterHeader, 
  FilterOption, 
  ActionButton 
} from  '../../../../UI/Filter/index';

const FilterScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FilterHeader 
        title="Filter" 
        onBackPress={() => router.back()} 
        onResetPress={() => console.log('Reset filters')}
      />
      
      <ScrollView style={styles.scrollContent}>
        <FilterOption 
          label="Sort" 
          value="Best Match" 
          onPress={() => router.push('/(routes)/Filter/Sort')}
        />
        <FilterOption 
          label="Condition" 
          value="Used" 
          onPress={() => router.push('/(routes)/Filter/Condition')}
        />
        <FilterOption 
          label="Price" 
          value="₦ 80,000.00" 
          onPress={() => router.push('/(routes)/Filter/Price')}
        />
        <FilterOption 
          label="Category" 
          value="Smartphones" 
          onPress={() => router.push('/(routes)/Filter/Category')}
        />
        <FilterOption 
          label="Item Location" 
          value="Ibadan, Oyo State" 
          onPress={() => router.push('/(routes)/Filter/Location')}
        />
      </ScrollView>
      
      <ActionButton 
        title="Show 200+ results" 
        onPress={() => {
          console.log('Show results');
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

export default FilterScreen;