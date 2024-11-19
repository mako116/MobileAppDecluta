import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Homesections/HomeScreen';
import MyOrder from '@/app/(tabs)/myorders';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

type TabBarIconProps = { focused: boolean; color: string; size: number };

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabItem,
        tabBarActiveTintColor: "#DEBC8E",
        tabBarInactiveTintColor: "gray",
        tabBarItemLabel: styles.label,
      }}
      safeAreaInsets={{bottom: 0}}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => (
            <AntDesign name="home" size={size} color={focused ? "#DEBC8E" : 'gray'} />
          ),
          tabBarLabel: "Home"
        }}
      />

      <BottomTabNavigator.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => (
            <Octicons name="diff-added" size={size} color={focused ? "#DEBC8E" : 'gray'} />
          ),
          tabBarLabel: "My Orders"
        }}
      />
    </BottomTabNavigator.Navigator>
  ); 
}

const styles = StyleSheet.create({
  tabItem: {
   textTransform: 'capitalize',
   fontSize:12
  },
  container: {
    position: "absolute",
    width: "90%",
    left: "5%",
    bottom: 20,
    height: 60,
    backgroundColor: "white",
    borderRadius: 12,
  },
  label:{
    marginBottom:7,

  }
});
