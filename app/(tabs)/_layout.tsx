import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
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
  }, [auth.userToken]); 
  
  const openModal = () => {
    setIsModalVisible(true);
    setMoreActive(true);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setMoreActive(!isModalVisible);
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
        
        {isLoggedIn && (
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
          />
        )}
        
        {isLoggedIn && (
          <Tabs.Screen
            name="sell/index"
            options={{
              title: 'Sell',
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require('../../assets/images/tab/add-square.png')  
                      : require('../../assets/images/newimages/add-square.png') 
                  }   
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              ),
            }}
          />
        )}
        
        {isLoggedIn && (
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
          />
        )}
        
        {isLoggedIn && (
          <Tabs.Screen
            name="more/index"
            options={{
              title: 'More',
              tabBarIcon: ({ color }) => (
                <TouchableOpacity onPress={openModal}>
                  <Image
                    source={moreActive 
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
          />
        )}
      </Tabs>

      {/* Render Modal only if logged in */}
      {isLoggedIn && isModalVisible && (
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
  },
});