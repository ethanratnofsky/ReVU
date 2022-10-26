import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const overallRatingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 15,
        width: 300,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#222',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
    starsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    star: {
        width: 48,
        aspectRatio: 1,
    },
    ratingContainer: {
        marginVertical: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 24,
    },
    starsText: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 11,
    },
});

export default overallRatingStyles;