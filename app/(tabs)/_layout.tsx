import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign, Feather, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'; // Compatible icon library
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabItem,
        tabBarActiveTintColor: Colors['light'].tint, 
        tabBarInactiveTintColor: "#A4A4A4",
        tabBarLabelStyle: styles.label,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
           ),
        }}
      />
      <Tabs.Screen
        name="myorders/index"
        options={{
          title: 'My Orders',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="sell/index"
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={20} 
            style={[styles.featherIcon, { borderColor: color , color:color}]} 
            />
          //  <Octicons name="diff-added" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="message/index"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
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
              color={color} 
              style={[styles.featherIcon, { borderColor: color }]} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 12,
  },
  container: {
    height: 80,
    backgroundColor: "white",
    borderRadius: 12,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
    marginBottom: 7,
  },
  featherIcon: {
    borderWidth: 1.7,   // Adjust border width if necessary
     textAlign:"center",
     paddingTop:1.4,
    borderRadius: 9,    // Adjust border radius if needed
  }
});
