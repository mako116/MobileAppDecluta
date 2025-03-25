import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const CheckIcon = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" >
        <Rect width="14" height="14" rx="7" fill="#DEBC8E"/>
        <Path d="M4 6.95L5.95 8.9L9.85 5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default CheckIcon