import React, { memo } from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { Primary } from "../../theme";

type IProps = {
    visible: boolean;
};
const Loading = memo(({visible}: IProps) => {
    return (
        <Modal transparent visible={visible}>
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
            <View style={styles.container}>
                <ActivityIndicator style={{width: 42, height: 42}} color={Primary.primary500}/>
            </View>
        </Modal>
    );
});

Loading.displayName = "Loading";
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});
export default Loading;
