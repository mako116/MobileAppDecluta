import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Alling from "./Sections/All";
import Updates from "./Sections/Updates";
import Close from "@/assets/images/kyc/close";

// TabHeader Component
const TabHeader: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Your Cart", "Offers"];

  return (
    <View style={{ backgroundColor: "#fff", paddingHorizontal: "3.4%", paddingTop: 10 }}>
  {/* Close Cross Button */}
  <TouchableOpacity
    style={styles.closeButton}
    // onPress={handleClose}
  >
    <Close/>
  </TouchableOpacity>

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
  </View>

  <Text
    style={{
      paddingHorizontal: 7,
      fontFamily: "Proxima Nova",
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 16.8,
      color: "#212121",
      paddingTop: 5,
      paddingBottom: 5,
    }}
  >
    Your order is reserved for{" "}
    <Text style={{ color: "#E42527", fontWeight: "700" }}>14:34</Text>
  </Text>
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
    <Updates />
  </View>
);

const CartBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Your Cart" | "Offers">("Your Cart");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TabHeader activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as typeof activeTab)} />

      {/* Content Section */}
      <ScrollView
        showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
        showsVerticalScrollIndicator={false}   // Hides vertical scrollbar
        contentContainerStyle={styles.scrollContainer}
      > 
        <View>
          {activeTab === "Your Cart" && <AllTab />}
          {activeTab === "Offers" && <UpdatesTab />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    // paddingHorizontal: 10,
    height: "100%",
  },
  scrollContainer: {
    // paddingHorizontal: "5%",
    paddingTop: 10,
    
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 10,
    paddingTop: "10%",
    gap:5
  },
  tabButton: {
    
    marginHorizontal: 5,
    // gap:20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    // backgroundColor: "#DEBC8E",
    // gap:20
  },
  closeButton: {
    position: "absolute",
    top: "45%",
    right: 10,
    zIndex: 1000,
    padding: 8,
  
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
    width: 2,
    height: '60%',  
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
