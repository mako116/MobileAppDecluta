import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import NotificationStyles from '@/styles/Notification/Notification.styles';

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
    title: 'Welcome to DecluttaKing!',
    description: "You’ve successfully signed up. Start buying and selling items today!",
    image: require('../../../assets/images/notifi/Frame 646965 (3).png'),
    time: 'Today 20:28',
    tag: 'Updates',
    action: null,
  },
  
  {
    id: '2',
    title: 'Complete Your KYC',
    description:
      'Verify your identity to access withdrawal, get a verification badge, and enjoy more benefits.',
      image: require('../../../assets/images/notifi/dot.png'),
      time: 'Today 20:28',
    tag: 'Updates',
    action: 'Complete KYC',
  },
  {
    id: '3',
    title: '500 Rewards Points Achieved!',
      description: "Congrats! You completed your first purchase and have been awarded 500 reward points!",
      image: require('../../../assets/images/notifi/Frame 646965 (2).png'),
      time: 'Today 20:28',
      tag: 'Rewards',
      action: 'View More',
  },
  {
    id: '4',
    title: 'Order #12345 Payment Successful',
    description:
      'Your payment for order #12345 has been received. Thank you!',
    image: require('../../../assets/images/Frame 646966 (1).png'),
    time: 'Today 20:28',
    tag: 'Transactions',
     action: 'View More',
  },
  {
    id: '5',
    title: ' Item Picked Up',
    description: "You confirmed your item for order #12345-1 has been picked up sucessfully ",
    image: require('../../../assets/images/Frame 646966.png'),
    time: 'Today 20:28',
    tag: 'Updates',
    action: 'View More',
  },
  {
    id: '6',
    title: 'Confirm Your Item Pickup',
    description: "Please confirm that your item for order #12345-1 has been picked up. ",
    image: require('../../../assets/images/Frame 646966.png'),
    time: 'Today 20:28',
    tag: 'Updates',
    action: 'View More',
  },
  {
    id: '7',
    title: 'Check out this discount offer!',
    description: "Enjoy the best deals on any product category with DecluttaKing! Click here",
    image: require('../../../assets/images/Frame 646973.png'),
     time: 'Today 20:28',
    tag: 'Offers',
    action: 'View More',
  },
];

const Alling: React.FC = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, paddingBottom: '50%' }}>
      <ScrollView scrollEventThrottle={16}>
      
         {notifications.length === 0 ? (
          <View style={NotificationStyles.noNotificationContainer}>
          <Image source={require('../../../assets/images/bells.png')} style={{height:66, width:"100%", objectFit:"contain"}}  />
       <Text style={[NotificationStyles.noNotificationText,{fontFamily:"ProximaNovaBold", fontSize:19}]}>No Notification Yet</Text>
       <Text style={NotificationStyles.noNotificationText}>You’re all caught up! When there’s something new, we’ll notify you here. </Text>
     </View>
        ) : (
        notifications.map((item) => (
          item.id === '7' ? (
            <View key={item.id} style={NotificationStyles.main}>
            <View style={NotificationStyles.notificationContents}>
              <Image source={item.image} style={{height:87, width:"100%", objectFit:"cover"}}  />
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
          ) : (
            <View key={item.id} style={styles.main}>
              <View style={styles.notificationContent}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.footerLeft}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.tag}>{item.tag}</Text>
                </View>
                {item.action && (
                  <View style={styles.footerRight}>
                    <Text style={styles.actionText}>{item.action}</Text>
                    <Image source={require('../../../assets/images/newimages/Vector.png')} style={{ width: 6, height: 10, marginTop: 3 }} />
                  </View>
                )}
              </View>
            </View>
          )
        ))
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    padding: 10,
  },
  main: {
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
     borderWidth:1,
     borderColor:"#E9E9E9"
  },
  notificationContent: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingBottom: '5%',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  description: {
    paddingRight: '10%',
    lineHeight: 19.6,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2%',
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  time: {
    color: '#474747',
    fontSize: 12,
  },
  tag: {
    backgroundColor: '#F5EADC',
    color: '#212121',
    padding: 5,
    fontSize: 12,
    borderRadius: 5,
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionText: {
    color: '#212121',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default Alling;
