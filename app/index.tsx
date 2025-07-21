import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Image, View } from "react-native";

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
      <View>
        <Link href="/(tabs)/gallery" push asChild>
          <FontAwesome.Button name="arrow-right" backgroundColor="fff" />
        </Link>
      </View>
    </View>
  );
}
