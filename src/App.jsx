import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  
  let [todoList, setToDoList] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

  return (
    <SafeAreaView>
      <ToDoList tasks={todoList} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
