 import NotificationStyles from '@/styles/Notification/Notification.styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';


const notifications: Notification[] = [
    {
      id: '1',
      title: 'Comment Approved',
      description: "Your comment on item: Samsung A05... has been approved.",
      image: require('../../../assets/images/notifi/Frame 646966.png'),
      time: 'Today 20:28',
      tag: 'Activities',
      action: 'View More',
        },
    {
      id: '2',
      title: 'New Reply to Your Comment',
      description: "Someone replied to your comment on item: Samsung A05... Join the conversation!",
      image: require('../../../assets/images/Frame 646965 (1).png'),
      time: 'Today 20:28',
      tag: 'Activities',
      action: 'View More',
    },
    {
      id: '3',
      title: 'Seller Answered Your Question',
      description:
        'The seller (Segun A.) has answered your question on item: Samsung A05...',
      image: require('../../../assets/images/Frame 646966 (1).png'),
      time: 'Today 20:28',
      tag: 'Activities',
       action: 'View More',
    },
    {
      id: '4',
      title: 'Seller Replied to Your Comment',
      description:
        'The seller (Segun A.) has answered your question on item: Samsung A05...',
      image: require('../../../assets/images/kyc.png'),
      time: 'Today 20:28',
      tag: 'Activities',
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
const Activities = () => {
    return (
        <SafeAreaView>
        <ScrollView style={{paddingHorizontal:10, paddingBottom:"50%"}}>
          {notifications.length === 0 ? (
            <View style={NotificationStyles.noNotificationContainer}>
            <Image source={require('../../../assets/images/notifi/none/Frame 25 (1).png')}  style={{height:66, width:"100%", objectFit:"contain"}}  />
         <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No New Activities </Text>
         <Text style={NotificationStyles.noNotificationText}>Stay tuned! Updates on your interactions will appear here once you engage with the community.</Text>
       </View>
          ) : (
            notifications.map((item) => (
              <View key={item.id} style={NotificationStyles.main}>
                <View style={NotificationStyles.notificationContent}>
                  <Image source={item.image} style={NotificationStyles.image}  />
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
                      <SimpleLineIcons name="arrow-right" size={10} color="black" />
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

 
export default Activities;
