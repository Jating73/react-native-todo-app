import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import About from "../screens/About";
import Task from "../screens/Task";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Task" component={Task} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
