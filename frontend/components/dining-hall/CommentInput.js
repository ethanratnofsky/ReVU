import { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TextInput, View } from 'react-native';

import commentInputStyles from './CommentInputStyles';
const Filter = require('bad-words');

const CommentInput = ({ diningHallId, onSubmit }) => {
    const [comment, setComment] = useState('');
    const filter = new Filter({'placeHolder': '*'});

    const handleSubmit = () => {
        if (filter.isProfane(comment)) {
            alert("Your comment has inappropriate language. Please resubmit.");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ diningHallId: diningHallId, userId: 1,  content: comment })
            };

            fetch('https://sleepy-reaches-22563.herokuapp.com/api/post/createComment', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(err);
                }

                console.log(`Successfully posted comment: ${comment}`);

                onSubmit();

                // Clear input field and hide keyboard
                setComment('');
                Keyboard.dismiss();
            }).catch(error => {
                console.log(error);
                alert("Comment did not submit properly. Retry later.");
            });
        }

    };

    return (
        <KeyboardAvoidingView behavior='padding'>
            <View style={commentInputStyles.container}>
                <TextInput
                    style={commentInputStyles.commentInput}
                    placeholder={'Write a comment...'}
                    placeholderTextColor={'#999'}
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity style={commentInputStyles.sendContainer} onPress={handleSubmit} disabled={!comment}>
                    <Image style={commentInputStyles.send} source={comment ? require('../../assets/images/gold-send.png') : require('../../assets/images/gray-send.png')} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

export default CommentInput;