import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const buttonStyles = StyleSheet.create({
    outterContainer: {
        width: 200,
        height: 50,
    },
    gradient: {
        padding: 3,
        borderRadius: 10,
    },
    innerContainer: {
        ...THEME_STYLES.whiteBackground,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    icon: {
        marginHorizontal: 10,
    },
    text: {
        ...THEME_STYLES.goldText,
        fontWeight: 'bold',
    },
});

export default buttonStyles;