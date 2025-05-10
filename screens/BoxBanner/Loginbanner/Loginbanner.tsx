import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useFocusEffect, router } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Loginbanner() {
  const res = useSelector((state: RootState) => state.auth.userData);
  const token = useSelector((state: RootState) => state.auth.token); // Get token from Redux

  // Redirect if token exists
  useEffect(() => {
    if (token) return;
  }, [token]);

  useFocusEffect(
    React.useCallback(() => {
      if (token) return;
    }, [token])
  );

  if (token) return null; // Hide component if token exists

  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        <Text style={styles.text}>
          Login/Signup to DecluttaKing to start buying & selling!
        </Text>
        <TouchableOpacity onPress={() => router.push('/(routes)/login')} style={styles.button}>
          <Text style={styles.buttonText}>Login/Signup</Text>
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
    fontFamily: 'ProximaNovaR',
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

    fontSize: 14,
    lineHeight: 19.6,
    fontFamily: 'ProximaNovaR',
  },
});
