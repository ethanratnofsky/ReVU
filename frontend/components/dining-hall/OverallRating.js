import { Image, Text, TouchableOpacity, View } from 'react-native';

import overallRatingStyles from './OverallRatingStyles';

import { RATINGS } from '../../demo.js';
import { useEffect, useState } from 'react';

const OverallRating = ({ diningHallId, onPress }) => {
    // TODO: Get ratings from backend
    //const ratings = RATINGS.filter(rating => rating.diningHallId === diningHallId);

    const [ratings, setRatings] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    useEffect(() => {
        fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/ratings/${diningHallId}`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setRatings(data);
                console.log("Did a thing");
                
            }).catch(error => {
                console.log(error);
                alert("Could not get all ratings for overall rating.");
            });
    }, []);

    // Calculate overall rating
    let overallRating = ((0.5) * (ratings.finFood + ratings.finTraffic));
    const numRatings = ratings.numRatings;

    let ratingWhole = 0;
    let ratingDecimal = 0;

    // Validate rating
    if (overallRating < 0 || overallRating > 5 || !overallRating) {
        console.log('[ Dining Hall ID ' + diningHallId + ' ] ' + 'Invalid overall rating: ' + overallRating);
        overallRating = 'N/A';
    } else {
        ratingWhole = Math.floor(overallRating);
        ratingDecimal = overallRating - ratingWhole;
        overallRating = overallRating.toFixed(1);
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
                    <Text style={overallRatingStyles.rating}>{overallRating}</Text>
                    <Text style={overallRatingStyles.starsText}>star{overallRating != 1 && 's'}</Text>
                </View>
            </View>
            <Text style={overallRatingStyles.numRatings}>{numRatings} rating{numRatings != 1 && 's'}</Text>
        </TouchableOpacity>
    )
};

export default OverallRating;