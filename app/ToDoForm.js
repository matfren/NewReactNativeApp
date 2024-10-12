import {StyleSheet, View, TextInput, Button} from 'react-native';

const ToDoForm = () => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="New Task"/>
            <Button title="Add to List"/>
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