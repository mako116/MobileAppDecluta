import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyCenterSection } from './MyCenterSection';
import { MyFinancesSection } from './MyFinancesSection';
import { HelpAndMoreSection } from './HelpAndMoreSection';
import { ImproveSection } from './ImproveSection';
import { LogOut } from './LogOut';

export const ProfileMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <MyCenterSection />
      <MyFinancesSection />
      <HelpAndMoreSection />
      <ImproveSection />
      <LogOut />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});