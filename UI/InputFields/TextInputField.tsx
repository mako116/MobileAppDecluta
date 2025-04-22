import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Crossbad from "@/assets/svg/crossbad";

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
    height?: number
    icon?: JSX.Element;
    symbol?: string;  // Now it's a string (currency symbol)
    error?: string;

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
    height, 
    symbol,
    icon,
    error
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showError = Boolean(error);

    return (
        <View>
            
        <View 
            style={[
                styles.container, 
                { borderColor: isFocused ? "#DEBC8E" : "#E9E9E9", height: height }, // Change border color on focus
                showError && styles.errorBorder,
            ]}
        >
            {/* Currency Symbol (Display only if the symbol is provided) */}
            {symbol && (
                <Text style={styles.currencySymbol}>{symbol}</Text>
            )}

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
        {showError && 
                   <View style={styles.Containers}>
                   <Crossbad />
                  <Text style={styles.errorText}>{error}</Text>
                  </View>
                 }
        </View>
    );
}

export default TextInputField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    textInput: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 5,
        fontSize: 14,
        fontFamily: "Proxima Nova",
    },
    eyeIcon: {
        padding: 10,
    },
    Containers:{
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom:10,
        // marginTop:5,
        marginRight:20
      },
    currencySymbol: {
        color: "black", 
        fontSize: 16, 
        marginRight: 5,
        marginVertical:"auto"
    },
    errorText: {
        color: '#FF4D4F',
        fontSize: 12,
        marginTop: 4,
        fontFamily: "Proxima Nova",
        lineHeight:19,
        marginLeft: 5,
      },
      errorBorder: {
        borderColor: '#FF4D4F',
      },
});
