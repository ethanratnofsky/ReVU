import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const navbarStyles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        width: 250,
        height: 62,
        padding: 3,
        borderRadius: 30,
    },
    container: {
        ...THEME_STYLES.whiteBackground,
        width: '100%',
        height: '100%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36,
    },
});

export default navbarStyles;
