import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'; // Compatible icon library
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import MoreModal from '@/screens/TabbarMore/MoreModal';

export default function TabLayout() {
   const [moreActive, setMoreActive] = useState(false); // Track if "More" is active

  const [isModalVisible, setIsModalVisible] = useState(false); // Manage modal visibility

  const openModal = () => {
    setIsModalVisible(true);
    setMoreActive(true); // Set "More" active on modal open
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setMoreActive(!isModalVisible); // Set active status based on modal visibility
  };
  return (
    <>
     <Tabs
  screenOptions={({ route }) => ({
    tabBarStyle: styles.container,
    // tabBarItemStyle: styles.tabItem,
    tabBarActiveTintColor:
      moreActive && route.name !== 'more/index'
        ? '#A4A4A4'
        : Colors['light'].tint, // Active tint conditionally based on moreActive
    tabBarInactiveTintColor: '#A4A4A4',
    tabBarLabelStyle: styles.label,
    headerShown: false,
  })}
>
  <Tabs.Screen
    name="home/index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color }) => (
        <MaterialIcons
          name="home-filled"
          size={24}
          color={moreActive ? '#A4A4A4' : color} // Inactive color when "More" is active
        />
      ),
    }}
  />
  <Tabs.Screen
    name="myorders/index" 
    options={{
      title: 'My Orders',
      tabBarIcon: ({ color }) => (
        <AntDesign
          name="profile"
          size={24}
          color={moreActive ? '#A4A4A4' : color} // Inactive color when "More" is active
        />
      ),
    }}
  />
  <Tabs.Screen
    name="sell/index"
    options={{
      title: 'Sell',
      tabBarIcon: ({ color }) => (
        <Ionicons
          name="add"
          size={20}
          style={[
            styles.featherIcon,
            {
              borderColor: moreActive ? '#A4A4A4' : color,
              color: moreActive ? '#A4A4A4' : color, // Inactive color when "More" is active
            },
          ]}
        />
      ),
    }}
  />
  <Tabs.Screen
    name="message/index"
    options={{
      title: 'Messages',
      tabBarIcon: ({ color }) => (
        <AntDesign
          name="message1"
          size={24}
          color={moreActive ? '#A4A4A4' : color} // Inactive color when "More" is active
        />
      ),
    }}
  />
  <Tabs.Screen
    name="more/index"
    options={{
      title: 'More',
      tabBarIcon: ({ color }) => (
        <Feather
        name="more-horizontal"
        size={22}
        color={moreActive ? Colors['dark'].tint : color}
        style={[
          styles.featherIcon,
          {
            backgroundColor: moreActive
              ? Colors['light'].tint
              : '#fff',
            borderColor: moreActive
              ? Colors['dark'].tint
              : color,
          },
        ]}
        onPress={openModal} // Open modal on press
      />
      ),
    }}
  />
</Tabs>


    {/* Render Modal */}
    {isModalVisible && <MoreModal isModalVisible={isModalVisible} toggleModal={toggleModal} />}

    </>
     
  );
}

const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 1,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical:10
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
  featherIcon: {
    borderWidth: 1.7,   // Adjust border width if necessary
    textAlign:"center",
    paddingVertical:1.4,   // Adjust border radius if needed
  }
});
