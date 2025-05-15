import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs, usePathname, router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreModal from '@/screens/TabbarMore/MoreModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const auth = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  
  // Check if current path is the sell page
  const isOnSellPage = pathname === '/sell' || pathname === '/sell/index';
  
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };
    
    checkAuthStatus();
  }, [auth]); 
  
  const openModal = () => {
    if (isLoggedIn) {
      setIsModalVisible(true);
      setMoreActive(true);
    } else {
      // Redirect to login if not logged in
      router.push("/(routes)/login");
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setMoreActive(!isModalVisible);
  };
  
  // Handle auth-required tab navigation
  const handleProtectedTabPress = (e: any) => {
    if (!isLoggedIn) {
      // Prevent default navigation and redirect to login
      e.preventDefault();
      router.push("/(routes)/login");
    }
  };
  
  // If we're on the sell page, don't show the tab bar
  if (isOnSellPage) {
    return (
      <Tabs
        screenOptions={{
          tabBarStyle: { display: 'none' },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="home/index" />
        <Tabs.Screen name="myorders/index" />
        <Tabs.Screen name="sell/index" />
        <Tabs.Screen name="message/index" />
        <Tabs.Screen name="more/index" />
      </Tabs>
    );
  }
  
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: styles.container,
          tabBarActiveTintColor: Colors['light'].tint,
          tabBarInactiveTintColor: '#A4A4A4',
          tabBarLabelStyle: styles.label,
          headerShown: false,
        })}
      >
        {/* Home tab - accessible to all users */}
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/images/newimages/hom.png')  
                    : require('../../assets/images/newimages/home (1).png') 
                }
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
        />
        
        {/* All protected tabs with auth check */}
        <Tabs.Screen
          name="myorders/index"
          options={{
            title: 'My Orders',
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/images/tab/task-square.png')  
                    : require('../../assets/images/newimages/task-square.png') 
                }               
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
          listeners={{
            tabPress: handleProtectedTabPress
          }}
        />

        <Tabs.Screen
          name="sell/index"
          options={{
            title: 'Sell',
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/images/tab/Frame 648183.png')  
                    : require('../../assets/images/tab/Frame 648183.png') 
                }
                style={{
                  width: 64,
                  height: 54,
                  marginBottom: 35
                }}
              />
            ),
          }}
          listeners={{
            tabPress: handleProtectedTabPress
          }}
        />

        <Tabs.Screen
          name="message/index"
          options={{
            title: 'Messages',
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../../assets/images/tab/Group 473.png')  
                    : require('../../assets/images/newimages/message.png') 
                }   
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          }}
          listeners={{
            tabPress: handleProtectedTabPress
          }}
        />

        <Tabs.Screen
          name="more/index"
          options={{
            title: 'More',
            tabBarIcon: ({ color }) => (
              <TouchableOpacity onPress={openModal}>
                <Image
                  source={
                    moreActive 
                      ? require('../../assets/images/newimages/Group 4.png') 
                      : require('../../assets/images/newimages/Group 473.png')
                  } 
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
          listeners={{
        
            tabPress: (e) => {
             
              e.preventDefault();
              openModal();
            }
          }}
        />
      </Tabs>

      {/* Modal is only shown when triggered by openModal, which handles auth */}
      {isModalVisible && (
        <MoreModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopEndRadius: 12,
    paddingVertical: 20,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
    fontFamily:"ProximaNovaR",
  },
});