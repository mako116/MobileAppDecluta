import React from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import UssdStyles from "@/styles/UssdStyles/Ussdstyles";
import YourCart from "@/styles/Cart/YourCart.styles";
import Colon from "@/assets/svg/colon";

type ViewUssdDetailProps = {
  // isOpen: boolean;
  scaleY: any;
  selectedBank: { name: string; ussd: string } | null;
  minutesArray: string[];
  secondsArray: string[];
  renderDigitBoxes: (digits: string[]) => JSX.Element[];
};

const ViewUssdDetail: React.FC<ViewUssdDetailProps> = ({
  // isOpen,
  scaleY,
  selectedBank,
  minutesArray,
  secondsArray,
  renderDigitBoxes,
}) => {
  return (
    <Animated.View >
         <View style={UssdStyles.dropdownContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedBank && (
              <View style={YourCart.UssdModal}>
                <Text style={YourCart.titles}>
                  Next, dial or tap the USSD code below on your phone to complete the payment.
                </Text>
                <View style={YourCart.Rounded}>
                  <Text style={YourCart.textcent}>{selectedBank?.ussd}</Text>
                </View>
                <Text style={YourCart.smallTxt}>
                  Dial the code and complete payment within the next
                </Text>
                <View style={UssdStyles.timerContainer}>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      {renderDigitBoxes(minutesArray)}
                    </View>
                    <Text>Minutes</Text>
                  </View>
                  <View style={UssdStyles.colon}>
                    <Colon />
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      {renderDigitBoxes(secondsArray)}
                    </View>
                    <Text>Seconds</Text>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
     </Animated.View>
  );
};

export default ViewUssdDetail;
