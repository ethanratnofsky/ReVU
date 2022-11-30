import { StyleSheet } from "react-native";
import { THEME_STYLES, VU_GOLD } from "../../constants";

const loginStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        ...THEME_STYLES.whiteBackground,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 4,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 7,
    },
    button: {
        ...THEME_STYLES.goldBackground,
        width: "100%",
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonOutline: {
        ...THEME_STYLES.whiteBackground,
        marginTop: 5,
        borderColor: VU_GOLD,
        borderWidth: 2,
    },
    buttonText: {
        ...THEME_STYLES.whiteText,
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        ...THEME_STYLES.blackText,
        fontWeight: "700",
        fontSize: 16,
    },
    logo: {
        width: 250,
        height: 119,
        marginBottom: 50,
    },
});

export default loginStyles;
