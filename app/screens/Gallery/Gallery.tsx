import { darkIcons, lightIcons } from "@/assets/images";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Gallery() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView>
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
      <View style={styles.topBar}>
        <Image
          style={styles.image}
          source={
            colorScheme === "light"
              ? lightIcons.artboardTop1
              : darkIcons.artboardTop1
          }
        />
        <Image
          style={styles.image}
          source={
            colorScheme === "light"
              ? lightIcons.artboardTop2
              : darkIcons.artboardTop2
          }
        />
        <Image
          style={styles.image}
          source={
            colorScheme === "light"
              ? lightIcons.artboardTop3
              : darkIcons.artboardTop3
          }
        />
        <Image
          style={styles.image}
          source={
            colorScheme === "light"
              ? lightIcons.artboardTop4
              : darkIcons.artboardTop4
          }
        />
      </View>

      {/* Drawing board */}
      <View className="flex-row justify-between gap-3 p-3 w-full h-[85%]">
        <View style={styles.leftBar}>
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft1
                : darkIcons.artboardLeft1
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft2
                : darkIcons.artboardLeft2
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft3
                : darkIcons.artboardLeft3
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft4
                : darkIcons.artboardLeft4
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft5
                : darkIcons.artboardLeft5
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft6
                : darkIcons.artboardLeft6
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft7
                : darkIcons.artboardLeft7
            }
          />
          <Image
            style={styles.iconsLeft}
            source={
              colorScheme === "light"
                ? lightIcons.artboardLeft8
                : darkIcons.artboardLeft8
            }
          />
        </View>
        <View className="flex-1">
          <View style={styles.artboard} />
          {/* bottom icons */}
          <View style={styles.bottomBar}>
            <Image
              style={styles.image}
              source={
                colorScheme === "light"
                  ? lightIcons.artboardBottom1
                  : darkIcons.artboardBottom1
              }
            />
            <Image
              style={styles.image}
              source={
                colorScheme === "light"
                  ? lightIcons.artboardBottom2
                  : darkIcons.artboardBottom2
              }
            />
            <Image
              style={styles.image}
              source={
                colorScheme === "light"
                  ? lightIcons.artboardBottom3
                  : darkIcons.artboardBottom3
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Gallery;

const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    gap: 4,
  },
  leftBar: {
    backgroundColor: "#964c91",
    height: "60%",
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-evenly",
  },
  bottomBar: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  iconsLeft: {
    width: 20,
    height: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  artboard: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#D7CFBC",
    marginBottom: 10,
  },
});
