import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Alling from "./Sections/All";
import Updates from "./Sections/Updates";
import Transactions from "./Sections/Transactions";
import Activities from "./Sections/Activities";
import Pickup from "./Sections/Pickup";
import Rewards from "./Sections/Rewards";
import Offers from "./Sections/Offers";

const AllTab: React.FC = () => (
  <View>
    <Alling />
  </View>
);

const UpdatesTab: React.FC = () => (
  <View >
    <Updates/>
   </View>
);

const ActivitiesTab: React.FC = () => (
  <View>
    <Activities/>
   </View>
);
const PickupTab: React.FC = () => (
    <View>
      <Pickup/>
     </View>
  );
  const RewardsTab: React.FC = () => (
    <View>
      <Rewards/>
     </View>
  );
  const TransactionsTab: React.FC = () => (
    <View>
      <Transactions/>
     </View>
  );
  const OffersTab: React.FC = () => (
    <View>
      <Offers/>
     </View>
  );
  const NotificationBoard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"All" | "Updates" | "Transactions" | "Activities" | "Pickup" | "Rewards" | "Offers">("All");
    const notificationCounts = { All: 3, Updates: 5, Transactions: 2, Activities: 1, Pickup: 2, Rewards: 4, Offers: 5 };  
  
    return (
      <View style={styles.container}>
        {/* Tabs Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.tabContainer}>
            {Object.entries(notificationCounts).map(([tab, count]) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTab,
                  tab === "All" && styles.allTabButton,  
                ]}
                onPress={() => setActiveTab(tab as typeof activeTab)}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    activeTab === tab && styles.activeTabText,
                    tab === "All" && styles.allTabText, // Special text style for "All" tab
                  ]}
                >
                  {tab}
                </Text>
                {count > 0 && (
                  <View style={styles.notificationDot}>
                    <Text style={styles.notificationText}>{count}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
  
        {/* Tab Panels */}
        <View>
          {activeTab === "All" && <AllTab />}
          {activeTab === "Updates" && <UpdatesTab />}
          {activeTab === "Transactions" && <TransactionsTab />}
          {activeTab === "Activities" && <ActivitiesTab />}
          {activeTab === "Pickup" && <PickupTab />}
          {activeTab === "Rewards" && <RewardsTab />}
          {activeTab === "Offers" && <OffersTab />}
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    paddingHorizontal: 5,
    paddingTop: 10, 
 },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  tabButton: {
   
    // paddingVertical:5,
    paddingHorizontal:10,
    // paddingVertical: 10,
    height:35,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 5,
   borderWidth:1,
    borderColor:"#E9E9E9",
    textAlign:"center",
    alignItems:"center"
  },
  activeTab: {
    backgroundColor: "#DEBC8E",
    // borderColor: "#091E42",
    // elevation: 3,
  },
  tabButtonText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#212121",
    textAlign: "center",
    fontFamily:'Proxima Nova',
    margin:"auto",
    lineHeight:16.8
  },
   allTabButton: {
    width:60,
    height:34,
    borderWidth:1,
    borderColor:"#E9E9E9"
  },
  allTabText: {
    // fontWeight: "bold",  
    color: "#000",
  },
  activeTabText: {
    color: "#091E42",
    fontWeight: "600",
  },
  notificationDot: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#E42527",
    borderRadius: 9,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
   },
  notificationText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "400",
    lineHeight:11
  },
  panelContainer: {
    // height:"100%"
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#EFF3F8",
    borderRadius: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#091E42",
  },
});

export default NotificationBoard;
