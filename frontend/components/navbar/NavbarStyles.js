import { StyleSheet } from 'react-native';

import { THEME_STYLES, VU_GOLD } from '../../constants';

const navbarStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        ...THEME_STYLES.whiteBackground,
        width: 350,
        height: 62,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
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
