import NotificationStyles from '@/styles/Notification/Notification.styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView,  Text, View } from 'react-native';


const notifications: Notification[] = [
    {
      id: '1',
      title: 'Welcome to DecluttaKing!',
      description: "You’ve successfully signed up. Start buying and selling items today!",
      image: require('../../../assets/images/imgg.png'),
      time: 'Today 20:28',
      tag: 'Updates',
      action: null,
    },
    {
      id: '2',
      title: '500 Rewards Points Achieved!',
      description: "Congrats! You completed your first purchase and have been awarded 500 reward points!",
      image: require('../../../assets/images/reward.png'),
      time: 'Today 20:28',
      tag: 'Updates',
      action: 'View More',
    },
    {
      id: '3',
      title: 'Complete Your KYC',
      description:
        'Verify your identity to access withdrawal, get a verification badge, and enjoy more benefits.',
      image: require('../../../assets/images/kyc.png'),
      time: 'Today 20:28',
      tag: 'Updates',
      action: 'Complete KYC',
    },
    {
      id: '4',
      title: 'Complete Your KYC',
      description:
        'Verify your identity to access withdrawal, get a verification badge, and enjoy more benefits.',
      image: require('../../../assets/images/kyc.png'),
      time: 'Today 20:28',
      tag: 'Updates',
      action: 'Complete KYC',
    },
    {
      id: '5',
      title: 'Complete Your KYC',
      description:
        'Verify your identity to access withdrawal, get a verification badge, and enjoy more benefits.',
      image: require('../../../assets/images/kyc.png'),
      time: 'Today 20:28',
      tag: 'Updates',
      action: 'Complete KYC',
    },
  ];
  
  type Notification = {
    id: string;
    title: string;
    description: string;
    image: any; // Use 'any' for static assets. For dynamic images, consider using ImageSourcePropType.
    time: string;
    tag: string;
    action: string | null;
  };
const Rewards = () => {
    return (
      <SafeAreaView>
      <ScrollView>
        {notifications.length === 0 ? (
          <View style={NotificationStyles.noNotificationContainer}>
          <Image source={require('../../../assets/images/None.png')}   />
       <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Updates at the Moment</Text>
       <Text style={NotificationStyles.noNotificationText}>You’ll be notified here when new features or important updates are available.</Text>
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


export default Rewards;
