import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Preferences() {
  return (
    <View>
      <Link href="/(tabs)/gallery" push asChild>
        <FontAwesome.Button name="arrow-right" />
      </Link>
    </View>
  );
}
