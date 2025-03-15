import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import DotIcon from '@/assets/svg/DotIcon';

const QuestionsAndAnswer = () => {
  return (
    <View style={{ marginTop: 20 }} >
        <Text style={[ styles.setionTitleText ]} >Questions & answers</Text>
        <View style={[ styles.container ]} >

            <Text style={[ styles.subTitleText ]}>
                Welcome to DecluttaKing's Q&A!
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                <DotIcon /> 
                <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                    Keep conversations courteous and on-topic
                </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                <DotIcon /> 
                <Text style={[ styles.beforebuyingAndSecuritySubTitleText ]} >
                    Don't share personal info (email, phone number, etc.)...
                    <Text style={[ styles.titleText ]} >Read more</Text>
                </Text>
                
            </View>

        </View>
    </View>
  )
}

export default QuestionsAndAnswer;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 6,
        padding: 20,
        gap: 10,
        backgroundColor: 'white'
    },
    setionTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 18,
        marginBottom: 10,
    },
    titleText: {
        color: '#212121',
        fontFamily: 'FONTSPRING DEMO - Proxima Nova',
        fontWeight: 700,
        fontSize: 16,
    },
    subTitleText: {
        color: '#212121',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 23
    },
    beforebuyingAndSecuritySubTitleText: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Proxima Nova',
        color: '#474747' 
    }
})