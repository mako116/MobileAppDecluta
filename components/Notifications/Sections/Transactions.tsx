import NotificationStyles from '@/styles/Notification/Notification.styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
type Notification = {
    id: string;
    title: string;
    description: string;
    image: any; // Use 'any' for static assets. For dynamic images, consider using ImageSourcePropType.
    time: string;
    tag: string;
    action: string | null;
  };

  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Order #12345 Payment Successful',
      description:
        'Your payment for order #12345 has been received. Thank you!',
      image: require('../../../assets/images/Frame 646966 (1).png'),
      time: 'Today 20:28',
      tag: 'Transactions',
       action: 'View More',
        },
    {
      id: '2',
      title: 'Your Payment is Now in Escrow',
      description: "Your payment for Order #12345 is securely held in escrow and will be released once the transaction is completed. ",
      image: require('../../../assets/images/lockk.png'),
      time: 'Today 20:28',
      tag: 'Transactions',
      action: 'View More',
    },
    {
      id: '3',
      title: 'Wallet Top-up Successful',
      description: "₦175,000 has been credited to your wallet. Keep shopping or selling on DecluttaKing!",
      image: require('../../../assets/images/Frame 646965 (2).png'),
      time: 'Today 20:28',
      tag: 'Transactions',
      action: 'View More',
    },
    {
      id: '4',
      title: 'Funds Refunded!',
      description:
        '₦74,950.00 has been refunded to your wallet for canceled order #12345-1.',
        image: require('../../../assets/images/Frame 646965 (3).png'),
        time: 'Today 20:28',
      tag: 'Transactions',
       action: 'View More',
    },
    {
      id: '5',
      title: 'Wallet Debit',
      description:
        '₦210,000.00 has been debited from your wallet for order #12345.',
      image: require('../../../assets/images/Frame 646965 (2).png'),
      time: 'Today 20:28',
      tag: 'Transactions',
       action: 'View More',
    },
    {
      id: '6',
      title: 'Release Funds to Segun A.',
      description:
        'The item has been picked up. Please release the funds for order #12345-1.',
      image: require('../../../assets/images/Frame 646965 (2).png'),
      time: 'Today 20:28',
      tag: 'Transactions',
       action: 'View More',
    },
    
  ];
const Transactions = () => {
  
      
    return (
        <SafeAreaView>
        <ScrollView style={{paddingHorizontal:10, paddingBottom:"50%"}}>
          {notifications.length === 0 ? (
            <View style={NotificationStyles.noNotificationContainer}>
            <Image source={require('../../../assets/images/notifi/none/Frame 25.png')}  style={{height:66, width:"100%", objectFit:"contain"}} />
         <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Transactions Updates Yet</Text>
         <Text style={NotificationStyles.noNotificationText}>Once you start making transactions, you’ll see all the updates here.</Text>
       </View>
          ) : (
            notifications.map((item) => (
              <View key={item.id} style={NotificationStyles.main}>
                <View style={NotificationStyles.notificationContent}>
                  <Image source={item.image} style={NotificationStyles.image} />
                  <View style={NotificationStyles.textContainer}>
                    <Text style={NotificationStyles.title}>{item.title}</Text>
                    <Text style={NotificationStyles.description}>{item.description}</Text>
                  </View>
                </View>
                <View style={NotificationStyles.footer}>
                  <View style={NotificationStyles.footerLeft}>
                    <Text style={NotificationStyles.time}>{item.time}</Text>
                    <Text style={NotificationStyles.tag}>{item.tag}</Text>
                  </View>
                  {item.action && (
                    <View style={NotificationStyles.footerRight}>
                      <Text style={NotificationStyles.actionText}>{item.action}</Text>
 <Image source={require('../../../assets/images/newimages/Vector.png')} style={{width:6,height:10,marginTop:3}} />                    
 </View>
                  )}
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
}

export default Transactions;
