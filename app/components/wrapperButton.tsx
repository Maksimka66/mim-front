import { Pressable, StyleSheet, Text } from "react-native";

interface IWrapperButtonProps {
    imageURL: string;
    className: string;
    callback: () => any;
}

const WrapperButton = ({
    imageURL,
    callback,
    className,
}: IWrapperButtonProps) => {
    return (
        <Pressable
            onPress={callback}
            className={className}
            style={styles.settingsButton}
        >
            <Text>{imageURL}</Text>
        </Pressable>
    );
};

export default WrapperButton;

const styles = StyleSheet.create({
    settingsButton: {
        padding: 30,
    },
});
