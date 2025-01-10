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
  
  export default function PrivacyOptions() {
    const handleGoBack = () => {
      router.back();
    };
  
    const termsData: Term[] = [
      {
        id: '1',
        title: 'Introduction',
        content:
          'DecluttaKing values your privacy. This Privacy Policy explains how we collect, use, and protect your information.',
      },
      {
        id: '2',
        title: 'Information We Collect',
        points: [
          { id: '2.1', label: 'Personal Information', content: 'When you create an account, we collect information such as your name, email address, and phone number.' },
          {
            id: '2.2',
            label: 'Transaction Information',
            content:
              'Details of the items you list, swap, or purchase.',
          },
          {
            id: '2.3',
            label: 'Usage Data',
            content:
              ' Information about how you interact with our platform, such as pages visited and features used.',
          },
        ],
      },
      {
        id: '3',
        title: 'How We Use Your Information',
        points: [
          {
            id: '3.1',
            label: 'Provide Services',
            content:
              'To facilitate item listings, swaps, and transactions.',
          },
          {
            id: '3.2',
            label: 'Communication',
            content:
              'To send you updates, notifications, and support messages.',
          },
          {
            id: '3.3',
            label: 'Improvement',
            content:
              'To analyze usage and improve our platform.',
          },
           
        ],
      },
      {
        id: '4',
        title: 'Sharing Your Information',
        points: [
          { id: '4.1', label: 'With Other Users', content: 'Limited information is shared with other users to facilitate transactions.' },
          {
            id: '4.2',
            label: 'Service Providers',
            content: 'We may share information with third-party service providers to help us operate our business',
          },
          {
            id: '4.3',
            label: 'Legal Requirements',
            content: 'We may disclose your information to comply with legal obligations',
          },
        ],
      },
      {
        id: '5',
        title: 'Security',
        content:
          'We implement appropriate security measures to protect your information from unauthorized access and use.',
      },

      {
        id: '6',
        title: 'Data Retention',
        content:
          'We retain your information for as long as necessary to provide our services and comply with legal obligations.',
      },
     
      {
        id: '7',
        title: 'Your Rights',
        points: [
          {
            id: '6.1',
            label: 'Access',
            content: 'Access: You can request access to your personal information.',
          },
          {
            id: '6.2',
            label: 'Correction',
            content: 'Correction: You can request corrections to your personal information.',
          },
          {
            id: '6.3',
            label: 'Deletion',
            content: 'You can request the deletion of your account and personal information',
          },
        ],
      },
      {
        id: '8',
        title: 'Changes to this Policy',
        content:
          'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our platform.',
      },
      
      {
        id: '9',
        title: 'Contact Us',
        content: 'For any questions or concerns about these Terms, please contact us at help@decluttaking.com.',
      },
    ];
  
    const renderItem: ListRenderItem<Term> = ({ item }) => (
      <View style={{ marginTop: 0 }}>
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
          <Text style={styles.headerText}>Privacy Policy</Text>
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
      marginLeft: 10
      ,  fontFamily:"Helvetica Neue"
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor:'#f9f9f9'
    },
    boldS: {
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 18.2 , 
      fontFamily:"Helvetica Neue"
   },
    middleText: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 19.6,
      color: '#212121'
      , 
      fontFamily:"Proxima Nova"
    },
  });
  