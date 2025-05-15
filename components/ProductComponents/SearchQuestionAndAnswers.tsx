import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputField from '@/UI/InputFields/TextInputField'
import Button from '../Button/button'
import ArrowDown from '@/assets/svg/arrowDown'
import SortingIcon from '@/assets/svg/SortingIcon'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

const SearchQuestionAndAnswers = () => {
    const res = useSelector((state: RootState) => state.auth.userData);
    const handleSearch = async () => {
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <View >
      <Text style={[ styles.setionTitleText ]} >Search questions and answers</Text>

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
                    padding={10}
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
        backgroundColor: 'white'
    },
    setionTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 14,
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