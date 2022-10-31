import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const commentsStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    commentsHeader: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonBoldFont,
        fontSize: 16,
    },
    divider: {
        height: 1,
        alignSelf: 'stretch',
        marginHorizontal: 30,
        marginVertical: 10,
        backgroundColor: '#D9D9D9',
    },
    commentsContainer: {
        flex: 1,
        marginHorizontal: 15,
        alignSelf: 'stretch',
    },
    commentContainer: {
        backgroundColor: '#222',
        borderRadius: 3,
        margin: 2,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    commentAuthor: {
        ...THEME_STYLES.whiteText,
        fontWeight: 'bold',
    },
    commentTime: {
        color: '#444',
        fontSize: 11,
    },
    commentContent: {
        ...THEME_STYLES.whiteText,
    },
});

export default commentsStyles;
