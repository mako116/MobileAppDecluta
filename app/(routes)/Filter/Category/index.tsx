import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { 
  FilterHeader, 
  CategoryOption, 
  ActionButton 
} from '../../../../UI/Filter/index';

const CategoryScreen: React.FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  
  const categories: string[] = [
    'All Categories',
    'Phones & Tablet',
    'Home & Kitchen',
    'Furniture',
    'Computing',
    'Electronics',
    'Fashion',
    'Solar Energy',
    'Generators'
  ];
  
  return (
    <View style={styles.container}>
      <FilterHeader 
        title="Category" 
        onBackPress={() => router.back()} 
        showCart={true}
      />
      
      <ScrollView style={styles.scrollContent}>
        {categories.map((category) => (
          <CategoryOption 
            key={category}
            label={category}
            selected={selectedCategory === category}
            onSelect={() => setSelectedCategory(category)}
          />
        ))}
      </ScrollView>
      
      <ActionButton 
        title="Show 140,000+ results" 
        onPress={() => {
          console.log('Category selected:', selectedCategory);
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

export default CategoryScreen;