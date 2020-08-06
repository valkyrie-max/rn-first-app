import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView,
  FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  // hook to manage the user entries
  const [ courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { 
        key: Math.random().toString(), 
        value: goalTitle 
      }
    ])
  }

  return (
    <View style={styles.screen}>
      {/* top bar */}
      <GoalInput onAddGoal={addGoalHandler} />
      {/* goals */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={itemData => (<GoalItem onDelete={() => console.log(`does this work?`)} title={itemData.item.value}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: '100%',
    backgroundColor: '#E6D6B2'
  }
});

