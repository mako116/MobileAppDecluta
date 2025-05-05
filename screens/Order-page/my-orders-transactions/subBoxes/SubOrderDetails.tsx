import { View, Text } from 'react-native'
import React from 'react'
import SummaryText from '@/UI/TextBetweenwithIcon/TextBetweenwithIcon'
import TransactionDetailsStyles from '@/styles/TransactionDetails/TransactionDetails.styles'
import Rightarrow from '@/assets/images/kyc/rightarrow'

export default function SubOrderDetails() {
    const ORDER = {
        price: 75000,
        Type: 'item purchase',
       orderId: '12345-1djdhsjs',
       amount: '20000',
        };
  return (
    <>
     <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginVertical: 7 }}>
     <Text style={[TransactionDetailsStyles.itemPrice, {    fontSize: 14 }]}>
       Order #12345 details
     </Text>
       <Rightarrow color="#212121" width={18} height={18} />
        </View>
          <View style={TransactionDetailsStyles.summaryBox}>
          <SummaryText label="Order ID" value={ORDER.orderId} />
          <SummaryText label="Order Amount" value={ORDER.amount} />
           <SummaryText label="Cancellation Fee(1%)" value={ORDER.amount} />
        <SummaryText label="Refund Amount" value={ORDER.amount} />
    </View>
    </>
  )
}