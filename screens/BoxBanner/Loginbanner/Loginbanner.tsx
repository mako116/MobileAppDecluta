import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function Loginbanner() {
  const handleLoginPress = () => {
    // Navigate to the login screen with expo-router
    router.push("/(routes)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        <Text style={styles.text}>
          Login to DecluttaKing to start
          buying & selling!
        </Text>

        <TouchableOpacity
          onPress={handleLoginPress} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121CC",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 60
  },
  Row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    width: 200,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#fff"
  },
  button: {
    backgroundColor: "#DEBC8E",
    width: 109,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  buttonText: {
    color: "#463E31",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
  }
});
