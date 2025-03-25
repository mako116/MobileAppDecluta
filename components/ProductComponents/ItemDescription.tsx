import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ItemsProps {
    description: string
}

const ItemDescription: React.FC<ItemsProps> = ({ description }) => {
  return (
    <View style={{ marginTop: 20 }} >
        <Text style={[ styles.setionTitleText ]} >Item description from the seller</Text>
        <View style={[ styles.container ]} >

            <Text style={[ styles.subTitleText ]}>
                {description}
            </Text>
            <TouchableOpacity>
                <Text style={[ styles.titleText ]} >See full description</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default ItemDescription

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
        fontSize: 14,
        textDecorationLine: "underline"
    },
    subTitleText: {
        color: '#212121',
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 23
    },
})