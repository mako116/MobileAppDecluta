import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface ProfileHeaderProps {
  fullName: string;
  userId: string;
  profilePhoto: ImageSourcePropType;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  fullName,
  userId,
  profilePhoto
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={profilePhoto} style={styles.profilePhoto} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{fullName}</Text>
          <Text style={styles.userId}>User ID: {userId}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth:0.7,
    borderColor: '#ddd'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
  },
  profilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 2 
  },
  userInfo: {
    marginLeft: 12,
    justifyContent: 'center' 
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userId: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 8
  },
  editButtonText: {
    fontSize: 14,
    color: '#666',
  }
});