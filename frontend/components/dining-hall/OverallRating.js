import { Image, Text, View } from 'react-native';

import overallRatingStyles from './OverallRatingStyles';

const OverallRating = ({ diningHallId }) => {
    let rating = 4.35; // TODO: use diningHallId to fetch rating from backend
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
        <View style={overallRatingStyles.container}>
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
                <Text style={overallRatingStyles.starsText}>stars</Text>
            </View>
        </View>
    )
};

export default OverallRating;