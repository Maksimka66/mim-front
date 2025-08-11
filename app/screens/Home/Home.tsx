import ActionIcon from "@/app/components/ActionIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="w-[95%] h-10 self-center">
        <LinearGradient
          colors={["#0D919BD6", "#A691807A", "#F66E49BD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="flex-1 rounded-full"
        />
      </View>
      <Link href="./Gallery" push asChild>
        <FontAwesome.Button name="arrow-right" />
      </Link>
      <ActionIcon name="facebook" />
    </SafeAreaView>
  );
}
