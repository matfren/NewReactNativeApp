import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

export default function App() {
  //Import state hook and initialize state with a hard-coded array. 
  const [tasks,setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </View>
  );
}
