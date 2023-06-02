import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { COLORS } from "./src/utils/COLORS";
import Focus from "./src/features/Focus";
import React, { useState } from "react";
import Timer from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 100,
  },
});
