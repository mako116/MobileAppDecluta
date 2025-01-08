import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import NotificationTabsStyles from "@/styles/Notification/notificationTabsStyles";
import WalletPay from "./Payments/WalletPay";
import BankTransfer from "./Payments/BankTransfer";
import Card from "./Payments/Card";
import Walleticon from "@/assets/svg/walleticon";
import Ussd from "./Payments/Ussd";
import Bank from "@/assets/svg/bank";
import CardIcon from "@/assets/svg/card";
import Hashtag from "@/assets/svg/hastTag";
import YourCart from "@/styles/Cart/YourCart.styles";

// Define the tabs and their corresponding components
const tabs = [
  { label: "Wallet", component: <WalletPay />, icon: <Walleticon/> },
  { label: "BankTransfer", component: <BankTransfer />,icon: <Bank/> },
  { label: "Card", component: <Card /> ,icon: <CardIcon/>},
   { label: "USSD", component: <Ussd /> ,icon: <Hashtag/>},
  // { label: "Rewards", component: <Rewards /> },
  // { label: "Offers", component: <Offers /> },
];

const CheckoutBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Wallet");

  return (
    <View 
    style={NotificationTabsStyles.containers}
    >
      {/* Tabs Section */}
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={NotificationTabsStyles.scrollContainers}
      >
        <View style={NotificationTabsStyles.tabContainers}>
          {tabs.map(({ label ,icon}) => (
            <TouchableOpacity
              key={label}
              style={[
                NotificationTabsStyles.tabButtons,
                activeTab === label && NotificationTabsStyles.activeTab,
              ]}
              onPress={() => setActiveTab(label)}
            >
              {icon}
              <Text
                style={[
                  NotificationTabsStyles.tabButtonTexts,
                  activeTab === label && NotificationTabsStyles.activeTabText,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Tab Panels */}
      <View>
        {tabs.map(
          ({ label, component }) =>
            activeTab === label && <View key={label}>{component}</View>
        )}
      </View>

      
    </View>
  );
};

export default CheckoutBoard;
