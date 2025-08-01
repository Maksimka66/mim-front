import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TouchableOpacity } from "react-native";

type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

type Props = {
  color?: string;
  size?: number;
  name: FontAwesomeName;
};
export default function ActionIcon({
  color = "#4A1750",
  size = 100,
  name,
}: Props) {
  return (
    // <TouchableOpacity
    //   className="flex items-center justify-center rounded-[16px]"
    //   style={{
    //     width: size,
    //     height: size,
    //     backgroundColor: color,
    //   }}
    // >
    //   <FontAwesome.Button
    //     name={name}
    //     color="#FFFFFF"
    //     style={{
    //       width: size,
    //       height: size,
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       borderRadius: 50,
    //       backgroundColor: "rgba(255,255,255,0.3)",
    //       shadowColor: "#fff",
    //       shadowOffset: { width: 0, height: 0 },
    //       shadowOpacity: 0.7,
    //       shadowRadius: 20,
    //       elevation: 6,
    //     }}
    //   />
    // </TouchableOpacity>
    <TouchableOpacity
      className=" rounded-[16px] items-center justify-center"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    >
      <TouchableOpacity
        onPress={() => {}}
        className="flex items-center justify-center rounded-full"
        style={{
          width: size / 1.5,
          height: size / 1.5,
          backgroundColor: "#B856B1",
          shadowColor: "#E9A3E7",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 20,
          elevation: 15,
        }}
      >
        <FontAwesome name={name} size={size * 0.5} color="#FFFFFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
