import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

type Props = {
  color?: string;
  size?: number;
  name: FontAwesomeName;
};
export default function ActionIcon({
  color = "#007AFF",
  size = 100,
  name,
}: Props) {
  return (
    <View
      className="flex items-center justify-center rounded-md"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    >
      <FontAwesome.Button
        name={name}
        color="#F39277"
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: "rgba(255,255,255,0.3)",
          shadowColor: "#fff",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.7,
          shadowRadius: 20,
          elevation: 6,
        }}
      />
    </View>
  );
}
