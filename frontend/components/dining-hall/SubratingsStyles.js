import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const subratingsStyles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 30,
        flexDirection: 'row',
    },
    subratingContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 5,
    },
    subratingSmallContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 2,
        flexDirection: 'row',
    },
    ratingType: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        textAlign: 'center',
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
    smallRating: {
        marginLeft: 10,
        marginRight: 3,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 20,
    },
    star: {
        width: 48,
        aspectRatio: 1,
    },
    smallStar: {
        width: 24,
        aspectRatio: 1,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#D9D9D9'
    }
});

export default subratingsStyles;