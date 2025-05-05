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

const SubOtherActions = () => {
  const items = [
    {
      
      title: 'Leave a Review for Segun A.',
       description: 'Arrange pickup within 48hrs for a smooth experience',
      image: require('../../../../assets/images/New folder/startapp.png'),
     },
    {
      title: 'Rate Decluttaking',
      description: 'How was your experience with DecluttaKing? Rate us and leave a review to help others know what to expect when using the platform.',
      image: require('../../../../assets/images/New folder/rank.png'),
     },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginVertical: 7 }}>
        <Text style={[TransactionDetailsStyles.itemPrice, { fontSize: 14 }]}>
          Order #12345 details
        </Text>
       </View>

      <View>
        {items.map((item,index) => (
          <View
            key={index}
            style={[
              orderStyles.roundedBox,
              {
                backgroundColor: '#fff',
                marginVertical: 2,
                paddingTop: 10,
              },
            ]}
          >
            <TouchableOpacity
              style={[
                orderStyles.itemRow,
                {
                  paddingTop: 0,
                  alignItems: 'flex-start',
                  marginBottom: 0,
                  paddingBottom: 2,
                },
              ]}
            >
              <Image source={item.image} style={[orderStyles.image,{width:24,height:24}]} />
              <View style={orderStyles.text}>
                <Text style={[orderStyles.title, { lineHeight: 19,fontSize:17 }]}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                   <Text style={[orderStyles.description, { lineHeight: 19,fontSize:17 }]}>
                    {item.description}
                  </Text>
                </View>
              </View>

              <Rightarrow />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SubOtherActions;
