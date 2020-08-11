import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  // hook to manage the user entries
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      alert('Enter a goal.')
    } else {
      setCourseGoals(currentGoals => [
        ...courseGoals, 
        { 
          id: Math.random().toString(), 
          value: goalTitle 
        }
      ]);
      setIsAddMode(false);
    }
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button onPress={() => setIsAddMode(true)} title="Add New Goal!"/>
      {/* top bar */}
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
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
    backgroundColor: '#E9F2E3'
  }
});

