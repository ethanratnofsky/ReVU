import { StyleSheet } from "react-native";

import { THEME_STYLES } from "../../constants";

const termsAndConditionsStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: "100%",
        alignItems: "center",
    },
    header: {
        position: "absolute",
        top: 55,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    logo: {
        width: 172,
        height: 50,
        marginTop: 10,
        marginBottom: 20,
    },
    heading: {
        ...THEME_STYLES.libreCaslonFont,
        ...THEME_STYLES.whiteText,
        fontSize: 18,
        marginBottom: 10,
    },
    subheading: {
        ...THEME_STYLES.whiteText,
        opacity: 0.5,
        fontSize: 14,
        marginBottom: 20,
    },
    scrollContainer: {
        width: "85%",
        flex: 1,
    },
    text: {
        ...THEME_STYLES.whiteText,
    },
    acceptInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    checkbox: {
        width: 18,
        height: 18,
        margin: 8,
    },
    agreeText: {
        ...THEME_STYLES.whiteText,
        fontSize: 12,
    },
    button: {
        width: 165,
        height: 45,
    },
});

export default termsAndConditionsStyles;
