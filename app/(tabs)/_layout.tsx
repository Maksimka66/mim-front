import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Dashboard", headerShown: false }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          headerShown: false,
          tabBarIcon: ({ focused }) => <MaterialIcons name="palette" />,
        }}
      />
    </Tabs>
  );
}
