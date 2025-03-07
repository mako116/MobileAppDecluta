import { SignUpStyles } from "@/styles/Signup/signup.style"
import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

const TermsAndPolicyComponent: React.FC = () => {
    return (
        <View style={{ paddingVertical: 20, flexDirection: "row", alignItems: "center", margin: "auto", gap: 10 }}>
            <TouchableOpacity onPress={() => router.push("/(routes)/Terms")}>
            <Text
            style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>
                Terms of use
                </Text>
                </TouchableOpacity>
            <View style={SignUpStyles.separator2} />
            <TouchableOpacity onPress={() => router.push("/(routes)/privacyPolicy")}>
            <Text style={{ color: "#DEBC8E", fontWeight: "700", fontSize: 16, lineHeight: 22.4 ,fontFamily:'Helvetica Neue'}}>Privacy Policy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TermsAndPolicyComponent;