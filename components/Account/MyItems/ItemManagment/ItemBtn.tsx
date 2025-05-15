import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface MenuItemProps {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  onPress: () => void;
  showDivider?: boolean;
}

const ItemBtn: React.FC<MenuItemProps> = ({ 
  title, 
  icon, 
  onPress, 
  showDivider = false 
}) => {
  return (
    <>
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <View style={styles.leftContent}>
          <Feather name={icon} size={20} color="#222" style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#8e8e93" />
      </TouchableOpacity>
      
      {showDivider && <View style={styles.divider} />}
    </>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 4,
    borderRadius: 8,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginLeft: 16,
  },
});

export default ItemBtn;