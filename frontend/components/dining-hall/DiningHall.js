import { useEffect, useState } from 'react';
import { Keyboard, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import diningHallStyles from './DiningHallStyles';

import BackButton from '../back-button/BackButton';
import Comments from './Comments';
import CommentInput from './CommentInput';
import DotsMenu from './DotsMenu';
import OverallRating from './OverallRating';
import RatingInput from './RatingInput';
import Subratings from './Subratings';
import { DINING_HALLS } from '../../constants';

const DiningHall = ({ navigation, route }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isRatingInputVisible, setIsRatingInputVisible] = useState(false);
    const [comments, setComments] = useState([]);

    const { id } = route.params;

    // TODO: fetch name from backend
    const diningHallName = DINING_HALLS[id].name

    const closeKeyboardAndMenu = () => {
        Keyboard.dismiss();
        setIsMenuVisible(false);
    }

    const handleOverallRatingPress = () => {
        closeKeyboardAndMenu();
        setIsRatingInputVisible(true);
    }

    const handleBackButtonPress = () => {
        navigation.goBack();
    }

    const handleDotsMenuPress = () => {
        setIsMenuVisible(prev => !prev)
    }

    const handleRatingInputClose = () => {
        setIsRatingInputVisible(false);
    }

    const fetchComments = () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/diningComments/${id}`, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }
            setComments(data);
            
            console.log("Successfully fetched comments.");
        }).catch(error => {
            console.log(error);
            alert("Comments failed to load. Please try again later.");
        });
    }

    useEffect(fetchComments, []);

    // TODO: use dining hall data to render dining hall info
    return (
        <TouchableWithoutFeedback onPress={closeKeyboardAndMenu} accessible={false}>
            <SafeAreaView style={diningHallStyles.container}>
                <Text style={diningHallStyles.diningHallName}>{diningHallName}</Text>
                <OverallRating diningHallId={id} onPress={handleOverallRatingPress} />
                <Subratings diningHallId={id} />
                <Comments comments={comments} />
                <CommentInput diningHallId={id} onSubmit={fetchComments} />
                <BackButton onPress={handleBackButtonPress} />
                <DotsMenu diningHallId={id} isMenuVisible={isMenuVisible} toggleMenu={handleDotsMenuPress} />
                {isRatingInputVisible && <RatingInput diningHallId={id} onClose={handleRatingInputClose} />}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );  
}

export default DiningHall;