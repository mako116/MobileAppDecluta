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

const TransactionOrderDetails = () => {
  const items = [
    {
      id: '1',
      orderId: '54321',
      title: 'Samsung Galaxy A05...',
      location: 'Agbowo UI, Ibadan, Oyo',
      description: '₦150,000 (In Escrow)',
      image: require('../../../../assets/images/New folder/Frame 648006 (1).png'),
      statusLabel: 'Pickup your order before Jun 31st, 2024',
    },
    {
      id: '2',
      orderId: '54321',
      title: 'Samsung Galaxy A05...',
      description: '₦150,000 (In Escrow)',
      location: 'Agbowo UI, Ibadan, Oyo',
      image: require('../../../../assets/images/New folder/Frame 648006 (1).png'),
      statusLabel: 'Pickup your order before Jun 31st, 2024',
    },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginVertical: 7 }}>
        <Text style={[TransactionDetailsStyles.itemPrice, { fontSize: 14 }]}>
          Order #12345 details
        </Text>
        <Rightarrow color="#212121" width={18} height={18} />
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
            <TouchableOpacity
              style={[
                orderStyles.itemRow,
                {
                  paddingTop: 0,
                  alignItems: 'center',
                  marginBottom: 0,
                  paddingBottom: 2,
                },
              ]}
            >
              <Image source={item.image} style={orderStyles.image} />
              <View style={orderStyles.text}>
                <Text style={[orderStyles.itemLabel, { lineHeight: 19 }]}>
                  Order #{item.orderId}
                </Text>
                <Text style={[orderStyles.title, { lineHeight: 19 }]}>
                  {item.title}
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Tag />
                  <Text style={[orderStyles.description, { lineHeight: 19 }]}>
                    {item.description}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <LocationIcons />
                  <Text style={[orderStyles.description, { color: '#474747', lineHeight: 19 }]}>
                    {item.location}
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

export default TransactionOrderDetails;
