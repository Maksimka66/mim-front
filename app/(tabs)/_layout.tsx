import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0D919BD6",
        tabBarInactiveTintColor: "#fff",
        tabBarAllowFontScaling: true,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View className="flex-1 rounded-2xl overflow-hidden">
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
              style={{ flex: 1 }}
            />
          </View>
        ),
        tabBarStyle: {
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          width: "95%",
          marginBottom: 24,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="palette" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="preferences"
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
