import Cube from '@/assets/images/cart/cube';
import Ionlocate from '@/assets/images/cart/ionlocate';
import Minus from '@/assets/images/cart/minus';
import Plus from '@/assets/images/cart/Plus';
import Down2 from '@/assets/images/kyc/Down 2';
import React, { useState } from 'react';
import { BlurView } from '@react-native-community/blur'; // For bare React Native

import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Notification = {
  id: string;
  title: string;
  description: string;
  image: any;
  time: string;
  tag: string;
  action: string | null;
  price: string;
  count: number;
};

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Samsung Galaxy A0...',
    description: 'Used',
    image: require('../../../assets/images/speakks.png'),
    time: 'Today 20:28',
    tag: 'Challenge, Ibadan, Oyo',
    action: null,
    price: '₦75,000.00',
    count: 1,
  },
  {
    id: '2',
    title: 'LG Home Theatre',
    description: 'Used',
    image: require('../../../assets/images/speakks.png'),
    time: 'Today 20:28',
    tag: 'Challenge, Ibadan, Oyo',
    action: null,
    price: '₦75,000.00',
    count: 1,
  },
];

const Alling: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<Notification | null>(null);

  const handleIncrease = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setNotifications((prev) => {
      const updatedNotifications = prev.map((item) => {
        if (item.id === id) {
          if (item.count === 1) {
            // Show modal for confirmation if count will become zero
            setItemToRemove(item);
            setShowModal(true);
            return item; // Do not update count yet
          } else {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      });
      return updatedNotifications;
    });
  };
  
  const handleRemove = () => {
    setNotifications((prev) => prev.filter((item) => item.id !== itemToRemove?.id));
    setShowModal(false);
    setItemToRemove(null);
  };

  const handleCancel = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View  >
      {notifications.map((item) => (
        <View key={item.id} style={styles.main}>
          <View style={styles.notificationContents}>
           <View style={styles.notificationContent}>
           <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                {item.title.length > 20 ? `${item.title.substring(0, 10)}...` : item.title}
              </Text>
              <View style={{flexDirection:"row",alignItems:"center", gap:2}}>
                <Cube/>
              <Text style={styles.description}>{item.description}</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center", gap:2}}>
                <Ionlocate/>
             <Text style={styles.description}>
              {item.tag.length > 30 ? `${item.tag.substring(0, 10)}...` : item.tag}
               </Text>
             </View>
              <Text style={{color:"#A4A4A4", fontSize:12, fontWeight:"400", lineHeight:16.8}}>Remove</Text>
            </View>
           </View>
            <View style={styles.textContainers}>
              <Text style={styles.title}>{item.price}</Text>
              <Text style={{color:"#009217",fontWeight:"400",alignItems:"flex-end", fontSize:12,lineHeight:16.8,fontFamily:"Helvetica Neue", textAlign:"right"}}>(Save 15%)</Text>
              <View style={styles.counterContainer}>
                <TouchableOpacity
                  onPress={() => handleDecrease(item.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>
                    <Minus/>
                  </Text>
                </TouchableOpacity>
                <Text style={styles.countText}>{item.count}</Text>
                <TouchableOpacity
                  onPress={() => handleIncrease(item.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>
                    <Plus/>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    <View>
    <View style={styles.header}>
        <Text style={styles.headerText}>People also added these to cart</Text>
        <TouchableOpacity onPress={toggleDropdown}>
          <Down2 /> {/* Replace with your dropdown icon */}
        </TouchableOpacity>
      </View>

      {/* Dropdown Content */}
      {isDropdownVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownItem}>Item 1</Text>
          <Text style={styles.dropdownItem}>Item 2</Text>
          <Text style={styles.dropdownItem}>Item 3</Text>
        </View>
      )}
    </View>
      {/* Modal for Removing Item */}
      {showModal && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={handleCancel}
        >
          <View style={styles.modalOverlay}>
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="light" // You can change this to "dark" or "xlight"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Are you sure you want to remove this item?
              </Text>
              <View style={styles.modalActions}>
                <TouchableOpacity onPress={handleRemove} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownContent: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    elevation: 3, // For a subtle shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
     backgroundColor: '#fff',
     borderWidth:1,
     borderRadius:4,
     borderColor:"#E9E9E9"
  },
  button: {
   
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color:"#212121",
    fontSize: 14,
    lineHeight:19.6,
    fontFamily:"Proxima Nova",
    fontWeight: '400',
  },
  countText: {
     color:"#212121",
     fontSize: 14,
     lineHeight:19.6,
     fontFamily:"Proxima Nova",
     fontWeight: '400',
  },
  main: {
    marginTop: 15,
    paddingHorizontal: 13,
  },
  notificationContent: {
    flexDirection: 'row',
    
  },
  notificationContents: {
    flexDirection: 'row',
    // paddingVertical: 4,
   
    borderBottomWidth:1,
    justifyContent:"space-between",
    borderColor:"#E9E9E9"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    paddingLeft: 10,
    paddingBottom: '3%',
    gap:2
    // alignItems:"center"
    
  },
  textContainers: {
    paddingLeft: 10,
    paddingBottom: '3%',
    alignItems:"flex-end"
  },
  title: {
    fontWeight: '700',
    fontFamily:"Helvetica Neue",
    fontSize:14,
    lineHeight:19.6
  },
  description: {
    lineHeight: 19.6,
    fontSize: 12,
    fontWeight:"400",
    fontFamily:"Proxima Nova",

   },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21212199',
   },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E9E9E9',
    marginHorizontal: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Alling;
