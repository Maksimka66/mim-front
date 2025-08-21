import { darkIcons, lightIcons } from "@/assets/images/";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { Image, StyleSheet } from "react-native";

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
        name="Home/Home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.tabsImage}
              source={
                colorScheme === "light" ? lightIcons.home : darkIcons.home
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Gallery/Gallery"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.tabsImage}
              source={
                colorScheme === "light" ? lightIcons.palette : darkIcons.palette
              }
            />
          ),
        }}
      />

      <Tabs.Screen name="(auth)" options={{ href: null }} />
      <Tabs.Screen
        name="Settings/SettingsMenu"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.tabsImage}
              source={
                colorScheme === "light" ? lightIcons.heart : darkIcons.heart
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabsImage: {
    width: 30,
    height: 30,
  },
});
