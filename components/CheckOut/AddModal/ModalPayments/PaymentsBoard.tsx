import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import NotificationTabsStyles from "@/styles/Notification/notificationTabsStyles";
import Bank from "@/assets/svg/bank";
import CardIcon from "@/assets/svg/card";
import Hashtag from "@/assets/svg/hastTag";
import BankTransferM from "../SelectionPayment/BankTransferM";
 import UssDM from "../SelectionPayment/UssDM";
import YourCart from "@/styles/Cart/YourCart.styles";
import CardM from "../SelectionPayment/CardM";

// Define the tabs and their corresponding components
const tabs = [
   { label: "BankTransfer", component: <BankTransferM />,icon: <Bank/> },
  { label: "Card", component: <CardM /> ,icon: <CardIcon/>},
   { label: "USSD", component: <UssDM /> ,icon: <Hashtag/>},
  // { label: "Rewards", component: <Rewards /> },
  // { label: "Offers", component: <Offers /> },
];

const PaymentBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("BankTransfer");

  return (
    <View 
    style={NotificationTabsStyles.containers}  >
      <Text style={[YourCart.title,{paddingBottom:15}]}>Select payment method</Text>
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

export default PaymentBoard;
