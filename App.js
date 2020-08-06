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
        id: Math.random().toString(), 
        value: goalTitle 
      }
    ])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>
      {/* top bar */}
      <GoalInput onAddGoal={addGoalHandler} />
      {/* goals */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>)}
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

