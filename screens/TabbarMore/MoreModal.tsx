import Mores from '@/styles/MoreModal/MoreModal';
import React from 'react';
import { View, Text, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface MoreModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const modalOptions = [
  {
    label: "Pending Pickups",
    icon: require('../../assets/images/newimages/octicon_package-24.png'),
    badge: 1, // Badge count
  },
  {
    label: "My Wallet",
    icon: require('../../assets/images/newimages/dropwallet.png'),
    walletBalance: "₦75.0k",
  },
  {
    label: "My Profile",
    icon: require('../../assets/images/newimages/user-square.png'),
    route: "/(routes)/Account/MyAccount", // Ensure this route exists and is correct
  },
  {
    label: "My Rewards",
    icon: require('../../assets/images/newimages/gift.png'),
    badge: 1, // Badge count
  },
  {
    label: "Refer and Earn",
    icon: require('../../assets/images/newimages/people.png'),
  },
  {
    label: "Help Center",
    icon: require('../../assets/images/newimages/hugeicons_bot.png'),
  },
];

const MoreModal: React.FC<MoreModalProps> = ({ isModalVisible, toggleModal }) => {
  const router = useRouter(); 

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <Pressable style={Mores.modalBackground} onPress={toggleModal}>
        <View style={Mores.modalContainer}>
          {modalOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={Mores.modalOption}
              onPress={() => {
                toggleModal(); 
                if (option.route) {
                  router.push(option.route); 
                }
              }}
            >
              <Image
                source={option.icon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
              />
              <Text style={Mores.modalText}>{option.label}</Text>
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
              {option.walletBalance && (
                <View style={{ width: 55, justifyContent: "flex-end", alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#212121',
                      fontWeight: '400',
                      lineHeight: 16.8,
                      backgroundColor: "#F5EADC",
                      borderRadius: 4,
                      width: 47,
                      height: 17,
                      textAlign: "center",
                    }}
                  >
                    {option.walletBalance}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

export default MoreModal;