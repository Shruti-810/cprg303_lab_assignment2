import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  
  let [todoList, setToDoList] = useState(['Do laundry', 'Go to gym', 'Walk dog'])


  const addTask = (task) => {
      setToDoList([...todoList, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={todoList} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
