import { Image, Text, View } from 'react-native';

import overallRatingStyles from './OverallRatingStyles';

const OverallRating = ({ diningHallId }) => {
    const rating = 4.2 // TODO: use diningHallId to fetch rating from backend

    return (
        <View style={overallRatingStyles.container}>
            <View style={overallRatingStyles.starsContainer}>
                {/* TODO: Render stars dynamically; ex: render 4 stars and 0.2 of a star */}
                <Image style={overallRatingStyles.star} source={require('../../assets/images/gold-star.png')} />
                <Image style={overallRatingStyles.star} source={require('../../assets/images/gold-star.png')} />
                <Image style={overallRatingStyles.star} source={require('../../assets/images/gold-star.png')} />
                <Image style={overallRatingStyles.star} source={require('../../assets/images/gold-star.png')} />
                <Image style={overallRatingStyles.star} source={require('../../assets/images/gold-star.png')} />
            </View>
            <View style={overallRatingStyles.ratingContainer}>
                <Text style={overallRatingStyles.rating}>{rating.toFixed(1)}</Text>
                <Text style={overallRatingStyles.starsText}>stars</Text>
            </View>
        </View>
    )
};

export default OverallRating;