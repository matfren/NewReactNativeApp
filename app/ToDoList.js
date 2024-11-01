import {Pressable, StyleSheet, View, Text, ScrollView} from 'react-native'; 

const TodoList = ({tasks}) => {


    return (
        <ScrollView>
            <Pressable>
            <View>
                {/* Map the array with each task having a separate view. Each task is styled as incomplete. */}
                {tasks.map((task) => 
                        <View style={styles.task}>
                            {<Text style={styles.taskText}>{task}</Text>}
                        </View>
                    )
                }
            </View>
            </Pressable>
        </ScrollView>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderBottomWidth: 2,
      borderColor: '#000',
    },
    done: {
      backgroundColor: '#008f00',
    },
    taskText: {
      fontSize: 16,
    }
  }
);