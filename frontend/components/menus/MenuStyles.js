import { StyleSheet } from "react-native";
import { THEME_STYLES, VU_GOLD } from '../../constants';

const menuPageStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    titleText: {
        marginTop: 15,
        marginBottom: 15,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 20,
    },
    foodTimeHeader: {
        marginTop: 20,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 18,
        borderColor: VU_GOLD,
        borderWidth: 3,
        width: 300,
        textAlign: 'center',
        padding: 5
    },
    itemDisplay: {
        width: 300,
        height: 40,
        ...THEME_STYLES.whiteBackground,
        borderColor: VU_GOLD,
        borderWidth: 3,
        alignItems: 'center',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center'
    },
    itemText: {
        ...THEME_STYLES.blackText,
        ...THEME_STYLES.libreCaslonFont
    }
});

export default menuPageStyles;