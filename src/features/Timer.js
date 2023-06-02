import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";

const Timer = ({ clearSubject, onTimerEnd, focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={() => {}}
          isPaused={!isStarted}
          onEnd={() => {}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            size={75}
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            size={75}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
