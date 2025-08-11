import { useColorScheme } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Gallery() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <SafeAreaView>
      <Text> {colorScheme}</Text>
    </SafeAreaView>
  );
}

export default Gallery;
