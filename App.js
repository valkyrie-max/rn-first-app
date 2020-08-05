import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView,
  FlatList } from 'react-native';

export default function App() {
  // hook to manage the user entries
  const [ enteredGoal, setEnteredGoal] = useState('');
  const [ courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { 
        key: Math.random().toString(), 
        value: enteredGoal 
      }
    ])
  }

  return (
    <View style={styles.screen}>
      {/* top bar */}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder="Course Goal" 
          style={styles.input}
        />
        <Button 
          onPress={addGoalHandler} 
          title="ADD"
        />
      </View>

      {/* goals */}
      <FlatList 
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
          )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: '100%',
    backgroundColor: '#E6D6B2'
  },
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
  },
  listItem: {
    padding: 10,
    backgroundColor: '#D1A89A',
    borderColor: '#C89678',
    borderWidth: 2,
    marginTop: 20
  }
});

