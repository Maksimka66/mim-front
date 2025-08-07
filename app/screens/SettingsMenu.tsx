import { StyleSheet, View } from "react-native";

import WrapperButton from "../components/WrapperButton";

const SettingsMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <WrapperButton className="settingsButton" />
                <WrapperButton className="settingsButton" />
            </View>
            <View>
                <WrapperButton className="settingsButton" />
                <WrapperButton className="settingsButton" />
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
