import {StyleSheet, View, TextInput, Button} from 'react-native';
import { useState } from 'react';


function ToDoForm ({addTask}) {
  
  const [taskText, setTaskText] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      //Checks if the input field is empty.
      if (taskText == '') {
        alert('Input field is empty.');
      }
      else {
        addTask(taskText);
        setTaskText('');
      }
    }

    return (
        <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="New Task"
              onChangeText={(text) => setTaskText(text)}
              value={taskText}
            />
            <Button 
              title="Add to List"
              onPress={handleSubmit}
            />
        </View>
    );
};

export default ToDoForm;


const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 50,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginRight: 15,
    },
  }
);