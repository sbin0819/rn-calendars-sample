import * as React from "react";
import { View, Text, StyleSheet, AppRegistry } from "react-native";
import App from "./App";

const styles = StyleSheet.create({
  window: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "dotted",
    maxWidth: 375,
    backgroundColor: "#000"
  },
  statusBar: {
    height: 35,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  statusBarItem: {
    color: "#fff"
  },
  app: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const PhoneWindow = (props: any) => (
  <View style={styles.window}>
    <View style={styles.statusBar}>
      <Text style={styles.statusBarItem}>9:30</Text>
      <Text style={styles.statusBarItem}>{"4G   ###"}</Text>
    </View>
    <View style={styles.app}>
      <App />
    </View>
  </View>
);

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("App", () => PhoneWindow);
AppRegistry.runApplication("App", { rootTag });
