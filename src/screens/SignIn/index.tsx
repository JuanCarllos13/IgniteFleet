import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
