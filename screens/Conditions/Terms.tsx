import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

// Define types for terms data structure
type Point = {
  id: string;
  label: string;
  content: string;
};

type Term = {
  id: string;
  title: string;
  content?: string;
  points?: Point[];
};

export default function TermsOfUse() {
  const handleGoBack = () => {
    router.back();
  };

  const termsData: Term[] = [
    {
      id: '1',
      title: 'Introduction',
      content:
        'Welcome to DecluttaKing! By using our platform, you agree to these Terms and Conditions. Please read them carefully.',
    },
    {
      id: '2',
      title: 'Use of the Platform',
      points: [
        { id: '2.1', label: 'Eligibility', content: 'You must be at least 18 years old to use DecluttaKing.' },
        {
          id: '2.2',
          label: 'Account',
          content:
            'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.',
        },
        {
            id: '2.3',
            label: 'Prohibited Activities',
            content:
              ' You agree not to misuse the platform, including but not limited to posting unlawful content, engaging in fraudulent activities, or violating intellectual property rights.',
          },
        
      ],
    },
    {
      id: '3',
      title: 'Item Listings',
      points: [
        { id: '3.1', label: 'Accuracy', content: 'Ensure that all item descriptions are accurate and truthful.' },
        {
          id: '3.2',
          label: 'Prohibited Items',
          content:
            'Do not list items that are illegal, hazardous, or otherwise prohibited by our guidelines.',
        },
      ],
    },
    {
      id: '4',
      title: 'Transactions',
      points: [
        {
          id: '4.1',
          label: 'Swapping Items',
          content: 'Users can list items for swap or sale. All trades are final unless both parties agree to a return.',
        },
        {
          id: '4.2',
          label: 'Payments',
          content: 'Transactions involving cash payments are facilitated through our secure payment system.',
        },
      ],
    },
    {
      id: '5',
      title: 'Disputes',
      points: [
        {
          id: '5.1',
          label: 'Resolution',
          content:
            'In case of a dispute, contact our customer service team. We will attempt to resolve the issue in good faith.',
        },
        {
          id: '5.2',
          label: 'Liability',
          content: 'DecluttaKing is not liable for any loss or damage resulting from transactions between users.',
        },
      ],
    },
    {
      id: '6',
      title: 'Privacy',
      content:
        'Your use of DecluttaKing is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
    },
    {
      id: '7',
      title: 'Termination',
      content:
        'We reserve the right to suspend or terminate your account at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.',
    },
    {
      id: '8',
      title: 'Changes to Terms',
      content:
        'We may update these Terms from time to time. Continued use of the platform after changes constitute acceptance of the new Terms.',
    },
    {
      id: '9',
      title: 'Contact Us',
      content: 'For any questions or concerns about these Terms, please contact us at help@decluttaking.com.',
    },
  ];

  const renderItem: ListRenderItem<Term> = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <Text style={[styles.boldS, { paddingVertical: 5 }]}>
        {item.id}. {item.title}
      </Text>
      {item.points ? (
        item.points.map((point) => (
          <View style={{ flexDirection: 'row', paddingRight: 20, marginVertical: 5 }} key={point.id}>
            <Text style={{ paddingHorizontal: 5, fontWeight: '700' }}>•</Text>
            <Text style={styles.middleText}>
              <Text style={{ fontWeight: '700' }}>{point.label}: </Text>
              {point.content}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.middleText}>{item.content}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>
      <FlatList
        data={termsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#212121',
    marginLeft: 10,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor:'#f9f9f9'
  },
  boldS: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 18.2
    , fontFamily:"ProximaNovaR"
    
  },
  middleText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    color: '#212121'
    , fontFamily:"ProximaNovaR"
  },
});
