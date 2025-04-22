import Crossbad from "@/assets/svg/crossbad";
import { Entypo } from "@expo/vector-icons";
import { Text, TextInput, Image, StyleSheet, View } from "react-native";

interface PhoneInputFieldProps {
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
}

const PhoneNumberInputField: React.FC<PhoneInputFieldProps> = ({
  value,
  onChangeText, 
  error,
}) => {
  const showError = Boolean(error);

  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <View
          style={[
            styles.row,
            { gap: 2 },
            showError && styles.errorBorder,
          ]}
        >
          <Image
            source={require("../../assets/images/newimages/twemoji_flag-nigeria.png")}
            style={styles.customLogo}
          />
          <Text style={styles.callingCode}>+234</Text>
        </View>

        <View
          style={[
            styles.phoneRow,
            showError && styles.errorBorder,
          ]}
        >
          <TextInput
            style={styles.phoneInput}
            value={value}
            onChangeText={onChangeText}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {showError && 
       <View style={styles.Containers}>
       <Crossbad />
      <Text style={styles.errorText}>{error}</Text>
      </View>
     }
    </View>
  );
};

export default PhoneNumberInputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#E9E9E9',
    borderRadius: 5,
  },
  Containers:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
    marginRight:20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 20,
    marginRight: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    borderColor: "#E9E9E9",
    borderRadius: 5,
  },
  phoneRow: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#E9E9E9",
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
  },
  callingCode: {
    marginHorizontal: 5,
    fontSize: 13,
    color: '#212121',
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
  },
  customLogo: {
    marginLeft: 15,
    height: 18,
    width: 18,
    resizeMode: "contain",
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 13,
    backgroundColor: "white",
    color: '#212121',
    fontFamily: "Proxima Nova",
    fontWeight: "500",
  },
  errorText: {
    color: '#FF4D4F',
    fontSize: 12,
    marginTop: 4,
    fontFamily: "Proxima Nova",
    marginLeft: 5,
  },
  errorBorder: {
    borderColor: '#FF4D4F',
  },
});
