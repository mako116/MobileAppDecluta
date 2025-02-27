import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface TextInputFieldProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "visible-password";
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    style?: object;
    placeholderTextColor?: string;
    multiline?: boolean;
    numberOfLines?: number;
    maxLength?: number;
    editable?: boolean;
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
    editable 
}) => {
    const [focusInput, setFocusInput] = useState({
        email: false,
        firstName: false,
        LastName: false,
        Gender: false,
        Phone: false,
    })
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry} keyboardType={keyboardType} 
                autoCapitalize={autoCapitalize} 
                autoCorrect={autoCorrect} 
                style={[
                    styles.textInput,
                    focusInput.firstName && { borderColor: "#DEBC8E" }
                ]} 
                placeholderTextColor={placeholderTextColor} multiline={multiline} 
                numberOfLines={numberOfLines} 
                maxLength={maxLength} 
                editable={editable}
            />
        </View>
    );
}

export default TextInputField;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        padding: 20,
    },
});