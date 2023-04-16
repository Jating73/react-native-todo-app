import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Task from "../screens/Task";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10609B",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="Task"
        component={Task}
        options={({ route }) => ({ title: route.params.task })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
