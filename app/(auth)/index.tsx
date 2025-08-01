import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background dark:bg-background-dark">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="w-full">
        <TouchableOpacity className="w-20 self-end">
          <FontAwesome.Button
            onPress={toggleTheme}
            name={colorScheme === "light" ? "sun-o" : "moon-o"}
            color="black"
            size={30}
            className="self-center"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
        <Image
          source={
            colorScheme === "light"
              ? require("@/assets/images/logo_mim_light.png")
              : require("@/assets/images/logo_mim_dark.png")
          }
          className="mb-[4rem] self-center"
        />
      </View>
      <View className="w-[95%] h-[35%] gap-4">
        <View className="bg-foreground dark:bg-foreground-dark rounded-2xl">
          <FontAwesome.Button
            name="apple"
            size={30}
            style={styles.button}
            backgroundColor="transparent"
          />
        </View>
        <View className="bg-foreground dark:bg-foreground-dark rounded-2xl">
          <FontAwesome.Button
            name="google"
            size={30}
            style={styles.button}
            backgroundColor="transparent"
          />
        </View>
        <View className="bg-foreground dark:bg-foreground-dark rounded-2xl">
          <FontAwesome.Button
            name="facebook"
            size={30}
            style={styles.button}
            backgroundColor="transparent"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    alignSelf: "center",
    padding: 35,
  },
});
