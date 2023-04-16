import { View, Text } from "react-native";
import { global } from "../styles/global";
import React from "react";

const Task = ({ navigation, route }) => {
  return (
    <View style={global.container}>
      <Text>{route.params.task}</Text>
    </View>
  );
};

export default Task;
