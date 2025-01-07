import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Alling from "./Sections/All";
 import Close from "@/assets/images/kyc/close";
import { CartProvider, useCart } from "@/context/CartContext";
import { router, useNavigation } from "expo-router";
import BackButton from "@/assets/images/kyc/LeftArrow";
import Offer from "./Sections/Offer";

// TabHeader Component
const TabHeader: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Your Cart", "Offers"];
  const { cart} = useCart();
 
 const navigation = useNavigation();
 
     const goBack = () => {
         navigation.goBack();
     };

  return (
    <View style={{ backgroundColor: "#fff", paddingHorizontal: "3.4%", paddingTop: 10 , paddingBottom: 10,}}>
 
  <View style={styles.tabContainer}>
    {tabs.map((tab, index) => (
      <React.Fragment key={tab}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === tab && styles.activeTab,
            tab === "Your Cart" && styles.allTabButton,
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === tab && styles.activeTabText,
              tab === "Your Cart" && styles.allTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
        {/* Add a small border between the tabs */}
        {index < tabs.length - 1 && <View style={styles.centerBorder} />}
      </React.Fragment>
    ))}
      {/* Close Cross Button */}
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-end", flex:1}}>
       <TouchableOpacity
     onPress={goBack}
  >
     <Close/>
  </TouchableOpacity>
  </View>
  </View>
 
 {/* if there is no cart data then dont display */}
 {/* {cart.length > 0 && ( */}
  <Text
    style={{
      paddingHorizontal: 7,
      fontFamily: "Proxima Nova",
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 16.8,
      color: "#212121",
      paddingTop:2
    }}
  >
    Your order is reserved for{" "}
    <Text style={{ color: "#E42527", fontWeight: "700" }}>14:34</Text>
  </Text>
  {/* )}   */}

</View>

  );
};

// Your Cart Component
const AllTab: React.FC = () => (
  <View>
    <Alling />
  </View>
);

// Offers Component
const UpdatesTab: React.FC = () => (
  <View>
    <Offer />
  </View>
);

const CartBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Your Cart" | "Offers">("Your Cart");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TabHeader activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as typeof activeTab)} />

      {/* Content Section */}
        {activeTab === "Your Cart" && <AllTab />}
        {activeTab === "Offers" && <UpdatesTab />}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
     
     height:"100%"
  },
 
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10%",
    gap:5,
    
  },
  tabButton: {
    marginHorizontal: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
    textAlign: "center",
    fontFamily: "Proxima Nova",
    lineHeight: 22.4,
  },
  allTabButton: {
  },
  centerBorder: {
    width: 1.4,
    height: 15,  
    backgroundColor: '#A4A4A4',
    alignSelf: 'center',
  },
  allTabText: {

  },
  activeTabText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight:22.4,
    color: "#212121",
    fontFamily:"Helvetica Neue"
  },
});

export default CartBoard;
