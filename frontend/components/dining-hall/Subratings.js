import { useEffect, useState } from 'react';
import { Keyboard, Image, Text, View } from 'react-native';

import subratingsStyles from './SubratingsStyles';

import { RATINGS } from '../../demo.js';

const Subratings = ({ diningHallId }) => {
    // TODO: Get ratings from backend
    const foodRatings = RATINGS.filter(rating => rating.diningHallId === diningHallId && rating.type === 'food');
    const trafficRatings = RATINGS.filter(rating => rating.diningHallId === diningHallId && rating.type === 'traffic');

    const foodRating = foodRatings.length === 0 ? 'N/A' : (foodRatings.reduce((acc, rating) => acc + rating.rating, 0) / foodRatings.length).toFixed(1);
    const trafficRating = trafficRatings.length === 0 ? 'N/A' : (trafficRatings.reduce((acc, rating) => acc + rating.rating, 0) / trafficRatings.length).toFixed(1);

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    const [foodRatingAvg, setFoodRatingAvg] = useState(0.0);
    const [trafficRatingAvg, setTrafficRatingAvg] = useState(0.0);


    useEffect(() => {
        fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/ratings/${diningHallId}`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                setFoodRatingAvg((data.finFood).toFixed(1));
                setTrafficRatingAvg((data.finTraffic).toFixed(1));
                
            }).catch(error => {
                console.log(error);
                alert("Could not get overall ratings.");
            });
    })


    // State for whether keyboard is open or not
    const [isKeyboardShown, setIsKeyboardShown] = useState(undefined);

    // Event listener for keyboard show/hide (using willShow and willHide events to avoid delay)
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardWillShow', () => {
            setIsKeyboardShown(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
            setIsKeyboardShown(false);
        });
    
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={subratingsStyles.container}>
            <View style={isKeyboardShown ? subratingsStyles.subratingSmallContainer : subratingsStyles.subratingContainer}>
                <Text style={subratingsStyles.ratingType}>Food</Text>
                <View style={subratingsStyles.ratingContainer}>
                    <Text style={isKeyboardShown ? subratingsStyles.smallRating : subratingsStyles.rating}>{foodRatingAvg}</Text>
                    <Image style={isKeyboardShown ? subratingsStyles.smallStar : subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
            <View style={subratingsStyles.divider} />
            <View style={isKeyboardShown ? subratingsStyles.subratingSmallContainer : subratingsStyles.subratingContainer}>
                <Text style={subratingsStyles.ratingType}>Traffic</Text>
                <View style={subratingsStyles.ratingContainer}>
                    <Text style={isKeyboardShown ? subratingsStyles.smallRating : subratingsStyles.rating}>{trafficRatingAvg}</Text>
                    <Image style={isKeyboardShown ? subratingsStyles.smallStar : subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
        </View>
    )
};

export default Subratings;