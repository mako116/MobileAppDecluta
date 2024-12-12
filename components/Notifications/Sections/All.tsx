import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const All = () => {

    const Notifics =[
        {
            name:"All"
        },
        {
            name:"Updates"
        },
        {
            name:"Transactions"
        },
        {
            name:"Activities"
        },
        {
            name:"Activities"
        },
        {
            name:"Activities"
        },
        {
            name:"Activities"
        },
    ]
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <View style={{flexDirection:"row", gap:5, paddingHorizontal:10, paddingVertical:20}}>
            {Notifics.map((_items,index)=>(
                <View key={index}>
                    <View style={styles.box}>
                        <Text style={{fontFamily:"Proxima"}}>{_items.name}</Text>
                    </View>
                </View>
        ))}
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    box:{
        paddingVertical:10,
        paddingHorizontal:14,
        borderWidth:1,
        borderColor:"#000"
    }
})

export default All;
