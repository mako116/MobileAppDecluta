import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ItemsProps {
    condition: string
    itemNumber: number
    category: string
    subCategory: string
}

const AboutItems: React.FC<ItemsProps> = ({ condition, itemNumber, category, subCategory }) => {
  return (
    <View style={{ marginTop: 20 }} >
        <Text style={[ styles.setionTitleText ]} >About this item</Text>
        <View style={[ styles.container ]} >
            <View style={[ styles.row ]} >
                <Text style={[ styles.titleText ]} >
                    Condition
                </Text>
                <Text style={[ styles.subTitleText ]}>
                    {condition}
                </Text>
            </View>

            <View style={[ styles.row ]} >
                <Text style={[ styles.titleText ]} >
                    Item Number
                </Text>
                <Text style={[ styles.subTitleText ]}>
                    {itemNumber}
                </Text>
            </View>

            <View style={[ styles.row ]} >
                <Text style={[ styles.titleText ]} >
                    Category
                </Text>
                <Text style={[ styles.subTitleText ]}>
                    {category}
                </Text>
            </View>

            <View style={[ styles.row ]} >
                <Text style={[ styles.titleText ]} >
                    Sub-category
                </Text>
                <Text style={[ styles.subTitleText ]}>
                    {subCategory}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default AboutItems

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
        color: '#7E7E7E',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
    },
    subTitleText: {
        color: '#212121',
        fontFamily: 'Helvetica Neue',
        fontWeight: 700,
        fontSize: 16,
    },
})