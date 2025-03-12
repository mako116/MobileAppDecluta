import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

export default function Button({
    title,
    backgroundColor,
    borderWidth,
    borderColor,
    onPress,
}: {
    title: string;
    backgroundColor: string;
    borderWidth: number;
    borderColor? :string
    onPress: () => void;
}) {
    const { width } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={[
                {
                    paddingHorizontal: 20,
                    padding: 20,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 6,
                    backgroundColor: backgroundColor, // Set background color dynamically
                    borderWidth: borderWidth ? 1 : 0, // Add border width if specified
                    borderColor: borderColor ? '#E9E9E9' : 'black', // Light border if borderWidth is set
                }
            ]}
            onPress={onPress}
        >
            <Text style={{
                fontSize: 15,
                fontWeight: '400',
                textAlign: "center",
                fontFamily: "Proxima Nova"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
