import {Pressable, StyleSheet, View, Text, ScrollView} from 'react-native'; 

const TodoList = () => {
    return (
        <ScrollView>
            <Pressable>
            <View style={[styles.task, styles.done]}>
                <Text style={styles.taskText}>Go on a marathon.</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>Go exercise.</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task, styles.done]}>
                <Text style={styles.taskText}>Go out for hot wings.</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>Refuel car.</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task, styles.done]}>
                <Text style={styles.taskText}>Fix garden.</Text>
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