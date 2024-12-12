import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router'; // Import Redirect from expo-router
import LottieView from 'lottie-react-native';

export default function More() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Use useEffect to simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds (simulating loading)
    }, 1500); // Adjust time as needed

    // Cleanup the timeout if the component is unmounted before the timer is done
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Show a loading screen while waiting to redirect
    return (
      <View style={styles.loadingContainer}>
        <LottieView
        source={{ uri: 'https://lottie.host/21a8a60c-9138-4223-bd08-116521b66149/6WwzwgIlXf.lottie' }}
        autoPlay
        loop
        style={{ width: 50, height: 50 ,}}
       />
       </View>
    );
  }

  // Redirect to the desired page after loading
  return <Redirect href={"/(tabs)/home"} />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can customize the background color
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
});
