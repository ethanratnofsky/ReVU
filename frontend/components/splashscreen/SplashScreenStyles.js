import { StyleSheet } from "react-native";

import { THEME_STYLES } from "../../constants";

const splashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        ...THEME_STYLES.blackBackground,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 172,
        height: 50,
    },
    credits: {
        position: "absolute",
        bottom: 35,
        alignItems: "center",
    },
    creditLine1: {
        ...THEME_STYLES.whiteText,
        fontWeight: "bold",
        fontSize: 12,
    },
    creditLine2: {
        ...THEME_STYLES.goldText,
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default splashScreenStyles;