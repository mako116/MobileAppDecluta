import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileKYc() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.progressText}>Your profile is 60% complete</Text>
        <TouchableOpacity style={styles.kycButton}>
          <Text style={styles.kycText}>Complete KYC</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#212121" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create (
    {
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F9F9F9', // Light background for contrast
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    borderColor: '#E0E0E0',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White card background
      },
  progressText: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
    color: '#474747',
      },
  kycButton: {
    flexDirection: 'row',
    alignItems: 'center',
     
    borderRadius: 6,
  },
  kycText: {
    fontSize: 12,
    lineHeight: 16.8,
    borderRadius: 4,
    fontWeight: '400',
    color: '#212121',
    padding:3,
    backgroundColor: '#FDEBD0',
   },
}
);
