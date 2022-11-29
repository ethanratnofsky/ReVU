import { FlatList, Text, View } from 'react-native';

import commentsStyles from './CommentsStyles';

import { ANONYMOUS_NAMES } from '../../constants';

const Comment = ({ content, timestamp}) => {
    const author = ANONYMOUS_NAMES[Math.floor(Math.random() * ANONYMOUS_NAMES.length)];
    const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <View style={commentsStyles.commentContainer} onStartShouldSetResponder={() => true}>
            <View style={commentsStyles.commentHeader}>
                <Text style={commentsStyles.commentAuthor}>{author}</Text>
                <Text style={commentsStyles.commentTime}>{time}</Text>
            </View>
            <Text style={commentsStyles.commentContent}>{content}</Text>
        </View>
    )
};

const Comments = ({ comments }) => {
    const renderComment = ({ item }) => {
        return <Comment {...item} />
    };

    comments = [
        {
            id: 1,
            userId: 1,
            diningHallId: 5,
            content: 'food was mid and dining hall is far away',
            timestamp: Date.now(),
        },
        {
            id: 2,
            userId: 2,
            diningHallId: 3,
            content: 'E',
            timestamp: Date.now(),
        },
        {
            id: 3,
            userId: 3,
            diningHallId: 2,
            content: 'This is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long comment about Rothschild',
            timestamp: Date.now(),
        }
    ]

    return (
        <View style={commentsStyles.container}>
            <Text style={commentsStyles.commentsHeader}>Comments • {comments.length}</Text>
            <View style={commentsStyles.divider} />
            <FlatList
                style={commentsStyles.commentsContainer}
                data={comments}
                renderItem={renderComment}
                keyExtractor={comment => comment._id}
            />
        </View>
    )
};

export default Comments;
