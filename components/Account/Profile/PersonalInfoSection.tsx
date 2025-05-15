import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InfoItem } from './InfoItem';

interface Address {
  state: string;
  city: string;
  street: string;
}

interface PersonalInfoData {
  fullName: string;
  phoneNumber: string;
  email: string;
  nin: string;
  bvn: string;
  dob: string;
  address: Address;
}

interface PersonalInfoSectionProps {
  expanded: boolean;
  onToggle: () => void;
  personalInfo: PersonalInfoData;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  expanded,
  onToggle,
  personalInfo
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.header,
          expanded && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#eee' }
        ]}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.title}>Personal Information</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#666"
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.content}>
          <InfoItem
            icon="person-outline"
            label="Full name"
            value={personalInfo.fullName}
          />
          <InfoItem
            icon="call-outline"
            label="Phone number"
            value={personalInfo.phoneNumber}
          />
          <InfoItem
            icon="mail-outline"
            label="Email"
            value={personalInfo.email}
          />
          <InfoItem
            icon="card-outline"
            label="NIN number"
            value={personalInfo.nin}
          />
          <InfoItem
            icon="keypad-outline"
            label="BVN number"
            value={personalInfo.bvn}
          />
          <InfoItem
            icon="calendar-outline"
            label="Date of Birth"
            value={personalInfo.dob}
          />
          
          <Text style={styles.sectionTitle}>Address</Text>
          
          <InfoItem
            icon="business-outline"
            label="State"
            value={personalInfo.address.state}
          />
          <InfoItem
            icon="home-outline"
            label="City"
            value={personalInfo.address.city}
          />
          <InfoItem
            icon="location-outline"
            label="Street Address"
            value={personalInfo.address.street}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth:0.7,
    borderColor:'#ddd'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  }
});