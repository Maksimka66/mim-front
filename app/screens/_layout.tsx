import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { Image } from "react-native";

export default function Layout() {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarBackground: () =>
          colorScheme === "light" && (
            <LinearGradient
              colors={[
                "#FEA339DB",
                "#DE6646",
                "#A3519E",
                "#DE6646",
                "#FEA339DB",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, borderRadius: 20 }}
            />
          ),
        tabBarStyle: {
          paddingBottom: 0,
          borderRadius: 20,
          marginBottom: 24,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={
                colorScheme === "light"
                  ? require("@/assets/images/light/navigation-icons/house-icon.png")
                  : require("@/assets/images/dark/navigation-icons-dark/house-icon-dark.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={
                colorScheme === "light"
                  ? require("@/assets/images/light/navigation-icons/palette-icon.png")
                  : require("@/assets/images/dark/navigation-icons-dark/palette-icon-dark.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="preferences"
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <Image
              source={
                colorScheme === "light"
                  ? require("@/assets/images/light/navigation-icons/heart-icon.png")
                  : require("@/assets/images/dark/navigation-icons-dark/heart-icon-dark.png")
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
