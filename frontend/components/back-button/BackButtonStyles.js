import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const backButtonStyles = StyleSheet.create({
    container: {
        padding: 10,
        position: 'absolute',
        left: 15,
        top: 50,
    },
    arrow: {
        ...THEME_STYLES.whiteText,
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default backButtonStyles;