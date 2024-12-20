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

const Alling: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        {notifications.map((item) => (
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
               <Image source={require('../../../assets/images/newimages/Vector.png')} style={{width:6,height:10,marginTop:3}} />               
              </View>
              )}
            </View>
          </View>
        ))}
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
