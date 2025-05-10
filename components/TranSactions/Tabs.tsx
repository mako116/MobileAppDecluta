import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import FilterTab from './FilterTab';

const FilterTabs = ({ activeFilter, setActiveFilter, transactionCounts }) => {
  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'purchase', label: 'Purchase' },
    { id: 'sale', label: 'Sale' },
    { id: 'topup', label: 'Top-up' },
    { id: 'withdrawal', label: 'Withdrawal' },

  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filterOptions.map((option) => (
          <FilterTab
            key={option.id}
            id={option.id}
            label={option.label}
            active={activeFilter === option.id}
            count={transactionCounts[option.id] || 0}
            onPress={(id) => setActiveFilter(id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',

    
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
});

export default FilterTabs;