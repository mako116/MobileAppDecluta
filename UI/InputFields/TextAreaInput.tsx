import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface TextAreaFieldProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    placeholderTextColor?: string;
    numberOfLines?: number;
    editable?: boolean;
    paddingBottom?: number;
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
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({    
    placeholder, 
    value, 
    onChangeText, 
    autoCapitalize, 
    autoCorrect, 
     keyboardType, 
    placeholderTextColor, 
    numberOfLines = 5, 
    editable = true,
    paddingBottom  = 50 
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View 
            style={[ 
                styles.container, 
                { borderColor: isFocused ? "#DEBC8E" : "#E9E9E9",  }
            ]}
        >
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                autoCapitalize={autoCapitalize} 
                autoCorrect={autoCorrect} 
                style={[styles.textArea, {paddingBottom: paddingBottom}]} 
                placeholderTextColor={placeholderTextColor} 
                numberOfLines={numberOfLines} 
                editable={editable}
                keyboardType={keyboardType} 
                multiline
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} 
            />
        </View>
    );
}

export default TextAreaField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    textArea: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 14,
        fontFamily: "Proxima Nova",
        textAlignVertical: "top",
    },
});
