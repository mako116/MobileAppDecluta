import SellerStyles from '@/styles/ProductScreenStyle/SellerProfileCardStyle';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SellerProfileCard: React.FC = () => {
  return (
    <View style={SellerStyles.card}>
        {/* Header Section */}
        <View style={SellerStyles.row}>
            <View style={SellerStyles.header}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/10.jpg' }} // Replace with actual image
                    style={SellerStyles.profileImage}
                />
                <View>
                    <Text style={SellerStyles.sellerName}>Segun A.</Text>
                    <Text style={SellerStyles.memberSince}>Member since: Jan 2024</Text>
                </View>
            </View>

            {/* Button */}
            <TouchableOpacity style={SellerStyles.profileButton}>
                <Text style={SellerStyles.buttonText}>View seller’s profile</Text>
            </TouchableOpacity>
        </View>
        

        <View style={SellerStyles.row}>
            {/* Rating Section */}
            <View style={SellerStyles.section}>
                <Text style={SellerStyles.label}>Rating</Text>
                <View style={SellerStyles.starsContainer}>
                    <Text style={SellerStyles.ratingText}>4.9/5</Text>
                    {Array(5).fill(0).map((_, i) => (
                        <Text key={i} style={[SellerStyles.star, i < 4 ? SellerStyles.filledStar : SellerStyles.emptyStar]}>
                        ★
                        </Text>
                    ))}
                </View>
            </View>

            {/* Response Rate */}
            <View style={SellerStyles.statBlock}>
                <Text style={SellerStyles.label}>Response Rate</Text>
                <View style={SellerStyles.progressBar}>
                    <View style={[SellerStyles.progressFill, { width: '97%' }]} />
                    <Text style={SellerStyles.progressText}>99%</Text>
                </View>
            </View>
        </View>
        

      {/* Stats Section */}
      <View style={SellerStyles.statsContainer}>
        {/* Dispute Rate */}
        <View style={SellerStyles.statBlock}>
          <Text style={SellerStyles.label}>Dispute Rate</Text>
          <View style={[SellerStyles.progressBar, {marginRight: 10}]}>
            <View style={[SellerStyles.progressFill, { width: '2%' }]} />
            <Text style={SellerStyles.progressText}>2%</Text>
          </View>
        </View>

        {/* Item Quality */}
        <View style={SellerStyles.statBlock}>
          <Text style={SellerStyles.label}>Item Quality</Text>
          <View style={SellerStyles.progressBar}>
            <View style={[SellerStyles.progressFill, { width: '90%' }]} />
            <Text style={SellerStyles.progressText}>90%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};



export default SellerProfileCard;
