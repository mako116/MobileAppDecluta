import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

export default function Button({
    title,
    backgroundColor,
    borderWidth,
    onPress,
}: {
    title: string;
    backgroundColor: string;
    borderWidth: string;
    onPress: () => void;
}) {
    const { width } = Dimensions.get("window");

    return (
        <TouchableOpacity
            style={[
                {
                    width:"100%",
                     paddingHorizontal: "10%",
                    height: 50,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "auto",
                    borderRadius: 10,
                    backgroundColor: backgroundColor, // Set background color dynamically
                    borderWidth: borderWidth ? 1 : 0, // Add border width if specified
                    borderColor: borderWidth ? '#E9E9E9' : 'transparent', // Light border if borderWidth is set
                }
            ]}
            onPress={onPress}
        >
            <Text style={{
                fontSize: 15,
                fontWeight: '700',
                textAlign: "center",
                fontFamily: "ProximaNova"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
