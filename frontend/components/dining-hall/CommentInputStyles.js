import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const commentsStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 15,
        alignSelf: 'stretch',
        backgroundColor: '#333',
        borderRadius: 5,
        ...THEME_STYLES.whiteText,
    },
    commentInput: {
        paddingVertical: 12,
        marginHorizontal: 10,
        flex: 1,
        ...THEME_STYLES.whiteText,
        alignSelf: 'flex-end',
    },
    sendContainer: {
        marginRight: 5,
        padding: 5,
    },
    send: {
        width: 25,
        height: 25,
    }
});

export default commentsStyles;