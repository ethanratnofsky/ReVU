import { StyleSheet } from "react-native";

import { THEME_STYLES } from "../../constants";

const diningHallStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        ...THEME_STYLES.blackBackground,
    },
    header: {
        position: "absolute",
        top: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    diningHallName: {
        marginTop: 15,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 20,
    },
    menuButton: {
        marginVertical: 10,
        marginHorizontal: 20,
        width: "90%",
        height: 40,
    },
});

export default diningHallStyles;
