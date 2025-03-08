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
          <View style={[ 
            styles.row, 
            {
              borderRightWidth: 1,
              borderColor: "#212121",
            } 
            ]} >
            <Image
            source={require("../../assets/images/newimages/twemoji_flag-nigeria.png")} 
            style={styles.customLogo}
            />
            <Text style={styles.callingCode}>+234</Text>
          </View>
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
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
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
    marginHorizontal: 5,
    fontSize: 13,
    color: '#212121',
    fontFamily:"Helvetica Neue",
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
    flex: 1,
    padding: 16,
    fontSize: 13,
    backgroundColor: "white",
    color: '#212121',
    fontFamily:"Proxima Nova",
    fontWeight:"500"
  },
});