import { StyleSheet, Text, View, Vibration } from "react-native";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { SPACING } from "../utils/SIZES";
import { COLORS } from "../utils/COLORS";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import Timing from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const Timer = ({ clearSubject, onTimerEnd, focusSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={setProgress}
          isPaused={!isStarted}
          onEnd={onEnd}
        />
        <View style={styles.indicator}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: SPACING.sm }}>
        <ProgressBar
          color={COLORS.progressBar}
          style={{ height: 10 }}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
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
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="Clear" onPress={clearSubject} />
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
    padding: SPACING.md,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    paddingTop: SPACING.xxl,
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: COLORS.white,
    textAlign: "center",
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: SPACING.xxl,
    flexDirection: "row",
  },
  clearSubject: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
