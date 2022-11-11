import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const homeStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 40,
        marginBottom: '10%',
    },
    logo: {
        width: 134,
        height: 39,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        ...THEME_STYLES.whiteText,
        fontWeight: 'bold',
        fontSize: 16,
    },
    userIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    date: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        marginVertical: '5%',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '90%',
        marginBottom: 20,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsIcon: {
        width: 20,
        height: 20,
        marginRight: 2,
    },
    termsText: {
        ...THEME_STYLES.whiteText,
        textDecorationLine: 'underline',
        fontSize: 12,
    },
    complaintsButton: {
        width: 150,
        height: 40,
    },
});
 
export default homeStyles;
