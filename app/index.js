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

  const addTask = (taskText) => {
    //Checks if the task is already in the list.
    if (tasks.indexOf(taskText) == -1) {
    //Will get all current task and add the new task at the end.
      setTasks([...tasks, taskText])
    }
    else{
      alert('Task is already in list.')
    }
  }

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}
