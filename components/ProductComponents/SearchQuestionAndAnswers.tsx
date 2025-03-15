import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputField from '@/UI/InputFields/TextInputField'
import Button from '../Button/button'
import ArrowDown from '@/assets/svg/arrowDown'
import SortingIcon from '@/assets/svg/SortingIcon'

const SearchQuestionAndAnswers = () => {
    const handleSearch = async () => {
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <View style={{ marginTop: 20 }} >
      <Text style={[ styles.setionTitleText ]} >Item description from the seller</Text>

        <View style={[ styles.row ]} >
            <View style = {{ flex: 1 }}>
                <TextInputField 
                    placeholder='e.g is it available'
                />
            </View>
            <View>
                <Button 
                    title='Search'
                    onPress={handleSearch}
                    backgroundColor='#DEBC8E'
                    borderWidth={0}
                    paddingHorizontal={20}
                    padding={1}
                />
            </View>
        </View>

        <View style={[ styles.row, styles.container ]} >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }} >
                <SortingIcon />
                <Text style={[ styles.text ]}>
                    Sort by 
                </Text>
                <Text style={[ styles.subText ]}>
                    latest reply
                </Text>
            </View>
            <ArrowDown />
        </View>
        <Text style={[ styles.subText, { marginTop: 10 } ]}>
            Showing 5 of 433 questions
        </Text>
      
    </View>
  )
}

export default SearchQuestionAndAnswers

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    },
    container: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 10,
    },
    setionTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 18,
        marginBottom: 10,
    },
    text:{
        color: '#212121',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
    },
    subText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 16,
    }
})