import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const subratingsStyles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    subratingContainer: {
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 30,
    },
    ratingType: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 14,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    rating: {
        marginTop: 5,
        marginHorizontal: 5,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 36,
    },
    star: {
        width: 48,
        aspectRatio: 1,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#D9D9D9'
    }
});

export default subratingsStyles;