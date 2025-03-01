import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Svg width="67" height="66" viewBox="0 0 67 66" fill="none">
        <Rect x="0.5" width="66" height="66" rx="33" fill="#F5EADC" />
        <Circle cx="33.7445" cy="32.7557" r="27.3778" fill="#DEBC8E" />
        <Circle cx="33.5" cy="33" r="23" fill="#B29672" />
        <Path
          d="M34 31.8337C35.2886 31.8337 36.3333 30.789 36.3333 29.5003C36.3333 28.2117 35.2886 27.167 34 27.167C32.7113 27.167 31.6666 28.2117 31.6666 29.5003C31.6666 30.789 32.7113 31.8337 34 31.8337Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <Path
          d="M38.6667 36.5003C38.6667 37.7895 38.6667 38.8337 34 38.8337C29.3334 38.8337 29.3334 37.7895 29.3334 36.5003C29.3334 35.2112 31.4217 34.167 34 34.167C36.5784 34.167 38.6667 35.2112 38.6667 36.5003Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <Path
          d="M23.5 31.1533C23.5 27.4223 23.5 25.5568 23.941 24.9292C24.3808 24.3027 26.1343 23.7018 29.6425 22.5013L30.311 22.2727C32.1392 21.6462 33.0527 21.3335 34 21.3335C34.9473 21.3335 35.8608 21.6462 37.689 22.2727L38.3575 22.5013C41.8657 23.7018 43.6192 24.3027 44.059 24.9292C44.5 25.5568 44.5 27.4235 44.5 31.1533V32.9897C44.5 35.9122 43.5235 38.1662 42.1667 39.8882M23.7252 35.3335C24.725 40.3478 28.8387 42.932 31.5488 44.115C32.39 44.4825 32.8112 44.6668 34 44.6668C35.19 44.6668 35.61 44.4825 36.4512 44.115C37.1267 43.821 37.8873 43.4383 38.6667 42.9553"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
