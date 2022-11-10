import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const diningHallStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        ...THEME_STYLES.blackBackground,
    },
    diningHallName: {
        marginTop: 15,
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 20,
    },
    menuButton: {
        marginVertical: 10,
        marginHorizontal: 20,
        width: 350,
        height: 40,
    }
});

export default diningHallStyles;