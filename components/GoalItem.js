import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View onTouch style={styles.listItem}>
                <Text style={styles.textColor}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#2D3142',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20
    },
    textColor: {
        color: '#E9F2E3'
    }
})

export default GoalItem