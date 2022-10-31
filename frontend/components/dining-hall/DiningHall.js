import { useState } from 'react';
import { Keyboard, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import diningHallStyles from './DiningHallStyles';

import BackButton from '../back-button/BackButton';
import Comments from './Comments';
import CommentInput from './CommentInput';
import DotsMenu from './DotsMenu';
import OverallRating from './OverallRating';
import RatingInput from './RatingInput';
import Subratings from './Subratings';
import { DINING_MAP } from '../../constants';

const DiningHall = ({ navigation, route }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isRatingInputVisible, setIsRatingInputVisible] = useState(false);
    const { id } = route.params; // TODO: use id to fetch dining hall data
    const diningHall = DINING_MAP[id]

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

    // TODO: use dining hall data to render dining hall info
    return (
        <TouchableWithoutFeedback onPress={closeKeyboardAndMenu} accessible={false}>
            <SafeAreaView style={diningHallStyles.container}>
                <Text style={diningHallStyles.diningHallName}>{diningHall}</Text>
                <OverallRating diningHallId={id} onPress={handleOverallRatingPress} />
                <Subratings diningHallId={id} />
                <Comments diningHallId={id} />
                <CommentInput diningHallId={id} />
                <BackButton onPress={handleBackButtonPress} />
                <DotsMenu diningHallId={id} isMenuVisible={isMenuVisible} toggleMenu={handleDotsMenuPress} />
                {isRatingInputVisible && <RatingInput diningHallId={id} onClose={handleRatingInputClose} />}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );  
}

export default DiningHall;