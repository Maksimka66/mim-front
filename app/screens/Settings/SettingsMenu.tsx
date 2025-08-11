import { StyleSheet, View } from "react-native";

import WrapperButton from "@components/WrapperButton";

const SettingsMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <WrapperButton
          className="settingsButton"
          imageURL="https://example.com/image1.png"  //
          callback={() => { /* handle button 1 click */ }}
        />
        <WrapperButton
          className="settingsButton"
          imageURL="https://example.com/image2.png"
          callback={() => { /* handle button 2 click */ }}
        />
      </View>
      <View>
        <WrapperButton
          className="settingsButton"
          imageURL="https://example.com/image3.png"
          callback={() => { /* handle button 3 click */ }}
        />
        <WrapperButton
          className="settingsButton"
          imageURL="https://example.com/image4.png"
          callback={() => { /* handle button 4 click */ }}
        />
      </View>
      <View>
        <WrapperButton className="settingsButton" />
        <WrapperButton className="settingsButton" />
      </View>
    </View>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({
  container: {
    rowGap: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    columnGap: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
