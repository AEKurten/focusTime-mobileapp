import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

export default Timing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
