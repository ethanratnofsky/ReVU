import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const commentsStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        marginVertical: 15,
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
    send: {
        width: 25,
        height: 25,
        marginRight: 10,
    }
});

export default commentsStyles;