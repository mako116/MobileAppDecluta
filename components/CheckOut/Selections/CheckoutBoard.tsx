import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import NotificationTabsStyles from "@/styles/Notification/notificationTabsStyles";
import Walleticon from "@/assets/svg/walleticon";
import Bank from "@/assets/svg/bank";
import CardIcon from "@/assets/svg/card";
import Hashtag from "@/assets/svg/hastTag";
import Rightarrow from "@/assets/images/kyc/rightarrow";

const paymentOptions = [
  { label: "Wallet", icon: <Walleticon />, route: "/(routes)/checkout/checkout-wallet",para:"Pay with your DecluttaKing Wallet balance. If your balance is low, you can top up in the next step before completing checkout." },
  { label: "Bank Transfer", icon: <Bank />, route: "/(routes)/checkout/Bank-transfer", para:"Complete your payment by transferring directly from your bank." },
  { label: "Card", icon: <CardIcon />, route: "/(routes)/checkout/Card",para:"Securely complete your payment using your debit or credit card. Visa, MasterCard and Verve cards are supported." },
  { label: "USSD", icon: <Hashtag />, route: "/(routes)/checkout/ussd",para:"Complete your payment easily using your bank USSD code. GTBank, Access Bank, Zenith Bank, UBA, and more are supported." },
  { label: "Klump", icon: <Hashtag />, route: "/(routes)/checkout/klump",para:"Klupm lets you split payments into easy installments for orders up to ₦1,000,000, with a minimum 25% upfront payment required. Klump’s T&Cs apply." },
];

const CheckoutBoard: React.FC = () => {
  return (
    <View style={NotificationTabsStyles.containers}>
      {paymentOptions.map(({ label, icon, route,para }) => (
       
       <TouchableOpacity
          key={label}
          style={NotificationTabsStyles.containBox}
          onPress={() => router.push(route)}
        >
          <View style={[NotificationTabsStyles.listItem,{justifyContent:"space-between"}]}>
          <View style={NotificationTabsStyles.iconLabelContainer}>
            {icon}
            <Text style={[NotificationTabsStyles.tabButtonTexts,{fontSize:16}]}>{label}</Text>
          </View>
          <Rightarrow color="#292D32" width={16} height={16}/>
          </View>
          <Text style={[NotificationTabsStyles.tabButtonTexts,{paddingHorizontal:10,paddingVertical:5,textAlign:"left",fontSize:12}]}>
            {para}
          </Text>
          
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CheckoutBoard;
