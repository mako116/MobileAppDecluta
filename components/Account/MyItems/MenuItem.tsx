import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  badgeCount?: number;
  onPress?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  icon, 
  label, 
  badgeCount = 0,
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={styles.item} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={22} color="#333" />
        </View>
        <Text style={styles.label}>{label}</Text>
        {badgeCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>
      <View style={styles.rightContent}>
   
        <Ionicons name="chevron-forward" size={18} color="#ccc" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f0f0f0',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight:9
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
