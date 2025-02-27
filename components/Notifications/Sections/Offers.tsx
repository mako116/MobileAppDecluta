import NotificationStyles from '@/styles/Notification/Notification.styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView,   Text, View } from 'react-native';


const notifications: Notification[] = [
  {
    id: '1',
    title: 'Check out this discount offer!',
    description: "Enjoy the best deals on any product category with DecluttaKing! Click here",
    image: require('../../../assets/images/Frame 646973.png'),
     time: 'Today 20:28',
    tag: 'Offers',
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
const Offers = () => {
    return (
      <SafeAreaView>
      <ScrollView style={{paddingHorizontal:10,paddingBottom:"50%"}}>
        {notifications.length === 0 ? (
          <View style={NotificationStyles.noNotificationContainer}>
            <Image source={require('../../../assets/images/notifi/none/Frame 25 (4).png')}  style={{height:66, width:"100%", objectFit:"contain"}}  />
       <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Offers Available Right Now</Text>
       <Text style={NotificationStyles.noNotificationText}>Keep an eye out for special offers and discounts!
       We’ll notify you when something exciting comes up.</Text>
     </View>
        ) : (
          notifications.map((item) => (
            <View key={item.id} style={NotificationStyles.main}>
              <View style={NotificationStyles.notificationContents}>
                <Image source={item.image} style={{height:87, width:"100%", objectFit:"cover"}}  />
                <View style={[NotificationStyles.textContainer,{paddingTop:6}]}>
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
 
export default Offers;
