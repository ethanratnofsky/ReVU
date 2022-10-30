import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const dotsMenuStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        right: 15,
    },
    dotsContainer: {
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    dot: {
        ...THEME_STYLES.whiteBackground,
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    menu: {
        position: 'relative',
        top: 6,
        paddingVertical: 3,
        backgroundColor: '#333',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: -3, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    menuItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        width: 18,
        aspectRatio: 1,
    },
    menuText: {
        ...THEME_STYLES.whiteText,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    }
});

export default dotsMenuStyles;