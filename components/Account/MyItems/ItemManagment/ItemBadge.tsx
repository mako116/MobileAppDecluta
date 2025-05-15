import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ItemStatus } from './item';

interface StatusBadgeProps {
  status: ItemStatus;
  large?: boolean;
}

interface StatusInfo {
  text: string;
  color: string;
  bgColor: string;
  icon?: string;
}

const getStatusInfo = (status: ItemStatus): StatusInfo => {
  switch (status) {
    case 'active':
      return {
        text: 'Your Item is Live!',
        color: '#4CAF50',
        bgColor: '#E8F5E9',
        icon: 'checkmark-circle',
      };
    case 'inactive':
      return {
        text: 'Inactive Item',
        color: '#9E9E9E',
        bgColor: '#F5F5F5',
        icon: 'ellipse-outline',
      };
    case 'pending':
      return {
        text: 'Item Pending Review',
        color: '#FF9800',
        bgColor: '#FFF3E0',
        icon: 'time-outline',
      };
    case 'sold':
      return {
        text: 'Congrats! Item Sold Successfully!',
        color: '#FFAB00',
        bgColor: '#FFFDE7',
        icon: 'trophy-outline',
      };
    case 'rejected':
      return {
        text: 'Item Rejected',
        color: '#F44336',
        bgColor: '#FFEBEE',
        icon: 'alert-circle-outline',
      };
    case 'under_review':
      return {
        text: 'Under Review',
        color: '#9C27B0',
        bgColor: '#F3E5F5',
        icon: 'ellipse-outline',
      };
    case 'draft':
      return {
        text: 'Draft',
        color: '#9E9E9E',
        bgColor: '#F5F5F5',
        icon: 'document-outline',
      };
    default:
      return {
        text: '',
        color: '#000000',
        bgColor: '#FFFFFF',
      };
  }
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, large = false }) => {
  const statusInfo = getStatusInfo(status);

  return (
    <View style={[styles.container]}>
      {statusInfo.icon && (
        <Ionicons
          name={statusInfo.icon as any}
          size={large ? 20 : 16}
          color={statusInfo.color}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.text,
          { color: statusInfo.color, fontSize: large ? 16 : 14, fontWeight: large ? '600' : '500' },
        ]}
      >
        {statusInfo.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 12,
    marginBottom: 8,
    borderRadius: 8,

  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontWeight: '500',
  },
});

export default StatusBadge;