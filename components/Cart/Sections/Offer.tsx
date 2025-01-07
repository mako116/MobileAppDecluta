 
import Offers from '@/assets/svg/offers';
 import { useOffer } from '@/context/OfferContext';
 import React, { useState } from 'react';
import { Image, ScrollView, Text,TouchableOpacity, View } from 'react-native';
import CheckoutFoot from './Footer/CheckoutFoot';
import OfferStyle from '@/styles/Cart/offer.styles';
import YourCart from '@/styles/Cart/YourCart.styles';
import CouponAppliedModal from './Modal/Sucessful';
 
const Offer = () => {
  const { offers } = useOffer();
  const [appliedOffers, setAppliedOffers] = useState<{ [key: number]: string }>({}); // Track applied offers and their background colors
  const [modalVisible, setModalVisible] = useState(false);

  // const offer = offers.length > 0 ? offers[0] : null; // Get the first offer if it exists

  // Function to apply the offer when clicked
  const handleApplyClick = (id: number) => {
    setAppliedOffers((prevState) => ({
      ...prevState,
      [id]: prevState[id] === "#DEBC8E" ? "#E9E9E9" : "#DEBC8E", // Toggle background color
    }));
      // Show the modal
      setModalVisible(true);
  };

  
// Function to close the modal
const closeModal = () => {
  setModalVisible(false);
};

// Handle the empty cart
  if (offers.length === 0) {
    return (
      <View style={[YourCart.container, { paddingHorizontal: 40 }]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
          }}
        >
          <Offers />
          <Text
            style={[
              YourCart.title,
              { textAlign: 'center', fontSize: 19, marginBottom: 3, marginTop: 10 },
            ]}
          >
            No Current Offers
          </Text>
          <Text style={YourCart.rewardText}>
            We don’t have any offers right now. Check back later for exciting promotions and
            discounts.
          </Text>
        </View>
      </View>
    );
  }
   return (
    <View style={YourCart.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
        showsVerticalScrollIndicator={false} // Hides vertical scrollbar
        scrollEventThrottle={16}
      >
        <View style={YourCart.main}>
          {offers.map((item, index) => (
            // <View  style={OfferStyle.notificationContents}>
              <View key={index} style={OfferStyle.offerCard}>
                <Text style={OfferStyle.title}>{item.title}</Text>
                <Text style={OfferStyle.desc}>{item.description}</Text>
                <View style={OfferStyle.offerExpiry}>
                  <Text style={OfferStyle.smdesc}>Offer expires</Text>
                  <Text style={OfferStyle.smdesc}>{item.expiryDate}</Text>
                </View>
                <View style={{position:"absolute", top:0, right:-10, overflow:"hidden",}}>
                <Image source={require('../../../assets/svg/Group 440.jpg')}
                  style={{ width: 100, height: 70,  }}
                  resizeMode='contain'
                   />
                </View>

                {/* Dotted Borders Section */}
                <View style={OfferStyle.dottedBorders}>
                  {/* Top Border */}
                  <View style={OfferStyle.topBorder}>
                    {Array(50).fill(0).map((_, index) => (
                      <View key={`top-${index}`} style={OfferStyle.dash} />
                    ))}
                  </View>

                  {/* Bottom Border */}
                  <View style={OfferStyle.bottomBorder}>
                    {Array(50).fill(0).map((_, index) => (
                      <View key={`bottom-${index}`} style={OfferStyle.dash} />
                    ))}
                  </View>

                  {/* Left Border */}
                  <View style={OfferStyle.leftBorder}>
                    {Array(20).fill(0).map((_, index) => (
                      <View key={`left-${index}`} style={OfferStyle.borderSide} />
                    ))}
                  </View>

                  {/* Right Border */}
                  <View style={OfferStyle.rightBorder}>
                    {Array(20).fill(0).map((_, index) => (
                      <View key={`right-${index}`} style={OfferStyle.borderSide} />
                    ))}
                  </View>

                  {/* Inner Content */}
                  <View style={OfferStyle.applyOfferContainer}>
                    <View style={OfferStyle.applyOfferContainer}>
                      <View style={OfferStyle.offerDetails}>
                        <View style={[OfferStyle.offerIndicator, { backgroundColor: appliedOffers[item.id] || "#E9E9E9" }]}>
                        </View>
                        <Text>{item.numberOfOffers}</Text>
                      </View>

                       <TouchableOpacity
                      onPress={() => handleApplyClick(item.id)}
                      style={[OfferStyle.applyButton, appliedOffers[item.id] === "#DEBC8E" && OfferStyle.applyButtonDisabled]}
                      disabled={appliedOffers[item.id] === "#DEBC8E"}
                    >
                      <Text style={[OfferStyle.applyButtonText, appliedOffers[item.id] === "#DEBC8E" && OfferStyle.applyButtonTextDisabled]}>
                        {appliedOffers[item.id] === "#DEBC8E" ? "Applied" : "Apply"}
                      </Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={OfferStyle.discountLabel}>
                  <Text style={OfferStyle.cashback}>{item.Discount}</Text>
                </View>
              </View>
            // </View>
          ))}
        </View>
      </ScrollView>
      {/* checkout  */}
      <CheckoutFoot/>

       {/* Coupon Applied Modal */}
       <CouponAppliedModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

export default Offer;
