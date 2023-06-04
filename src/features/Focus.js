import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { SPACING } from "../utils/SIZES";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={setSubject}
          style={styles.textinput}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={55}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: SPACING.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  textinput: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  button: {
    justifyContent: "center",
  },
});
