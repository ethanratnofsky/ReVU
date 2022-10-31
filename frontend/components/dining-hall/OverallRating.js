import { Image, Text, TouchableOpacity, View } from 'react-native';

import overallRatingStyles from './OverallRatingStyles';

const OverallRating = ({ diningHallId, onPress }) => {
    let rating = 4.35; // TODO: use diningHallId to fetch rating from backend
    const numRatings = 123; // TODO: use diningHallId to fetch numRatings from backend

    let ratingWhole = 0;
    let ratingDecimal = 0;

    // Process rating
    if (rating < 0 || rating > 5) {
        console.error('Invalid overall rating: ' + rating);
        rating = 'N/A';
    } else {
        ratingWhole = Math.floor(rating);
        ratingDecimal = rating - ratingWhole;
        rating = rating.toFixed(1);
    }

    return (
        <TouchableOpacity style={overallRatingStyles.container} onPress={onPress}>
            <Text style={overallRatingStyles.tapText}>Tap to Rate</Text>
            <View style={overallRatingStyles.rowContainer}>
                <View style={overallRatingStyles.starsContainer}>
                    {
                        [...Array(5)].map((_, index) => (
                            <View style={overallRatingStyles.starContainer} key={index}>
                                {
                                    index < ratingWhole && (
                                        <Image
                                            style={overallRatingStyles.star}
                                            source={require('../../assets/images/gold-star.png')}
                                        />
                                    )
                                }
                                {
                                    index === ratingWhole && ratingDecimal > 0 && (
                                        <>
                                            <Image 
                                                style={overallRatingStyles.star} 
                                                source={require('../../assets/images/gold-star.png')} 
                                            />
                                            <View style={{...overallRatingStyles.starMask, width: `${(1 - ratingDecimal) * 100}%`}} />
                                        </>
                                    )
                                }
                                <Image 
                                    style={overallRatingStyles.starOutline} 
                                    source={require('../../assets/images/outline-star.png')} 
                                />
                            </View>
                        ))
                    }
                </View>
                <View style={overallRatingStyles.ratingContainer}>
                    <Text style={overallRatingStyles.rating}>{rating}</Text>
                    <Text style={overallRatingStyles.starsText}>star{rating != 1 && 's'}</Text>
                </View>
            </View>
            <Text style={overallRatingStyles.numRatings}>{numRatings} rating{numRatings != 1 && 's'}</Text>
        </TouchableOpacity>
    )
};

export default OverallRating;