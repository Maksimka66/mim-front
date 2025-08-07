import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "./global.css";
import SettingsMenu from "./screens/SettingsMenu";

export default function RootLayout() {
    return (
        <React.Fragment>
            <StatusBar barStyle="default" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            ></Stack>
        </React.Fragment>
    );
}
