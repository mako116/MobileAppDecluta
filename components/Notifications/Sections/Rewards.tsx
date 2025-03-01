 import Arrowleft2 from '@/assets/svg/ArrowLeft2';
import NotificationStyles from '@/styles/Notification/Notification.styles';
 import React from 'react';
import { Image, SafeAreaView, ScrollView,  Text, View } from 'react-native';


const notifications: Notification[] = [
  
    {
      id: '1',
      title: '500 Rewards Points Achieved!',
      description: "Congrats! You completed your first purchase and have been awarded 500 reward points!",
      image: require('../../../assets/images/notifi/Frame 646965 (2).png'),
      time: 'Today 20:28',
      tag: 'Rewards',
      action: 'View More',
    },
    
    {
      id: '2',
      title: 'Referral Points Earned',
      description:
        'You’ve just earned ₦1,000 for referring a friend! More rewards await.',
      image: require('../../../assets/images/notifi/Frame 646965 (1).png'),
      time: 'Today 20:28',
      tag: 'Rewards',
      action: 'View More',

    },
    {
      id: '5',
      title: 'You Referred a Friend!',
      description:
        'Great news! Comfort O. has joined via your referral. Track their purchase progress on My Referrals to unlock your reward!',
      image: require('../../../assets/images/notifi/Frame 646965 (3).png'),
      time: 'Today 20:28',
      tag: 'Rewards',
      action: 'View More',

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
      <ScrollView  style={{paddingHorizontal:10, paddingBottom:"50%"}}>
        {notifications.length === 0 ? (
          <View style={NotificationStyles.noNotificationContainer}>
            <Image source={require('../../../assets/images/notifi/none/Frame 25 (3).png')}  style={{height:66, width:"100%", objectFit:"contain"}}  />
       <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Rewards Notifications Yet</Text>
       <Text style={NotificationStyles.noNotificationText}>Earn rewards by completing objectives. You’ll see notifications about your points and milestones here.</Text>
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
                    <Arrowleft2/>
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
