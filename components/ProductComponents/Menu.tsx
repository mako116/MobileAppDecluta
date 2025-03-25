import { View, Text, Modal, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MenuStyle from '@/styles/ProductScreenStyle/MenuStyles';
import MainHomeIcon from '@/assets/svg/MainHomeIcon';
import MenuFlagIcon from '@/assets/svg/MenuFlagIcon';
import MenuShareIcon from '@/assets/svg/MenuShareIcon';
import MenuMessageIcon from '@/assets/svg/MenuMessageIcon';

const modalOptions = [
    {
        label: "Home",
        icon: MainHomeIcon, // Reference SVG directly
        isSvg: true,
        route: "HomeScreen",
    },
    {
        label: "Messages",
        icon: MenuMessageIcon,
        isSvg: true,
        route: "MessagesScreen",
        badge: 2,
    },
    {
        label: "Saved Items",
        icon: require('../../assets/images/newimages/user-square.png'),
        // isSvg: true,
        route: "SavedItemsScreen",
    },
    {
        label: "Sell an Item",
        icon: require('../../assets/images/newimages/gift.png'),
        // isSvg: true,
        route: "SellItemScreen",
    },
    {
        label: "App Feedback",
        icon: require('../../assets/images/newimages/people.png'),
        // isSvg: true,
        route: "FeedbackScreen",
    },
    {
        label: "Share",
        icon: MenuShareIcon,
        isSvg: true,
        route: "ShareScreen",
        earn: "Earn rewards"
    },
    {
        label: "Report",
        icon: MenuFlagIcon,
        isSvg: true,
        route: "ReportScreen",
    },
];

const Menu = (
    { 
        isModalVisible, 
        toggleModal 
    }: {
        isModalVisible: boolean;
        toggleModal: () => void;
    }
) => {
    const navigation = useNavigation();

    const handleNavigation = (route: string) => {
        toggleModal();
        navigation.navigate(route as never);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <Pressable style={MenuStyle.modalBackground} onPress={toggleModal}>
                <View style={MenuStyle.modalContainer}>
                    {modalOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={MenuStyle.modalOption}
                            onPress={() => handleNavigation(option.route)}
                        >
                            {/* Handle SVG and Image icons separately */}
                            {option.isSvg ? (
                                <option.icon />
                            ) : (
                                <Image
                                    source={option.icon}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: "contain",
                                    }}
                                />
                            )}

                            <Text style={MenuStyle.modalText}>{option.label}</Text>

                            {option.badge && (
                                <View
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: 50,
                                        backgroundColor: '#E42527',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 9,
                                            color: '#fff',
                                            fontWeight: '400',
                                        }}
                                    >
                                        {option.badge}
                                    </Text>
                                </View>
                            )}

                            {option.earn && (
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: '#E42527',
                                            fontWeight: '400',
                                            lineHeight: 16.8,
                                            textAlign: "center",
                                        }}
                                    >
                                        {option.earn}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </Pressable>
        </Modal>
    )
}

export default Menu;
