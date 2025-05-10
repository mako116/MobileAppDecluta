import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface FilterTabProps {
  id: string;
  label: string;
  active: boolean;
  count: number;
  onPress: (id: string) => void;
}

const FilterTab: React.FC<FilterTabProps> = ({ id, label, active, count, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.filterTab, active && styles.activeFilterTab]}
      onPress={() => onPress(id)}
    >
      <Text style={[styles.filterTabText, active && styles.activeFilterTabText]}>{label}</Text>
    </TouchableOpacity>
    {count > 0 && (
      <View style={styles.countBadge}>
        <Text style={styles.countBadgeText}>{count}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 8,
    backgroundColor:"red",
    borderRadius: 2,
  },
  filterTab: {
    paddingHorizontal: 26,
    paddingVertical: 8,
    borderRadius: 2,
    // backgroundColor: '#F3F4F6',
  },
  activeFilterTab: {
    backgroundColor: '#debc8e',
  },
  filterTabText: {
    fontSize: 14,
  },
  activeFilterTabText: {
    fontWeight: '500',
  },
  countBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: -8,
    right: -4,
  },
  countBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});

export default FilterTab;