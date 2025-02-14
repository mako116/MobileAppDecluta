import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const GoBackIcon = () => {
  const navigation = useNavigation(); // Get navigation instance

  const goBack = () => {
    navigation.goBack(); // Navigate back to previous screen
  };

  return (
    <View >
      <TouchableOpacity onPress={goBack} style={styles.button}>
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <Path
            d="M1 8H15M1 8L8 1M1 8L8 15"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoBackIcon;
