import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TransactionHeader = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="#1F2937" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Transaction History</Text>
    <View style={styles.headerRight}>
      <TouchableOpacity style={styles.headerIcon}>
        <Ionicons name="options-outline" size={24} color="#1F2937" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerIcon}>
        <Ionicons name="notifications-outline" size={24} color="#1F2937" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerIcon}>
        <Ionicons name="cart-outline" size={24} color="#1F2937" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingTop: 50,

  },
  headerTitle: {
    fontSize: 18,
  fontFamily:"HelveticaNeueBold",
    color: '#1F2937',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
});

export default TransactionHeader;