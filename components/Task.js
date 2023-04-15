import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Task({ item, deleteTask }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.task}</Text>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        onPress={() => deleteTask(item.id)}
      />
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Task;
