import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { COLORS } from "../utils/COLORS";

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput label="What would you like to focus on?" />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: "top",
  },
});
