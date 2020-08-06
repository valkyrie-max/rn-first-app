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

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    placeholder="Course Goal" 
                    style={styles.input}
                />
                <View style={styles.buttonsGroup}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="ADD"color="#6699CC"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={props.onCancel} color="#2D3142" title="CANCEL"/>
                    </View>
                </View>
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
        backgroundColor: '#B74F6F',
    },
    input: {
        borderColor: '#2D3142',
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        width: "60%",
        marginBottom: 20
    },
    buttonsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '50%'
    }
})

export default GoalInput;