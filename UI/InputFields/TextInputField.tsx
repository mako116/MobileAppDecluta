import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface TextInputFieldProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 
        | "default" 
        | "email-address" 
        | "numeric" 
        | "phone-pad" 
        | "ascii-capable" 
        | "numbers-and-punctuation" 
        | "url" 
        | "number-pad" 
        | "name-phone-pad" 
        | "decimal-pad" 
        | "twitter" 
        | "web-search" 
        | "visible-password";
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    style?: object;
    placeholderTextColor?: string;
    multiline?: boolean;
    numberOfLines?: number;
    maxLength?: number;
    editable?: boolean;
    icon?: JSX.Element;
}

const TextInputField: React.FC<TextInputFieldProps> = ({    
    placeholder, 
    value, 
    onChangeText, 
    secureTextEntry, 
    keyboardType, 
    autoCapitalize, 
    autoCorrect, 
    style, 
    placeholderTextColor, 
    multiline, 
    numberOfLines, 
    maxLength, 
    editable, 
    icon
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View 
            style={[
                styles.container, 
                { borderColor: isFocused ? "#DEBC8E" : "#E9E9E9" } // Change border color on focus
            ]}
        >

            {/* Text Input */}
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry && !isPasswordVisible} 
                keyboardType={keyboardType} 
                autoCapitalize={autoCapitalize} 
                autoCorrect={autoCorrect} 
                style={[styles.textInput, style]} 
                placeholderTextColor={placeholderTextColor} 
                multiline={multiline} 
                numberOfLines={numberOfLines} 
                maxLength={maxLength} 
                editable={editable}
                onFocus={() => setIsFocused(true)} // Set focus state
                onBlur={() => setIsFocused(false)} // Reset on blur
            />

            {/* Toggle Password Visibility Icon */}
            {secureTextEntry && (
                <TouchableOpacity 
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
                    style={styles.eyeIcon}
                >
                    <AntDesign 
                        name={isPasswordVisible ? "eye" : "eyeo"} 
                        size={20} 
                        color="gray" 
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

export default TextInputField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 5,
        fontSize: 16,
        fontFamily: "Proxima Nova",
    },
    eyeIcon: {
        padding: 10,
    },
});
