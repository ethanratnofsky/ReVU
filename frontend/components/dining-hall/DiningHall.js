import { Text, SafeAreaView } from 'react-native';

import diningHallStyles from './DiningHallStyles';

import OverallRating from './OverallRating';
import Subratings from './Subratings';
import Comments from './Comments';

const DiningHall = ({ route }) => {
    const { id } = route.params; // TODO: use id to fetch dining hall data

    // TODO: use dining hall data to render dining hall info
    return (
        <SafeAreaView style={diningHallStyles.container}>
            <Text style={diningHallStyles.diningHallName}>Rothschild Dining Hall</Text>
            <OverallRating diningHallId={id} />
            <Subratings diningHallId={id} />
            <Comments diningHallId={id} />
        </SafeAreaView>
    );  
}

export default DiningHall;