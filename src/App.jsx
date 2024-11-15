import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

function App() {
  
  let [todoList, setToDoList] = useState(['Do laundry', 'Go to gym', 'Walk dog'])


  const addTask = (task) => {
      setToDoList([...todoList, task]);
  };

  return (
    <NavigationContainer>
      <SafeAreaView>
        <ToDoList tasks={todoList} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
