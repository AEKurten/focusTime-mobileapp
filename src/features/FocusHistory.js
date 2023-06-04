import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../utils/COLORS";
import { FONTSIZES, SPACING } from "../utils/SIZES";

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.noTitle}>No Focus History Yet...</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    flex: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: FONTSIZES.md,
    fontWeight: "bold",
  },
  item: {
    fontSize: FONTSIZES.md,
    color: COLORS.white,
    paddingTop: SPACING.sm,
  },
  noTitle: {
    paddingHorizontal: SPACING.lg,
    color: COLORS.white,
    fontSize: FONTSIZES.md,
    fontWeight: "bold",
  },
});
