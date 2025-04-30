import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Expo Vector Icons

interface LogoutButtonProps {
  onPress: () => void;
}

export const LogOut: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <MaterialIcons name="logout" size={20} color="#dc3545" />
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
  borderWidth:0.7,
    borderColor:'#ddd',
    width: '100%',
    borderRadius:4

  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
    fontWeight: '400'
  }
});