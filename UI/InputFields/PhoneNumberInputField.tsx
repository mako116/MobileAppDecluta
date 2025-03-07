import { Text, TextInput } from "react-native";
import { Image, StyleSheet, View } from "react-native"

interface PhoneInputFieldProps {
    value?: string;
    onChangeText?: (text: string) => void;
}

const PhoneNumberInputField: React.FC<PhoneInputFieldProps> = ({
    value,
    onChangeText
}) => {
    return(
        <View style={styles.phoneContainer}>
            <Image
            source={require("../../assets/images/newimages/twemoji_flag-nigeria.png")} 
            style={styles.customLogo}
            />
            <Text style={styles.callingCode}>+234</Text>
            <TextInput
                style={styles.phoneInput}
                // keyboardType="numeric"
                value={value}
                onChangeText={onChangeText}
                placeholder="Phone number"
                keyboardType= "phone-pad"
            />
        </View>
    )
}

export default PhoneNumberInputField;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    marginVertical:10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 5
  },
  callingCode: {
    marginHorizontal: 10,
    fontSize: 13,
    color: '#212121',
    borderRightWidth: 1,
    borderColor: "#212121",
    paddingRight: 15,
    fontFamily:"Helvetica Neue",
    lineHeight:18.2,
    fontWeight:"500"
  },
  flagButton: {
    marginLeft: 8,
  },
  customLogo: {
   marginLeft:15,
    height: 18,
    width: 18, // Adjust size of the custom logo
    resizeMode: "contain",
  },
  phoneInput: {
    height: 55,
    borderRadius: 3,
    
    fontSize: 14,
    backgroundColor: "white",
     color: '#212121',
    paddingRight: 15,
    fontFamily:"Proxima Nova",
    lineHeight:14,
    fontWeight:"500"
  },
});