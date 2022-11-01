import { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TextInput, View } from 'react-native';

import commentInputStyles from './CommentInputStyles';
const Filter = require('bad-words');

const CommentInput = ({ diningHallId }) => {
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
                    return Promise.reject(error);
                }

                setComment('');
                Keyboard.dismiss();
            }).catch(error => {
                console.log(error);
                alert("Comment did not submit properly. Retry later.");
            });
        }

        // if (issue == null || contact == null || dining == null || urgency == null) {
        //     alert("Please fill out all fields. It seems there are some that were left empty.")
        // } else if (!(/\S+@\S+\.\S+/.test(contact))) {
        //     alert("Email does not have proper format. Please re-enter email address.");
        // } else if (filter.isProfane(issue)) {
        //     alert("You're issue has inappropriate language. Please re-enter your issue input.");
        // } else if (filter.isProfane(contact)) {
        //     alert("Your email has inappropriate language. Please re-enter your email.");
        // }
        // Alert.alert('Comment Posted', comment); // TODO: post comment to backend

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