import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import diningHallButtonStyles from './DiningHallButtonStyles';

import { ANONYMOUS_NAMES } from '../../constants';
import RATINGS from './demo';

const DiningHallButton = () => {
    // const navigation = useNavigation();

    const id = 0;
    const name = "Rand Dining Hall";
    const userId = "Wxdajkhdsa99";

    // TODO: Get ratings from backend
    //const ratings = RATINGS.filter(rating => rating.diningHallId === id);

    // const [ratings, setRatings] = useState([]);

    // const requestOptions = {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'}
    // };

    // useEffect(() => {
    //     fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/ratings/${id}`, requestOptions)
    //         .then(async response => {
    //             const isJson = response.headers.get('content-type')?.includes('application/json');
    //             const data = isJson && await response.json();

    //             if (!response.ok) {
    //                 const err = (data && data.message) || response.status;
    //                 return Promise.reject(error);
    //             }
    //             setRatings(data);
    //         }).catch(error => {
    //             console.log(error);
    //             alert("Could not get all ratings for overall rating.");
    //             console.log("Bad here in dining hall butotn");
    //         });
    // }, []);

    // TODO: Get ratings from backend
    const ratings = [
        {
            id: 10,
            userId: 2,
            diningHallId: 0,
            type: 'traffic',
            rating: 3,
        },
        {
            id: 11,
            userId: 2,
            diningHallId: 0,
            type: 'food',
            rating: 5,
        },
        {
            id: 12,
            userId: 2,
            diningHallId: 0,
            type: 'traffic',
            rating: 5,
        },
    ];

    let overallRating = (0.5 * (ratings.finFood + ratings.finTraffic));
    // let overallRating = null;
    if (ratings.numRatings === 0) {
        overallRating = null;
    }

    const handlePress = () => {
        navigation.navigate('Dining Hall', { id, name, userId });
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
