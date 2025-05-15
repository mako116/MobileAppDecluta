import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MenuSectionProps {
  title: string;
  children: ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth:0.7,
    borderColor:'#ddd'
  },
});
