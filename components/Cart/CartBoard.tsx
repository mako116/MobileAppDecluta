import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Alling from "./Sections/All";
import Updates from "./Sections/Updates";

// TabHeader Component
const TabHeader: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs = ["YourCart", "Offers"];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tabButton,
            activeTab === tab && styles.activeTab,
            tab === "YourCart" && styles.allTabButton,
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === tab && styles.activeTabText,
              tab === "YourCart" && styles.allTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
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
  const [activeTab, setActiveTab] = useState<"YourCart" | "Offers">("YourCart");

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
          {activeTab === "YourCart" && <AllTab />}
          {activeTab === "Offers" && <UpdatesTab />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: "100%",
  },
  scrollContainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 10,
    paddingTop: "10%",
  },
  tabButton: {
    
    marginHorizontal: 5,
    
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    // backgroundColor: "#DEBC8E",
    
  },
  tabButtonText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#212121",
    textAlign: "center",
    fontFamily: "Proxima Nova",
    lineHeight: 16.8,
  },
  allTabButton: {
    paddingHorizontal:10,
    borderRightWidth:1,

  },
  allTabText: {
    color: "#000",
    fontFamily:"Helvetica Neue"
  },
  activeTabText: {
    color: "#091E42",
    fontWeight: "600",
  },
});

export default CartBoard;
