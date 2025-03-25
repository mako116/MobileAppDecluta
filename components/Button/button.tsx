import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
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
    onPress,
}: {
    title: string;
    backgroundColor: string;
    borderWidth: number;
    borderColor? :string
    padding?: number
    paddingHorizontal?: number 
    disabled?: boolean
    icon? : React.ReactNode
    flex?: boolean
    onPress: () => void;
}) {
    const { width } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={[
                {
                    paddingHorizontal: paddingHorizontal ? 20 : 0,
                    padding: padding ? 15 : 20,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 6,
                    backgroundColor: disabled ? "#E0E0E0" : backgroundColor, // Set background color dynamically
                    borderWidth: borderWidth ? 1 : 0, // Add border width if specified
                    borderColor: borderColor ? '#E9E9E9' : 'black', // Light border if borderWidth is set
                    gap: icon ? 15 : 0,
                    opacity: disabled ? 0.5 : 1, // Reduce opacity if disabled
                    flex: flex ? 1 : 0,
                }
            ]}
            onPress={!disabled ? onPress : undefined} // Disable onPress if disabled
            disabled={disabled} // Disable button interaction
        >
            {icon}
            <Text style={{
                fontSize: 18,
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
