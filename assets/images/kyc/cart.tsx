import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const Cart = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect width="20" height="20" rx="10" fill="#F5EADC" />
      <Path
        d="M5 5H5.87C6.41 5 6.835 5.465 6.79 6L6.375 10.98C6.305 11.795 6.95 12.495 7.77 12.495H13.095C13.815 12.495 14.445 11.905 14.5 11.19L14.77 7.44C14.83 6.61 14.2 5.935 13.365 5.935H6.91"
        stroke="#212121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.125 15C12.4702 15 12.75 14.7202 12.75 14.375C12.75 14.0298 12.4702 13.75 12.125 13.75C11.7798 13.75 11.5 14.0298 11.5 14.375C11.5 14.7202 11.7798 15 12.125 15Z"
        stroke="#212121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.125 15C8.47018 15 8.75 14.7202 8.75 14.375C8.75 14.0298 8.47018 13.75 8.125 13.75C7.77982 13.75 7.5 14.0298 7.5 14.375C7.5 14.7202 7.77982 15 8.125 15Z"
        stroke="#212121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 8H14.5"
        stroke="#212121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Cart;
