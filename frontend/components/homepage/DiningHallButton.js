import { Image, Pressable, Text, View } from 'react-native';

import diningHallButtonStyles from './DiningHallButtonStyles';
import { useNavigation } from '@react-navigation/native';

const DiningHallButton = ({ id, name, overallRating }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        // TODO: Navigate to dining hall page
        navigation.navigate({name});
    }

    return (
        <Pressable style={diningHallButtonStyles.container} onPress={handlePress}>
            <Text style={diningHallButtonStyles.name}>{name}</Text>
            <View style={diningHallButtonStyles.ratingContainer}>
                <Text style={diningHallButtonStyles.rating}>{overallRating === null ? 'Unrated' : overallRating}</Text>
                {overallRating !== null && <Image style={diningHallButtonStyles.star} source={require('../../assets/images/gold-star.png')} />}
            </View>
        </Pressable>
    );
}

export default DiningHallButton;
