import BackButton from "@/assets/images/kyc/LeftArrow";
import CartIcon from "@/assets/svg/CartIcon";
import HamburgerIcon from "@/assets/svg/HamburgerIcon";
import NotificationIcon from "@/assets/svg/NotificationIcon";
import { StyleSheet, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const ProductHeader: React.FC = () => {
    return(
        <View style={[ styles.row, { backgroundColor: 'white', paddingHorizontal: 16, paddingTop: 60 } ]} >
            <BackButton />
            <View style={[ styles.inputContainer ]} >
                <TextInput 
                    style={{ flex: 1 }}
                    placeholder="I'm looking for..."
                />
            </View>
            <View style={[ styles.row ]} >
                <HamburgerIcon />
                <NotificationIcon />
                <CartIcon />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        
    },
    inputContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E9E9E9',
        backgroundColor: '#F9F9F9',
        padding: 10
    }
})

export default ProductHeader;