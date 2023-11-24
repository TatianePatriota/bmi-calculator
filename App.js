import { View, StyleSheet } from "react-native";
import Title from "./src/components/Title/Title";
import FormMain from "./src/components/FormMain/FormMain";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 80,
  },
});
