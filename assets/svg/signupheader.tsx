import React from 'react';
import { SvgXml } from 'react-native-svg';

const SignupSvg = () => {
  const svgMarkup = `
    <svg width="176" height="15" viewBox="0 0 176 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_51_2902)">
        <line x1="18" y1="6.5" x2="51" y2="6.5" stroke="#DEBC8E"/>
        <line x1="72" y1="6.5" x2="105" y2="6.5" stroke="#A4A4A4"/>
        <line x1="125" y1="6.5" x2="158" y2="6.5" stroke="#A4A4A4"/>
        <path d="M1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5Z" fill="#DEBC8E" stroke="#DEBC8E"/>
        <path d="M55.25 7.5C55.25 4.04822 58.0482 1.25 61.5 1.25V1.25C64.9518 1.25 67.75 4.04822 67.75 7.5V7.5C67.75 10.9518 64.9518 13.75 61.5 13.75V13.75C58.0482 13.75 55.25 10.9518 55.25 7.5V7.5Z" stroke="#A4A4A4" stroke-width="0.9375"/>
        <path d="M109.25 7.5C109.25 4.04822 112.048 1.25 115.5 1.25V1.25C118.952 1.25 121.75 4.04822 121.75 7.5V7.5C121.75 10.9518 118.952 13.75 115.5 13.75V13.75C112.048 13.75 109.25 10.9518 109.25 7.5V7.5Z" stroke="#A4A4A4" stroke-width="0.9375"/>
        <path d="M162.25 7.5C162.25 4.04822 165.048 1.25 168.5 1.25V1.25C171.952 1.25 174.75 4.04822 174.75 7.5V7.5C174.75 10.9518 171.952 13.75 168.5 13.75V13.75C165.048 13.75 162.25 10.9518 162.25 7.5V7.5Z" stroke="#A4A4A4" stroke-width="0.9375"/>
      </g>
      <defs>
        <clipPath id="clip0_51_2902">
          <rect width="176" height="15" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} style={{justifyContent:"center", marginHorizontal:"13%"}} />;
};

export default SignupSvg;
