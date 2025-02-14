import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
} from 'react-native';
import YourCart from '@/styles/Cart/YourCart.styles';
import ArrowUpGray from '@/assets/svg/ArrowUpGray';
import ArrowGrayDown from '@/assets/svg/ArrowGrayDown';
import Colon from '@/assets/svg/colon';

const DropdownUssD: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(58);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else {
        setMinutes(4);
        setSeconds(58);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const formatDigits = (num: number) => String(num).padStart(2, '0').split('');

  const minutesArray = formatDigits(minutes);
  const secondsArray = formatDigits(seconds);

  const toggleDropdown = () => {
    if (isOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const scaleY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const renderDigitBoxes = (digits: string[]) =>
    digits.map((digit, index) => (
      <View key={index} style={styles.digitBox}>
        <Text style={styles.digitText}>{digit}</Text>
      </View>
    ));

  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <View style={styles.buttonRow}>
          <Image
            source={require('../../../../../assets/svg/GtbIcon.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={YourCart.title}>Guaranty Trust Bank</Text>
        </View>
        {isOpen ? <ArrowUpGray /> : <ArrowGrayDown />}
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, { transform: [{ scaleY }] }]}>
        {isOpen && (
          <View style={styles.dropdownContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={YourCart.UssdModal}>
                <Text style={YourCart.titles}>
                  Next, dial or tap the USSD code below on your phone to
                  complete the payment.
                </Text>
                <View style={YourCart.Rounded}>
                  <Text style={YourCart.textcent}>*737*1111*0000#</Text>
                </View>
                <Text style={YourCart.smallTxt}>
                  Dial the code and complete payment within the next
                </Text>
                <View style={styles.timerContainer}>
                  <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                      {renderDigitBoxes(minutesArray)}
                    </View>
                    <Text>Minutes</Text>
                  </View>
                  <View style={styles.colon}>
                  <Colon/>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                      {renderDigitBoxes(secondsArray)}
                    </View>
                    <Text>Seconds</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default DropdownUssD;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: '#E9E9E9',
    borderWidth: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  dropdown: {
    overflow: 'hidden',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  saveText: {
    color: '#009217',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.8,
    textAlign: 'right',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  digitBox: {
    marginHorizontal:6,
    paddingVertical:7,
    paddingHorizontal:15,
     borderWidth: 1,
    borderColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F5EADC',
   },
  colon: {
   alignItems:"center",
    marginBottom:"10%"
  },
  digitText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
});
