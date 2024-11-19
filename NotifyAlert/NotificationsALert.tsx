import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

interface NotificationBannerProps {
  message: string;
  visible: boolean;
  onDismiss: () => void;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  message,
  visible,
  onDismiss,
}) => {
  const fadeAnim = new Animated.Value(visible ? 1 : 0); // Initial opacity

  useEffect(() => {
    if (visible) {
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => onDismiss());
      }, 3000);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.banner, { opacity: fadeAnim, marginTop: 10}]}>
      <FontAwesome6 name="check" size={9} color="#212121" style={{ marginRight: 10 ,alignItems: "center" , borderRadius:11.25, backgroundColor:"#DEBC8E", padding: 4, }} />
       <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Green background for success
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  message: {
    color: '#212121',
    lineHeight:22.4,
    fontSize: 16,
    fontWeight: '700',
  },
});
