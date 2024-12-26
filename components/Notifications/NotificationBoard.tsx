import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Alling from "./Sections/All";
import Updates from "./Sections/Updates";
import Transactions from "./Sections/Transactions";
import Activities from "./Sections/Activities";
import Pickup from "./Sections/Pickup";
import Rewards from "./Sections/Rewards";
import Offers from "./Sections/Offers";
import NotificationTabsStyles from "@/styles/Notification/notificationTabsStyles";

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
      <View style={NotificationTabsStyles.container}>
        {/* Tabs Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={NotificationTabsStyles.scrollContainer}
        >
          <View style={NotificationTabsStyles.tabContainer}>
            {Object.entries(notificationCounts).map(([tab, count]) => (
              <TouchableOpacity
                key={tab}
                style={[
                  NotificationTabsStyles.tabButton,
                  activeTab === tab && NotificationTabsStyles.activeTab,
                  tab === "All" && NotificationTabsStyles.allTabButton,  
                ]}
                onPress={() => setActiveTab(tab as typeof activeTab)}
              >
                <Text
                  style={[
                    NotificationTabsStyles.tabButtonText,
                    activeTab === tab && NotificationTabsStyles.activeTabText,
                    tab === "All" && NotificationTabsStyles.allTabText, // Special text style for "All" tab
                  ]}
                >
                  {tab}
                </Text>
                {count > 0 && (
                  <View style={NotificationTabsStyles.notificationDot}>
                    <Text style={NotificationTabsStyles.notificationText}>{count}</Text>
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



export default NotificationBoard;
