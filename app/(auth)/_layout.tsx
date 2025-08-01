import { Slot } from "expo-router";
import { useColorScheme } from "nativewind";
import { StyleSheet, View } from "react-native";

export default function AuthLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <View
      style={styles.container}
      className={colorScheme === "dark" ? "dark flex-1" : "flex-1"}
    >
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f0f0f0',
  },
});
