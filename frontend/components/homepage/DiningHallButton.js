import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import diningHallButtonStyles from './DiningHallButtonStyles';

import { RATINGS } from '../../demo.js';

const DiningHallButton = ({ id, name }) => {
    const navigation = useNavigation();

    // TODO: Get ratings from backend
    const ratings = RATINGS.filter(rating => rating.diningHallId === id);

    let overallRating = null;
    if (ratings.length !== 0) {
        overallRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;
    }

    const handlePress = () => {
        navigation.navigate('Dining Hall', { id, name });
    }

    return (
        <TouchableOpacity activeOpacity={0.6} style={diningHallButtonStyles.container} onPress={handlePress}>
            <Text style={diningHallButtonStyles.name}>{name}</Text>
            <View style={diningHallButtonStyles.ratingContainer}>
                <Text style={diningHallButtonStyles.rating}>{overallRating === null ? 'Unrated' : overallRating.toFixed(1)}</Text>
                {overallRating !== null && <Image style={diningHallButtonStyles.star} source={require('../../assets/images/gold-star.png')} />}
            </View>
        </TouchableOpacity>
    );
}

export default DiningHallButton;
