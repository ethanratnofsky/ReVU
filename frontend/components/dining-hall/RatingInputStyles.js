import { StyleSheet, Dimensions } from 'react-native';

import { THEME_STYLES } from '../../constants';

const ratingInputStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        ...THEME_STYLES.blackBackground,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        position: 'absolute',
        top: 150,
        alignItems: 'center',
    },
    infoTextSmall: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
    },
    infoTextBig: {
        marginTop: 10,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 22,
    },
    ratingContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    ratingType: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 18,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
    },
    starContainer: {
        width: 55,
        height: 55,
        position: 'relative',
        marginHorizontal: 2,
    },
    star: {
        height: '100%',
        width: '100%',
    },
    starOutline: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    ratingDescriptionContainer: {
        marginTop: 5,
        flexDirection: 'row',
        width: 310,
        justifyContent: 'space-between',
    },
    ratingDescription: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 12,
        textAlign: 'center',
        width: 75,
    },
    gradient: {
        padding: 3,
        borderRadius: 10,
    },
    submitButtonContainer: {
        position: 'absolute',
        bottom: 75,
    },
    submitButton: {
        ...THEME_STYLES.whiteBackground,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 8,
    },
    submitButtonText: {
        ...THEME_STYLES.goldText,
        fontWeight: 'bold',
        fontSize: 14,
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 65,
        right: 25,
    },
    closeButton: {
        width: 35,
        height: 35,
    },
});

export default ratingInputStyles;