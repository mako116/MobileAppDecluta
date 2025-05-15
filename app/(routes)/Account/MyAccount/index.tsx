import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ProfileMenu } from '@/components/Account/MyItems/MenueContainer';
import { ProfileScreen } from '@/components/Account/Profile/ProfileScreen';
import { AccountHeader } from '@/UI/Header/AccountHeader';
import ProfileKYC from '@/screens/Kyc/BannerH/ProfileKYc';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
  
      <AccountHeader />
        <ProfileKYC />
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <ProfileScreen />
        <ProfileMenu />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingVertical: 10,
  }
});
