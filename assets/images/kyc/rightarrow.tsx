import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type RightarrowProps = {
  color?: string;
  width?: string | number;
  height?: string | number;
  strokeWidth?: string | number;
};

const Rightarrow: React.FC<RightarrowProps> = ({
  color = "#A4A4A4",
  width = 24,
  height = 24,
  strokeWidth = '1.5'
}) => {
  return (
   <View style={{paddingVertical:10,paddingLeft:5}}>
     <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
   </View>
  );
};

const styles = StyleSheet.create({});

export default Rightarrow;
