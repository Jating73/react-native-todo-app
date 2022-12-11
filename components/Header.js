import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Today's Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height: 80,
    paddingTop: 40,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default Header;
