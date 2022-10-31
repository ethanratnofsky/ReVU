import { FlatList, Text, View } from 'react-native';

import commentsStyles from './CommentsStyles';

const Comment = ({ comment }) => {
    return (
        <View style={commentsStyles.commentContainer} onStartShouldSetResponder={() => true}>
            <View style={commentsStyles.commentHeader}>
                <Text style={commentsStyles.commentAuthor}>{comment.author}</Text>
                <Text style={commentsStyles.commentTime}>{comment.time}</Text>
            </View>
            <Text style={commentsStyles.commentContent}>{comment.content}</Text>
        </View>
    )
};

const Comments = ({ diningHallId }) => {
    // TODO: use diningHallId to fetch comments from backend
    const comments = [
        {
            id: 1,
            userID: 1,
            diningID: 5,
            content: 'This is a comment',
            timestamp: 1132,
        },
        {
            id: 2,
            userID: 2,
            diningID: 3,
            content: 'This is another comment',
            timestamp: 1132,
        },
        {
            id: 3,
            userID: 3,
            diningID: 2,
            content: 'This is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long comment',
            timestamp: 1139,
        },
        {
            id: 4,
            userID: 4,
            diningID: 1,
            content: 'This is another comment',
            timestamp: 1149,
        },
        {
            id: 5,
            userID: 5,
            diningID: 3,
            content: 'This is another comment',
            timestamp: 1132,
        },
        {
            id: 6,
            userID: 6,
            diningID: 0,
            content: 'This is another comment',
            timestamp: 1133,
        },
        {
            id: 7,
            userID: 7,
            diningID: 4,
            content: 'This is another comment',
            timestamp: 1134,
        },
    ];

    const renderItem = ({ item }) => (
        <Comment comment={item} />
    );

    return (
        <View style={commentsStyles.container}>
            <Text style={commentsStyles.commentsHeader}>Comments • {comments.length}</Text>
            <View style={commentsStyles.divider} />
            <FlatList
                style={commentsStyles.commentsContainer}
                data={comments}
                renderItem={renderItem}
                keyExtractor={comment => comment.id}
            />
        </View>
    )
};

export default Comments;