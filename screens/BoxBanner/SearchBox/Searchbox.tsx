import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
export default function Searchbox() {
  const searchScreen = () =>{
    router.push("/(routes)/SearchPages/SearchBoard")
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
        onPress={searchScreen}
          style={styles.input}
          placeholder="I'm looking for...."
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
<Feather name="search" size={24} color="black" /> 
</TouchableOpacity>     
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingVertical: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '100%',
    height:56,
    color:"#A4A4A4",
    maxWidth: 400, // Adjust width as needed
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    
  },
  icon: {
    marginLeft: 10,
  },
});
