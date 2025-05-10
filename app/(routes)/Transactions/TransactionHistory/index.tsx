import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';

import ProfileKYC from '@/screens/Kyc/BannerH/ProfileKYc';
import TransactionHistorys from '@/components/TranSactions/TransactionsHistroy';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
  
    
    
   <TransactionHistorys />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
 
});
