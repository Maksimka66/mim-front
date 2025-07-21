import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Image source={require("@/assets/images/logo_mim_light.png")} />
      </View>
      <View>
        <FontAwesome.Button name="facebook" />
        <FontAwesome.Button name="google" />
        <FontAwesome.Button name="apple" />
      </View>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
