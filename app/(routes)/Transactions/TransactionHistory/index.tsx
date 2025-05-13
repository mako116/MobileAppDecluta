import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';

import ProfileKYC from '@/screens/Kyc/BannerH/ProfileKYc';
import TransactionHistorys from '@/components/TranSactions/TransactionsHistroy';
import TransactionHeader from '@/components/TranSactions/TransactionHeader';
import FilterModal from '@/components/TranSactions/TransactionFilterModal';

export default function Index() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const handleFilterPress = () => {
    setFilterModalVisible(true);
  };

  const handleCloseFilter = () => {
    setFilterModalVisible(false);
  };

  const handleApplyFilter = () => {
    // Apply filter logic here
    setFilterModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
  <TransactionHeader onFilterPress={handleFilterPress} />
    
    
   <TransactionHistorys />
   <FilterModal
        visible={filterModalVisible}
        onClose={handleCloseFilter}
        onApply={handleApplyFilter}
      />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"blue"
  },
 
});
