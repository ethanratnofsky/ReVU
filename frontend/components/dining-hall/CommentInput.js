import { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Pressable, TextInput, View } from 'react-native';

import commentInputStyles from './CommentInputStyles';

const CommentInput = ({ diningHallId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        Alert.alert('Comment Posted', comment); // TODO: post comment to backend

        // TODO: only execute if comment was successfully posted
        setComment('');
        Keyboard.dismiss();
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
                <Pressable onPress={handleSubmit} disabled={!comment}>
                    <Image style={commentInputStyles.send} source={comment ? require('../../assets/images/gold-send.png') : require('../../assets/images/gray-send.png')} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
};

export default CommentInput;