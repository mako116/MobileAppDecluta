import BackButton from "@/assets/images/kyc/LeftArrow";
import CartIcon from "@/assets/svg/CartIcon";
import HamburgerIcon from "@/assets/svg/HamburgerIcon";
import NotificationIcon from "@/assets/svg/NotificationIcon";
import Menu from "@/components/ProductComponents/Menu";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const ProductHeader: React.FC = () => {
      const [isModalVisible, setIsModalVisible] = useState(false); // Manage modal visibility
      const [moreActive, setMoreActive] = useState(false);
      const openModal = () => {
        setIsModalVisible(true);
        setMoreActive(true); // Set "More" active on modal open
      };
    
      const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
        setMoreActive(!isModalVisible); // Set active status based on modal visibility
      };
    return(
        <View>
            <View style={[ styles.row, { backgroundColor: 'white', paddingHorizontal: 16, paddingBottom: 10 } ]} >
                <BackButton />
                <View style={[ styles.inputContainer ]} >
                    <TextInput 
                        style={{ flex: 1 }}
                        placeholder="I'm looking for..."
                    />
                </View>
                <View style={[ styles.row ]} >
                    <TouchableOpacity onPress={openModal} >
                        <HamburgerIcon />
                    </TouchableOpacity>
                    <NotificationIcon />
                    <CartIcon />
                </View>
            </View>
            {/* Render Modal */}
        {isModalVisible && <Menu isModalVisible={isModalVisible} toggleModal={toggleModal} />}
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