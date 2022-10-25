import { Image, Text, View } from 'react-native';

import subratingsStyles from './SubratingsStyles';

const Subratings = ({ diningHallId }) => {
    const foodRating = 4.7; // TODO: use diningHallId to fetch food rating from backend
    const trafficRating = 2.3; // TODO: use diningHallId to fetch traffic rating from backend

    return (
        <View style={subratingsStyles.container}>
            <View style={subratingsStyles.subratingContainer}>
                <Text style={subratingsStyles.ratingType}>Food</Text>
                <View style={subratingsStyles.ratingContainer}>
                    <Text style={subratingsStyles.rating}>{foodRating}</Text>
                    <Image style={subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
            <View style={subratingsStyles.divider} />
            <View style={subratingsStyles.subratingContainer}>
                <Text style={subratingsStyles.ratingType}>Traffic</Text>
                <View style={subratingsStyles.ratingContainer}>
                    <Text style={subratingsStyles.rating}>{trafficRating}</Text>
                    <Image style={subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
        </View>
    )
};

export default Subratings;