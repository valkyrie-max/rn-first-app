import React, {useState} from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    StyleSheet } from 'react-native';

const GoalInput = props => {
    const [ enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                value={enteredGoal}
                placeholder="Course Goal" 
                style={styles.input}
            />
            <Button 
                onPress={props.onAddGoal.bind(this, enteredGoal)} 
                title="ADD"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30
    },
    input: {
        borderColor: '#5DAF77',
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        width: 220
    }
})

export default GoalInput;