import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Task({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.task}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    borderStyle: "dotted",
  },
});

export default Task;
