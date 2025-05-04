import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import NotificationTabsStyles from "@/styles/Notification/notificationTabsStyles";
import HeaderWithDesc from "@/UI/Header/HeaderWithDescription";

// Import tab content components
import AllTabs from "./Sections/AllTabs";
import PendingPickup from "./Sections/pendingPickup";
import ConfimPickup from "./Sections/ConfirmPickup";
import CompletedOrder from "./Sections/CompleteOrder";
import CanceledOrder from "./Sections/CanceledOrder";
import ScheduledPickup from "./Sections/ScheduledPickup";

// Define tab names as a union type
type TabType =
  | "All"
  | "Pending pickup"
  | "confirm pickup"
  | "Completed"
  | "canceled"
  | "pickup schedule";

const OrdersBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("All");

  const tabs: TabType[] = [
    "All",
    "Pending pickup",
    "confirm pickup",
    "Completed",
    "canceled",
    "pickup schedule",
  ];

  const tabComponents: Record<TabType, JSX.Element> = {
    All: <AllTabs />,
    "Pending pickup": <PendingPickup />,
    "confirm pickup": <ConfimPickup />,
    Completed: <CompletedOrder />,
    canceled: <CanceledOrder />,
    "pickup schedule": <ScheduledPickup />,
  };

  return (
    <View style={[NotificationTabsStyles.container, { paddingHorizontal: 5 }]}>
      <HeaderWithDesc title="My Orders" paddingTop={50} ordersBars />

      {/* Tabs Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={NotificationTabsStyles.scrollContainer}
      >
        <View style={NotificationTabsStyles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                NotificationTabsStyles.tabButton,
                activeTab === tab && NotificationTabsStyles.activeTab,
                tab === "All" && NotificationTabsStyles.allTabButton,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  NotificationTabsStyles.tabButtonText,
                  activeTab === tab && NotificationTabsStyles.activeTabText,
                  tab === "All" && NotificationTabsStyles.allTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Tab Panel */}
      <ScrollView contentContainerStyle={{}}>{tabComponents[activeTab]}</ScrollView>
    </View>
  );
};

export default OrdersBoard;
