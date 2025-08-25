import { darkIcons, lightIcons, User } from "@/assets/images";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Gallery() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className="p-3">
      <View>
        <Image
          style={styles.image}
          source={
            colorScheme === "light"
              ? lightIcons.returnBack
              : darkIcons.returnBack
          }
        />
      </View>
      <View className="items-center justify-center">
        <Image style={styles.image} source={User.user} />
      </View>
      <View className="flex-1">
        <View style={styles.artboard} />
        {/* bottom icons */}
        <View style={styles.bottomBar}>
          <Image
            style={styles.image}
            source={
              colorScheme === "light"
                ? lightIcons.galleryBottom1
                : darkIcons.galleryBottom1
            }
          />
          <Image
            style={styles.image}
            source={
              colorScheme === "light"
                ? lightIcons.galleryBottom2
                : darkIcons.galleryBottom2
            }
          />
          <Image
            style={styles.image}
            source={
              colorScheme === "light"
                ? lightIcons.galleryBottom3
                : darkIcons.galleryBottom3
            }
          />
          <Image
            style={styles.image}
            source={
              colorScheme === "light"
                ? lightIcons.galleryBottom4
                : darkIcons.galleryBottom4
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Gallery;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  artboard: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#D7CFBC",
  },
  bottomBar: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginStart: 15,
  },
});
