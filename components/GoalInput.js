import React, {useState} from 'react'
import { 
    View, 
    TextInput, 
    Button, 
    StyleSheet,
    Modal } from 'react-native';

const GoalInput = props => {
    const [ enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };
    return (
        <Modal visible={props.visible} animationType="slide">
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
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: '#B74F6F'
    },
    input: {
        borderColor: '#2D3142',
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        width: 220,
        marginBottom: 20
    }
})

export default GoalInput;