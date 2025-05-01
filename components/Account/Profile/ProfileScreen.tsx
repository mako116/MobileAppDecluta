import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfileHeader } from './ProfileAvatar';
import { PersonalInfoSection } from './PersonalInfoSection';

export const ProfileScreen: React.FC = () => {
  const [personalInfoExpanded, setPersonalInfoExpanded] = useState(false);
  
  const userData = {
    fullName: 'Matthew Johnson Chris',
    userId: '1234567890',
    profilePhoto: { uri: "https://i.pinimg.com/736x/b6/82/3a/b6823ad5dbd1061015ea6b9fdd9b955e.jpg" },
    personalInfo: {
      fullName: 'Matthew Chris',
      phoneNumber: '+234 01234 56789',
      email: 'm*******@gmail.com',
      nin: '********789',
      bvn: '978*****120',
      dob: '**/***/96',
      address: {
        state: 'Oyo State',
        city: 'Ibadan',
        street: 'No 1, ABCDEF Street, Off MNOPQ...',
      }
    }
  };

  const togglePersonalInfo = () => {
    setPersonalInfoExpanded(!personalInfoExpanded);
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        fullName={userData.fullName}
        userId={userData.userId}
        profilePhoto={userData.profilePhoto}
      />
      <PersonalInfoSection
        expanded={personalInfoExpanded}
        onToggle={togglePersonalInfo}
        personalInfo={userData.personalInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

  }
});