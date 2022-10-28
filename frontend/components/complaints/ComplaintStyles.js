import { StyleSheet } from "react-native";
import { THEME_STYLES, VU_BLACK, VU_GOLD, VU_METALLIC_GOLD_START, VU_WHITE } from '../../constants';


const complaintStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
        alignItems: 'center'
    },
    infoContainer: {
        ...THEME_STYLES.whiteBackground,
        width: 220,
        height: 55,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 12,
    },
    emailInput: {
        ...THEME_STYLES.whiteBackground,
        height: 40,
        width: 300,
        margin: 15,
        borderWidth: 2,
        borderColor: VU_GOLD,
        padding: 10
    },
    issueInput: {
        ...THEME_STYLES.whiteBackground,
        height: 230,
        width: 300,
        borderWidth: 2,
        margin: 15,
        padding: 10,
        paddingBottom: 5
    },
    submitButtonContainer: {
        ...THEME_STYLES.goldBackground,
        width: 300,
        height: 60,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        padding: 10
    },
    buttonStyle: {
        backgroundColor: VU_GOLD,
        width: 50,
        height: 55,
        padding: 15,
        margin: 12,
        borderRadius: 10, 
        borderColor: VU_WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 25,
        marginBottom: 10,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 20,
    },
    diningHallOption: {
        ...THEME_STYLES.blackText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 15
    },
    inputButton: {
        backgroundColor: VU_WHITE, 
        width: 300, 
        borderStyle: "solid", 
        borderColor: VU_GOLD, 
        height: 45, 
        borderWidth: 2, 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 15,
        borderRadius: 5
    }
});

export default complaintStyles;