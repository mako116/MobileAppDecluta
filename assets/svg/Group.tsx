import React from 'react';
import { Svg, Path } from 'react-native-svg';

const MoreIcons = ({ active }: { active: boolean }) => (
    <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
      fill={active ? "#DEBC8E" : "#fff"} // Conditional fill for active state
      stroke={active ? "#DEBC8E" : ""} // Conditional stroke for active state
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.4965 12H16.5054"
      stroke="#A4A4A4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.4955 12H12.5045"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.49451 12H8.50349"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MoreIcons;
