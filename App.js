import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      {/* top bar */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input}/>
        <Button title="ADD"/>
      </View>

      {/* goals */}
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: 220
  }
});

