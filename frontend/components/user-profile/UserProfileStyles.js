import { StyleSheet } from "react-native";

import { THEME_STYLES, VU_GOLD } from "../../constants";

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
        width: 120,
        height: 120,
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
        marginTop: 5,
        alignItems: "center",
    },
    sectionHeader: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 16,
        marginTop: 20,
    },
    divider: {
        height: 1,
        alignSelf: "stretch",
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: "#D9D9D9",
    },
    diningHallName: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 14,
        marginTop: 18,
        marginBottom: 2,
        marginLeft: 5,
    },
    itemsContainer: {
        marginHorizontal: 15,
        alignSelf: "stretch",
    },
    itemTitle: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
    },
    itemSubtitle: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 12,
    },
    itemLevel: {
        ...THEME_STYLES.goldText,
        fontSize: 12,
        borderWidth: 1.5,
        borderColor: VU_GOLD,
        paddingHorizontal: 3,
        paddingVertical: 1,
        borderRadius: 5,
    },
    itemContent: {
        ...THEME_STYLES.whiteText,
        marginVertical: 5,
    },
});

export default userProfileStyles;
