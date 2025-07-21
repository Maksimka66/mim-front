import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "./global.css";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar barStyle="default" />
      <Stack />
    </React.Fragment>
  );
}
