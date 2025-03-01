import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loginbanner() {
  const [hasToken, setHasToken] = useState(false);

  // Function to check token
  const checkToken = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setHasToken(!!token); // Efficient way to check if token exists
    } catch (error) {
      console.error('Error reading token:', error);
    }
  }, []);

  // Check token when the app first loads
  useEffect(() => {
    checkToken();
  }, []);

  // Check token when the screen regains focus (user navigates back)
  useFocusEffect(
    useCallback(() => {
      checkToken();
    }, [checkToken])
  );

  if (hasToken) return null;

  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        <Text style={styles.text}>
          Login to DecluttaKing to start buying & selling!
        </Text>
        <TouchableOpacity onPress={() => router.push('/(routes)/login')} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121CC',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    width: 200,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    color: '#fff',
  },
  button: {
    backgroundColor: '#DEBC8E',
    width: 109,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#463E31',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
  },
});
