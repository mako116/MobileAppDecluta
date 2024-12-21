import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import MoreModal from '@/screens/TabbarMore/MoreModal';

export default function TabLayout() {
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
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: styles.container,
          tabBarActiveTintColor: Colors['light'].tint,
          tabBarActiveTintColors: moreActive && route.name !== 'more/index' ? '#A4A4A4' : Colors['light'].tint, 
          tabBarInactiveTintColor: '#A4A4A4',
          tabBarLabelStyle: styles.label,
          headerShown: false,
        })}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/images/newimages/hom.png')  
                    :  require('../../assets/images/newimages/home (1).png') 
                }
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="myorders/index"
          options={{
            title: 'My Orders',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/images/newimages/task-square.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sell/index"
          options={{
            title: 'Sell',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/images/newimages/add-square.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="message/index"
          options={{
            title: 'Messages',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../assets/images/newimages/message.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="more/index"
          options={{
            title: 'More',
            tabBarIcon: ({ color }) => (
              <TouchableOpacity
                onPress={() => {
                  openModal(); // Open modal on "More" tab press
                }}
              >
                <Image
                  source={moreActive ? require('../../assets/images/newimages/Group 4.png') : require('../../assets/images/newimages/Group 473.png')} 
                  style={{
                    width: 24,
                    height: 24,
                    // tintColor: color,
                  }}
                />
              </TouchableOpacity>
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
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 10,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
