  import Mores from '@/styles/MoreModal/MoreModal';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Modal, Button,   TouchableOpacity, Pressable } from 'react-native';

interface MoreModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const MoreModal: React.FC<MoreModalProps> = ({ isModalVisible ,toggleModal}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <Pressable
          style={Mores.modalBackground}
          onPress={toggleModal} // Close modal on background press
        >
          <View style={Mores.modalContainer}>
            {/* Content of the modal */}
            <TouchableOpacity
              style={[Mores.modalOption, { gap: 0 }]}
              onPress={toggleModal}
            >
              <Ionicons name="cube-outline" size={15} color="black" />
              <Text style={[Mores.modalText, { marginRight: 10 }]}>
                Pending Pickups
              </Text>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#E42527',
                }}
              >
                <Text
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 9,
                    color: '#fff',
                    fontWeight: '400',
                  }}
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[Mores.modalOption, { gap: 5 }]} onPress={toggleModal}>
              <AntDesign name="wallet" size={20} color="black" />
              <Text style={Mores.modalText}>My Wallet</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#212121',
                  fontWeight: '400',
                  lineHeight: 16.8,
                  backgroundColor:"#F5EADC",
                  padding:5,
                  borderRadius:8
                }}
              >
                ₦75.0k
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Mores.modalOption} onPress={toggleModal}>
              <FontAwesome5 name="user-circle" size={20} color="black" />
              <Text style={Mores.modalText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Mores.modalOption, { gap: 5 }]} onPress={toggleModal}>
              <MaterialCommunityIcons
                name="gift-outline"
                size={20}
                color="black"
              />
              <Text style={Mores.modalText}>My Rewards</Text>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#E42527',
                }}
              >
                <Text
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 9,
                    color: '#fff',
                    fontWeight: '400',
                  }}
                > 
                  1
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Mores.modalOption} onPress={toggleModal}>
              <FontAwesome5 name="users" size={20} color="black" />
              <Text style={Mores.modalText}>Refer and Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Mores.modalOption} onPress={toggleModal}>
              <MaterialCommunityIcons
                name="robot-excited-outline"
                size={20}
                color="black"
              />
              <Text style={Mores.modalText}>Help Center</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
  );
};



export default MoreModal;
