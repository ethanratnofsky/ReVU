import { Image, TouchableOpacity, Text, View } from 'react-native';

import diningHallButtonStyles from './DiningHallButtonStyles';
import { useNavigation } from '@react-navigation/native';

const DiningHallButton = ({ id, name, overallRating }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Dining Hall', { id, name });
    }

    return (
        <TouchableOpacity activeOpacity={0.6} style={diningHallButtonStyles.container} onPress={handlePress}>
            <Text style={diningHallButtonStyles.name}>{name}</Text>
            <View style={diningHallButtonStyles.ratingContainer}>
                <Text style={diningHallButtonStyles.rating}>{overallRating === null ? 'Unrated' : overallRating}</Text>
                {overallRating !== null && <Image style={diningHallButtonStyles.star} source={require('../../assets/images/gold-star.png')} />}
            </View>
        </TouchableOpacity>
    );
}

export default DiningHallButton;
