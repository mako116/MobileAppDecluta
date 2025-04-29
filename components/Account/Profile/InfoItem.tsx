import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InfoItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={20} color="#666" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  iconContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  value: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  }
});