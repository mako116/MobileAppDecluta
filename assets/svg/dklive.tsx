import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect, Path } from "react-native-svg";

const Dklive = () => {
  return (
    <View style={styles.container}>
      <Svg width="66" height="53" viewBox="0 0 66 53" fill="none">
        <Rect x="1.35" y="12.15" width="39.3" height="39.3" rx="19.65" stroke="#212121" strokeWidth="2.7" />
        <Rect x="11.3501" y="21.8" width="20" height="20" rx="10" fill="#E42527" />
        <Rect x="20.7002" width="45" height="21.6" rx="7.2" fill="#FCEAE8" />
        <Path
          d="M29.0041 15.8V5.80405H31.2021V13.952H36.0741V15.8H29.0041ZM37.3029 15.8V5.80405H39.5009V15.8H37.3029ZM49.3978 5.80405L46.0798 15.8H43.6018L40.3538 5.80405H42.6218L44.8478 12.832H44.8758L47.1298 5.80405H49.3978ZM50.2502 15.8V5.80405H57.7262V7.65205H52.4482V9.79405H57.2922V11.502H52.4482V13.952H57.8382V15.8H50.2502Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dklive; 
