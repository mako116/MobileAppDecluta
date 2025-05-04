import { View, Text, TouchableOpacity, ViewStyle, DimensionValue } from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  backgroundColor: string;
  borderWidth: number;
  borderColor?: string;
  padding?: number;
  paddingHorizontal?: number;
  disabled?: boolean;
  fontSize?: number;
  icon?: React.ReactNode;
  flex?: boolean;
  onPress: () => void;
  width?: DimensionValue; // Accepts number or string (e.g. '100%')
};

export default function BoxButton({
  title,
  backgroundColor,
  borderWidth,
  borderColor,
  padding,
  paddingHorizontal,
  icon,
  disabled,
  flex,
  fontSize,
  onPress,
  width,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: paddingHorizontal ?? 15,
        padding: padding ?? 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: disabled ? '#E0E0E0' : backgroundColor,
        borderWidth: borderWidth ?? 0,
        borderColor: borderColor ?? '#E9E9E9',
        gap: icon ? 15 : 0,
        opacity: disabled ? 0.5 : 1,
        flex: flex ? 1 : 0,
        width: width ?? 'auto',
        alignSelf: 'center', // helps with centering the button if width is not 100%
      }}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      {icon}
      <Text
        style={{
          fontSize: fontSize ?? 16,
          fontWeight: '400',
          textAlign: 'center',
          fontFamily: 'Proxima Nova',
          color: disabled ? '#A0A0A0' : '#000',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
