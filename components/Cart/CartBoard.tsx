import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Alling from "./Sections/All";
 import Close from "@/assets/images/kyc/close";
import { useCart } from "@/context/CartContext";
import { useNavigation } from "expo-router";
 import Offer from "./Sections/Offer";
import HeaderCheckoutStyl from "@/styles/HeaderCheckout/Headercheckout";
 
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
    <View style={HeaderCheckoutStyl.tabContainer}>
    {tabs.map((tab, index) => (
      <React.Fragment key={tab}>
        <TouchableOpacity
          style={[
            HeaderCheckoutStyl.tabButton,
            activeTab === tab && HeaderCheckoutStyl.activeTab,
            tab === "Your Cart" && HeaderCheckoutStyl.allTabButton,
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[
              HeaderCheckoutStyl.tabButtonText,
              activeTab === tab && HeaderCheckoutStyl.activeTabText,
              tab === "Your Cart" && HeaderCheckoutStyl.allTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
        {/* Add a small border between the tabs */}
        {index < tabs.length - 1 && <View style={HeaderCheckoutStyl.centerBorder} />}
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
 {cart.length > 0 && (
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
   )}

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
    <View style={HeaderCheckoutStyl.container}>
      {/* Header Section */}
      <TabHeader activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as typeof activeTab)} />

      {/* Content Section */}
        {activeTab === "Your Cart" && <AllTab />}
        {activeTab === "Offers" && <UpdatesTab />}
        
    </View>
  );
};

;

export default CartBoard;