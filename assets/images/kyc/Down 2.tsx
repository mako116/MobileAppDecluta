import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Down2 = () => {
  return (
    <View style={styles.container}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 9L12.7809 14.3306C12.3316 14.7158 11.6684 14.7158 11.2191 14.3306L5 9"
          stroke="#A4A4A4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Down2;
