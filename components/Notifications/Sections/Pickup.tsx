import Arrowleft2 from '@/assets/svg/ArrowLeft2';
import NotificationStyles from '@/styles/Notification/Notification.styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView,  Text, View } from 'react-native';

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Confirm Your Item Pickup',
    description: "Please confirm that your item for order #12345-1 has been picked up. ",
    image: require('../../../assets/images/Frame 646966.png'),
    time: 'Today 20:28',
    tag: 'Updates',
    action: 'View More',
  },
  {
    id: '2',
    title: ' Item Picked Up',
    description: "You confirmed your item for order #12345-1 has been picked up sucessfully ",
    image: require('../../../assets/images/Frame 646966.png'),
    time: 'Today 20:28',
    tag: 'Updates',
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

const Pickup = () => {
  return (
    <SafeAreaView>
        <ScrollView style={{paddingHorizontal:10, paddingBottom:"50%"}}>
        {notifications.length === 0 ? (
          <View style={NotificationStyles.noNotificationContainer}>
            <Image source={require('../../../assets/images/notifi/none/Frame 25 (2).png')}  style={{height:66, width:"100%", objectFit:"contain"}}  />
       <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Pickup Updates Yet</Text>
       <Text style={NotificationStyles.noNotificationText}>Your pickup notifications will appear here when items are ready for collection.</Text>
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
};

 
export default Pickup;
