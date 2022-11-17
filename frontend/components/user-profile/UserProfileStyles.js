import { StyleSheet } from "react-native";

import { THEME_STYLES } from "../../constants";

const userProfileStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: "100%",
        alignItems: "center",
    },
    header: {
        position: "absolute",
        top: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    logoutContainer: {
        padding: 10,
    },
    logoutText: {
        color: "#777",
        fontWeight: "bold",
        fontSize: 14,
    },
    userIcon: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    userName: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 24,
    },
    userEmail: {
        ...THEME_STYLES.libreCaslonFont,
        color: "#777",
        fontSize: 14,
        marginVertical: 8,
    },
    scrollView: {
        width: "100%",
    },
    contentContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    sectionHeader: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 16,
    },
    divider: {
        height: 1,
        alignSelf: 'stretch',
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: '#D9D9D9',
    },
});

export default userProfileStyles;