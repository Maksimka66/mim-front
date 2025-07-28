import ActionIcon from "@/components/ActionIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Stack } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-between bg-background dark:bg-background-dark">
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Image
          source={require("@/assets/images/logo_mim_light.png")}
          className="mb-10"
        />
      </View>
      <View className="w-[80%] gap-2">
        <FontAwesome.Button
          name="facebook"
          className="py-2 self-center"
          backgroundColor="#d38e57"
        />
        <FontAwesome.Button
          name="google"
          className="py-2 self-center"
          backgroundColor="#d38e57"
        />
        <FontAwesome.Button
          name="apple"
          className="py-2 self-center"
          backgroundColor="#d38e57"
        />
      </View>
      <ActionIcon />
      <View>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <FontAwesome.Button name="arrow-right" />
        </TouchableOpacity>
        {/* <Link href="/(tabs)/home" push asChild>
          <FontAwesome.Button name="arrow-right" />
        </Link> */}
      </View>
    </View>
  );
}
