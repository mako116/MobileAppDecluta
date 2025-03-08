import { SignUpStyles } from "@/styles/Signup/signup.style"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import { Image, Text, TouchableOpacity } from "react-native"

const SignUpWithEmail: React.FC = () => {
    const handlePhonePush =()=>{
        router.push("/(routes)/emailRegister");
    }
    return (
        <TouchableOpacity onPress={handlePhonePush} style={SignUpStyles.socialButton}>
            <Image source={require('../../../../assets/images/material-symbols_mail.png')} style={{ height: 22,width: 22 }} />
            <Text style={{ color: "#000000", lineHeight: 19.6, fontSize: 16, fontWeight: '400' , fontFamily:"Proxima Nova"}}>Continue with Email</Text>
        </TouchableOpacity>
    )
}

export default SignUpWithEmail;