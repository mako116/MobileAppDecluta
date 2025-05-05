import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Tag from '@/assets/images/cart/tag';
import Rightarrow from '@/assets/images/kyc/rightarrow';
import LocationIcons from '@/screens/icons';
import orderStyles from '@/styles/orders/order.styles';
import TransactionDetailsStyles from '@/styles/TransactionDetails/TransactionDetails.styles';
import HalfButton from '@/components/Button/halfButton';
import { router } from 'expo-router';
import BoxButton from '@/components/Button/BoxButton';

const TransactionOrderActions = () => {
  const items = [
    {
      id: '1',
       title: 'Message Segun A.',
       description: 'Arrange pickup within 48hrs for a smooth experience',
      image: require('../../../../assets/images/New folder/Frame 645294.png'),
      button: 'Message Now'
    },
    {
      id: '2',
       title: 'Release Payment',
      description: 'Got your item? Pay Segun A. now.',
      image: require('../../../../assets/images/New folder/Frame 645294 (1).png'),
      button: 'Relase Funds'
    },
    {
        id: '3',
        title: 'Raise a Dispute',
        description: 'Have a concern with your order? Let us help you resolve it.',
          image: require('../../../../assets/images/New folder/message-question.png'),
        button: 'Raise Dispute'
      },
      
      {
        id: '4',
        title: 'Cancel Your Order',
        description: 'Change your mind? Cancel your order within the allowed time frame',
          image: require('../../../../assets/images/New folder/Frame 645294 (2).png'),
        button: 'Cancel Order'
      },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginVertical: 7 }}>
        <Text style={[TransactionDetailsStyles.itemPrice, { fontSize: 14 }]}>
          Order actions
        </Text>
       </View>

      <View>
        {items.map((item) => (
          <View
            key={item.id}
            style={[
              orderStyles.roundedBox,
              {
                backgroundColor: '#fff',
                marginVertical: 2,
                paddingTop: 10,
              },
            ]}
          >
            <View
              style={[
                orderStyles.itemRow,
                {
                  paddingTop: 0,
                  alignItems: 'center',
                  marginBottom: 0,
                  paddingBottom: 2,
                  gap:5
                },
              ]}
            >
              <Image source={item.image} style={[orderStyles.image,{width:20,height:20}]} />
              <View style={orderStyles.text}>
                
                <Text style={[orderStyles.title, { lineHeight: 19 ,fontSize:12}]}>
                  {item.title}
                </Text>

                    <Text style={[orderStyles.description, { lineHeight: 19 ,fontSize:12}]}>
                    {item.description}
                  </Text>
              </View>
              {/* message button */}
               <BoxButton paddingHorizontal={6} width={"38%"} fontSize={12} title={item.button} backgroundColor={'#DEBC8E'} borderWidth={1} borderColor={'#DEBC8E'} onPress={()=> router.push("/")} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TransactionOrderActions;
