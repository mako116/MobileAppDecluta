import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const MenuFlagIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path 
            d="M3.33337 12.4993C3.33337 12.4993 4.16671 11.666 6.66671 11.666C9.16671 11.666 10.8334 13.3327 13.3334 13.3327C15.8334 13.3327 16.6667 12.4993 16.6667 12.4993V2.49935C16.6667 2.49935 15.8334 3.33268 13.3334 3.33268C10.8334 3.33268 9.16671 1.66602 6.66671 1.66602C4.16671 1.66602 3.33337 2.49935 3.33337 2.49935V12.4993ZM3.33337 12.4993V18.3327" stroke="#212121" strokeLinecap="round" strokeLinejoin="round"
        />
    </Svg>
  )
}

export default MenuFlagIcon