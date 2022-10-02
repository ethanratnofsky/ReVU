import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const homeStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 119,
    },
    date: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        marginTop: 15,
        marginBottom: 35,
        fontSize: 16,
    }
});
 
export default homeStyles;
