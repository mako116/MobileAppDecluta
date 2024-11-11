import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Category2 from '../Category2/Category2';
 
export default function ProductsSlider2() {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category2
                  imageUrl={require('../../../../assets/images/ele.png')}
                  name="Electronics"
                      
                   />
        <Category2
                  imageUrl={require('../../../../assets/images/smallphone.png')}
                  name="Smartphones"
                     />
        <Category2
                  imageUrl={require('../../../../assets/images/lap.png')}
                  name="Laptops"
                           />
                            <Category2
                  imageUrl={require('../../../../assets/images/lap.png')}
                  name="Laptops"
                           />
                            <Category2
                  imageUrl={require('../../../../assets/images/ele.png')}
                  name="Electronics"
                      
                   />
       </ScrollView>
    </View>
  );
}
