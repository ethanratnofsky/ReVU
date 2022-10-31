import { FlatList, Text, View } from 'react-native';

import commentsStyles from './CommentsStyles';

import { COMMENTS, USERS } from '../../demo.js';

const Comment = ({ userId, content, timestamp }) => {
    const author = USERS.find(user => user.id === userId);
    const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <View style={commentsStyles.commentContainer} onStartShouldSetResponder={() => true}>
            <View style={commentsStyles.commentHeader}>
                <Text style={commentsStyles.commentAuthor}>{author.name}</Text>
                <Text style={commentsStyles.commentTime}>{time}</Text>
            </View>
            <Text style={commentsStyles.commentContent}>{content}</Text>
        </View>
    )
};

const Comments = ({ diningHallId }) => {
    // TODO: Get comments from backend
    const comments = COMMENTS.filter(comment => comment.diningHallId === diningHallId);

    const renderComment = ({ item }) => {
        return <Comment {...item} />
    };

    return (
        <View style={commentsStyles.container}>
            <Text style={commentsStyles.commentsHeader}>Comments • {comments.length}</Text>
            <View style={commentsStyles.divider} />
            <FlatList
                style={commentsStyles.commentsContainer}
                data={comments}
                renderItem={renderComment}
                keyExtractor={comment => comment.id}
            />
        </View>
    )
};

export default Comments;