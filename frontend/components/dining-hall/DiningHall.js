import { useState } from 'react';
import { Keyboard, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import diningHallStyles from './DiningHallStyles';

import BackButton from '../back-button/BackButton';
import DotsMenu from './DotsMenu';
import OverallRating from './OverallRating';
import Subratings from './Subratings';
import Comments from './Comments';
import CommentInput from './CommentInput';

const DiningHall = ({ navigation, route }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const { id } = route.params; // TODO: use id to fetch dining hall data

    const handlePress = () => {
        Keyboard.dismiss();
        setIsMenuVisible(false);
    }

    // TODO: use dining hall data to render dining hall info
    return (
        <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
            <SafeAreaView style={diningHallStyles.container}>
                <Text style={diningHallStyles.diningHallName}>Rothschild Dining Hall</Text>
                <OverallRating diningHallId={id} />
                <Subratings diningHallId={id} />
                <Comments diningHallId={id} />
                <CommentInput diningHallId={id} />
                <BackButton onPress={() => navigation.goBack()} />
                <DotsMenu diningHallId={id} isMenuVisible={isMenuVisible} toggleMenu={() => setIsMenuVisible(prev => !prev)} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );  
}

export default DiningHall;