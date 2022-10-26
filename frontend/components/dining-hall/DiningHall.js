import { Keyboard, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import diningHallStyles from './DiningHallStyles';

import OverallRating from './OverallRating';
import Subratings from './Subratings';
import Comments from './Comments';
import CommentInput from './CommentInput';

const DiningHall = ({ route }) => {
    const { id } = route.params; // TODO: use id to fetch dining hall data

    // TODO: use dining hall data to render dining hall info
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={diningHallStyles.container}>
                <Text style={diningHallStyles.diningHallName}>Rothschild Dining Hall</Text>
                <OverallRating diningHallId={id} />
                <Subratings diningHallId={id} />
                <Comments diningHallId={id} />
                <CommentInput />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );  
}

export default DiningHall;