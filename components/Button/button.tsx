import { View, Text, TouchableOpacity, DimensionValue } from 'react-native';
import React from 'react';

export default function Button({
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
}: {
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
    width?: DimensionValue;
}) {
    return (
        <TouchableOpacity
            style={[
                {
                    paddingHorizontal: paddingHorizontal ?? 20,
                    padding: padding ?? 15,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 6,
                    backgroundColor: disabled ? "#E0E0E0" : backgroundColor,
                    borderWidth: borderWidth ?? 0,
                    borderColor: borderColor ?? '#E9E9E9',
                    gap: icon ? 15 : 0,
                    opacity: disabled ? 0.5 : 1,
                    flex: flex ? 1 : 0,
                    width: width ?? '100%',
                    alignSelf: "center",
                }
            ]}
            onPress={!disabled ? onPress : undefined}
            disabled={disabled}
        >
            {icon}
            <Text style={{
                fontSize: fontSize ?? 18,
                fontWeight: '400',
                textAlign: "center",
                fontFamily: "Proxima Nova",
                color: disabled ? "#A0A0A0" : "#000",
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
