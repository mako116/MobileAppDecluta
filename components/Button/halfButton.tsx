import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

export default function HalfButton({
    title,
    backgroundColor,
    borderWidth,
    borderColor,
    onPress,
}: {
    title: string;
    backgroundColor: string;
    borderWidth: string;
    borderColor: string;
    onPress: () => void;
}) {
    const { width } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={[
                {
                    width: width * 0.4, 
                    // paddingHorizontal: "10%",
                    height: 50,
                    gap:10,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    // margin: "auto",
                    borderRadius: 10,
                    backgroundColor: backgroundColor, // Set background color dynamically
                    borderWidth: borderWidth ? 1 : 0, // Add border width if specified
                    borderColor: borderColor, // Light border if borderWidth is set
                }
            ]}
            onPress={onPress}
        >
            <Text style={{
                fontSize: 14,
                fontWeight: '400',
                textAlign: "center",
                fontFamily: "Poppins"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
