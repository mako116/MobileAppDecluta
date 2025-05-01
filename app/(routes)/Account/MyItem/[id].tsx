import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ProfileMenu } from '@/components/Account/MyItems/MenueContainer';
import { ProfileScreen } from '@/components/Account/Profile/ProfileScreen';
import { AccountHeader } from '@/UI/Header/AccountHeader';

import ItemDetailScreen from '@/components/Account/MyItems/ItemManagment/ItemDetails';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
  <ItemDetailScreen />

        
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContent: {
    paddingVertical: 10,
  }
});
