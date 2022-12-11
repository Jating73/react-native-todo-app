import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Alert, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "HTML I", done: true },
    { id: 2, task: "CSS", done: true },
    { id: 3, task: "Responsive design", done: true },
    { id: 4, task: "Git", done: true },
    { id: 5, task: "JavaScript I", done: true },
    { id: 6, task: "JavaScript II", done: false },
  ]);

  const addTask = (text) => {
    console.log("Text", text);
    if (!text) {
      Alert.alert("No tasks ??", "Please add a task", [
        {
          text: "OK",
        },
      ]);
    } else {
      setTasks((prevTasks) => [{ task: text, id: uuidv4() }, ...prevTasks]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Task item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 30,
  },
});
