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
            author: 'User 1',
            content: 'This is a comment',
            time: '11:32 AM',
        },
        {
            id: 2,
            author: 'User 2',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 3,
            author: 'User 3',
            content: 'This is a really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long comment',
            time: '11:32 AM',
        },
        {
            id: 4,
            author: 'User 4',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 5,
            author: 'User 5',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 6,
            author: 'User 6',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 7,
            author: 'User 7',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 8,
            author: 'User 8',
            content: 'This is another comment',
            time: '11:32 AM',
        },
        {
            id: 9,
            author: 'User 9',
            content: 'This is another comment',
            time: '11:32 AM',
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