import React, { useState, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
   Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// SVG Icons for toggling order section visibility
import ArrowUp from '@/assets/svg/arrowUp';
import ArrowDown from '@/assets/svg/arrowDown';

// Reusable Button component
import BoxButton from '@/components/Button/BoxButton';
import LocationIcons from '@/screens/icons';
import Tag from '@/assets/images/cart/tag';
import orderStyles from '@/styles/orders/order.styles';
import { router } from 'expo-router';

// Notification type definition
type Notification = {
  id: string;
  orderId: string;
  title: string;
  description: string;
  image: any;
  statusLabel: string ;
  location: string;
  billNumber: string;
};

const ConfimPickup: React.FC = () => {
  // State to store all notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // State to track expanded/collapsed status of each order group
  const [expandedOrders, setExpandedOrders] = useState<{ [key: string]: boolean }>({});

  /**
   * This function simulates fetching order items and generates unique bill numbers for each.
   * It groups items under the same `orderId` and appends a unique bill number suffix.
   */
  const generateBillNumbers = () => {
    const items: Omit<Notification, 'billNumber'>[] = [
       
      {
        id: '1',
        orderId: '54321',
        title: 'Samsung Galaxy A05...',
        location:'Agbowo UI, Ibadan, Oyo',
        description: '₦150,000 (In Escrow)',
        image: require('../../../../assets/images/New folder/Frame 648006 (1).png'),
        statusLabel: 'Pickup your order before Jun 31st, 2024',
      },
      {
        id: '2',
        orderId: '54321',
        title: 'Samsung Galaxy A05...',
        description: '₦150,000 (In Escrow)',
        location:'Agbowo UI, Ibadan, Oyo',
        image: require('../../../../assets/images/New folder/Frame 648006 (1).png'),
        statusLabel: 'Pickup your order before Jun 31st, 2024',
      },
      {
        id: '3',
        orderId: '12456',
        title: 'Samsung Galaxy A05...',
        description: '₦150,000 (In Escrow)',
        location:'Agbowo UI, Ibadan, Oyo',
        image: require('../../../../assets/images/New folder/Frame 648006 (1).png'),
        statusLabel: 'Pickup your order before Jun 31st, 2024',
      },
      
    ];

    // Track item count per order ID for bill number suffixing
    const orderItemCount: Record<string, number> = {};

    const updated = items.map((item) => {
      // Count how many items are in this order group
      orderItemCount[item.orderId] = (orderItemCount[item.orderId] || 0) + 1;

      // Random base code for bill number
      const randomOrderCode = (20000 + Math.floor(Math.random() * 10000)).toString();
      const billNumber = `Order #${randomOrderCode}-${orderItemCount[item.orderId]}`;

      return {
        ...item,
        billNumber,
      };
    });

    setNotifications(updated);
  };

  // Load data and generate bill numbers when component mounts
  useEffect(() => {
    generateBillNumbers();
  }, []);

  // Toggle expanded/collapsed view for a given orderId group
  const toggleExpand = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  // Group notifications by their orderId for collapsible display
  const groupedByOrder = notifications.reduce((acc, item) => {
    if (!acc[item.orderId]) acc[item.orderId] = [];
    acc[item.orderId].push(item);
    return acc;
  }, {} as Record<string, Notification[]>);

  /**
   * Conditionally render buttons depending on item title content.
   */
  const renderButtons = (title: string) => {
    const lowerTitle = title?.toLowerCase() ?? '';
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <BoxButton width="45%" title="View Details" backgroundColor="#fff" borderWidth={1} onPress={() =>router.push("/(routes)/order/order-details")} borderColor="#463E31" />
          <BoxButton width="50%" title="Confirm Pickup" backgroundColor="#DEBC8E" borderWidth={0} onPress={() => {}} borderColor="" />
        </View>
      );
    
  };
  

  return (
    <SafeAreaView style={orderStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Iterate over each group of orders */}
        {Object.entries(groupedByOrder).map(([orderId, items]) => {
          // Calculate total amount from item descriptions
          const totalAmount = items.reduce((sum, item) => {
            const amount = parseInt(item.description.replace(/[^\d]/g, ''), 10);
            return sum + (isNaN(amount) ? 0 : amount);
          }, 0);

          return (
            <View key={orderId} style={orderStyles.orderContainer}>
              {/* Collapsible Header */}
              <TouchableOpacity style={orderStyles.header} onPress={() => toggleExpand(orderId)}>
              <View>
              <Text style={orderStyles.orderId}>
                    Order #{orderId}
                     <Text style={[orderStyles.description,{color:"#7E7E7E",fontSize:12,fontWeight:"300",marginLeft:5}]}>
                      ({items.length} item{items.length > 1 ? 's' : ''})
                  </Text>
                  </Text>
                  <Text style={[orderStyles.orderTotal,{color:"#7E7E7E"}]}>30-06-2024  ₦{totalAmount.toLocaleString()}</Text>
                </View>
                {expandedOrders[orderId] ? <ArrowUp /> : <ArrowDown />}
              </TouchableOpacity>

              {/* Expanded Content */}
              {expandedOrders[orderId] && (
                <View style={orderStyles.itemBox}>
                  {items.map((item) => {
                    // Set background and status based on statusLabel
                    let bgColor = '#E9E9E9';
                    let icon = null;
                    let color = '#fff'
                    if (item.statusLabel === 'Order Completed') {
                      bgColor = '#009217';
                      icon = require('../../../../assets/images/New folder/tick-circle.png');
                      color = '#fff'
                    } else if (item.statusLabel === 'Order Cancelled') {
                      bgColor = '#E9E9E9';
                      icon = require('../../../../assets/images/New folder/close-circle.png');
                      color = '#212121'
                    } else{
                      bgColor = '#E9E9E9';
                      icon = require('../../../../assets/images/New folder/pickup.png');
                      color = '#212121'
                    }

                    return (
                      <View key={item.id} style={orderStyles.roundedBox}>
                        {/* Status Label with Icon */}
                        <View style={[orderStyles.statusContainer, { backgroundColor: bgColor }]}>
                          {icon && <Image source={icon} style={orderStyles.statusIcon} />}
                          <Text style={[orderStyles.statusText,{color:color}]}>{item.statusLabel}</Text>
                        </View>

                        {/* Item Information Row */}
                        <View style={orderStyles.itemRow}>
                          <Image source={item.image} style={orderStyles.image} />
                          <View style={orderStyles.text}>
                            <Text style={orderStyles.itemLabel}>{item.billNumber}</Text>
                            <Text style={orderStyles.title}>{item.title}</Text>
                            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                              <Tag/>
                            <Text style={orderStyles.description}>{item.description}</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                              <LocationIcons/>
                              <Text style={[orderStyles.description,{color:"#474747"}]}>{item.location}</Text>
                            </View>
                          </View>
                        </View>

                        {/* Action Buttons */}
                        <View style={orderStyles.footer}>{renderButtons(item.statusLabel)}</View>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
 

export default ConfimPickup;
