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
import FocusHistory from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
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
