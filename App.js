import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { COLORS } from "./src/utils/COLORS";
import Focus from "./src/features/Focus";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Focus />
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
