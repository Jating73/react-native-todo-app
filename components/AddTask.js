import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add New Task"
        onChangeText={changeHandler}
      />
      <Button title="Add Task" onPress={() => addTask(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    margin: 10,
  },
});

export default AddTask;
