import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SellerStyles from '@/styles/ProductScreenStyle/SellerProfileCardStyle';
import FlagIcon from '@/assets/svg/FlagIcon';
import CheckIcon from '@/assets/svg/CheckIconn';
import ImageGrid from './ImageGrid';

const SellerReviews: React.FC = () => {
  const images = [
    require("../../assets/images/newimages/image 26.png"),
    require("../../assets/images/newimages/image 26.png"),
    require("../../assets/images/newimages/image 26.png"),
    require("../../assets/images/newimages/image 26.png"),
    require("../../assets/images/newimages/image 26.png"),
    require("../../assets/images/newimages/image 26.png"),
  ];
  return (
    <View style={[ styles.container ]} >
      <View
        style={{ flexDirection: 'column', gap: 10 }}
      >
        <View style={SellerStyles.starsContainer}>
          {Array(5).fill(0).map((_, i) => (
            <Text key={i} style={[SellerStyles.star, i < 4 ? SellerStyles.filledStar : SellerStyles.emptyStar]}>
            ★
            </Text>
          ))}
        </View>
        <Text style={styles.subTitleText}>
          <Text style={styles.setionTitleText}>Dorsey M,</Text> 
          2024-09-06
        </Text>
        <Text style={styles.subTitleText}>
          <Text style={styles.setionTitleText}>Item purchased: </Text> 
          Samsung A05 6.7 4GB Ram...
        </Text>
        <Text style={styles.subTitleText}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Text>
        <Text style={styles.subTitleText}>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        
        <ImageGrid images={images} />;

        <View 
          style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
        >
          <CheckIcon />
          <Text style={styles.subTitleText} >
            I recommend this seller
          </Text>
        </View>
      </View>

      <View  style={{ marginTop: 20, flexDirection: 'column', gap: 10 }} >
        <View style={SellerStyles.starsContainer}>
          {Array(5).fill(0).map((_, i) => (
            <Text key={i} style={[SellerStyles.star, i < 4 ? SellerStyles.filledStar : SellerStyles.emptyStar]}>
            ★
            </Text>
          ))}
        </View>
        <Text style={styles.subTitleText}>
          <Text style={styles.setionTitleText}>Dorsey M,</Text> 
          2024-09-06
        </Text>
        <Text style={styles.subTitleText}>
          <Text style={styles.setionTitleText}>Item purchased: </Text> 
          Samsung A05 6.7 4GB Ram...
        </Text>
        <Text style={styles.subTitleText}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Text>
        <Text style={styles.subTitleText}>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>

        <View>

        </View>

        <View 
          style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
        >
          <CheckIcon />
          <Text style={styles.subTitleText} >
            I recommend this seller
          </Text>
        </View>
      </View>
    </View>
  )
}

export default SellerReviews;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 20,
        gap: 10,
        backgroundColor: 'white'
    },
    answerContainer: {
        flexDirection: 'column',
        borderRadius: 5,
        padding: 10,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: '#FCF8F4'
    },
    setionTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 500,
        fontSize: 16,
    },
    subTitleText: {
        color: '#212121',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 23
    },
    beforebuyingAndSecuritySubTitleText: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        color: '#474747' 
    },
    sellerText: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#212121',
        backgroundColor: '#F5EADC',
        fontSize: 13,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        borderRadius: 3,
    },
})