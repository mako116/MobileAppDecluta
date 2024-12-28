import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const Search = () => {
  return (
    <View style={styles.iconContainer}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="11" cy="11" r="8" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16.5 16.958L21.5 21.958" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
