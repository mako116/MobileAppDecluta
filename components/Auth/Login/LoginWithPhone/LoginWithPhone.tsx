import { SignUpStyles } from "@/styles/Signup/signup.style"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

const LoginWithPhone: React.FC = () => {
    const handlePhonePush =()=>{
        router.push("/(routes)/PhoneLogin");
    }
    return (
        <TouchableOpacity onPress={handlePhonePush} style={SignUpStyles.socialButton}>
            <MaterialIcons name="phone-android" size={22} color="black" />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 16, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Phone</Text>
        </TouchableOpacity>
    )
}

export default LoginWithPhone;