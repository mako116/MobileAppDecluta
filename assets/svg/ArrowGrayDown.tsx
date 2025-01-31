import React from 'react';
import { SvgXml } from 'react-native-svg';

const ArrowGrayDown = () => {
  const svgMarkup = `
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0.999999L8.78095 6.33062C8.33156 6.7158 7.66844 6.7158 7.21905 6.33062L1 1" stroke="#A4A4A4" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default ArrowGrayDown;
