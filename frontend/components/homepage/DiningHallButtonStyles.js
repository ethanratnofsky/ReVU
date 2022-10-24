import { StyleSheet } from 'react-native';

import { THEME_STYLES, VU_GOLD } from '../../constants';

const diningHallButtonStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.whiteBackground,
        width: 300,
        height: 55,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        margin: 10,
    },
    name: {
        ...THEME_STYLES.blackText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        ...THEME_STYLES.blackText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 16,
    },
    star: {
        width: 24,
        aspectRatio: 1,
        position: 'relative',
        bottom: 1,
        left: 1,
    }
});

export default diningHallButtonStyles;
