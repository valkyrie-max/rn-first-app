import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#5DAF77',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20
    }
})

export default GoalItem