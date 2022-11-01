import { useState } from 'react';
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
    // const comments = COMMENTS.filter(comment => comment.diningHallId === diningHallId);
    
    const [comments, setComments] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/diningComments/${diningHallId}`, requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        if (!response.ok) {
            const err = (data && data.message) || response.status;
            return Promise.reject(err);
        }
        setComments(data);

    }).catch(error => {
        console.log(error);
        alert("Comments failed to load. Please try again later.");
    });

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
                keyExtractor={comment => comment._id}
            />
        </View>
    )
};

export default Comments;
