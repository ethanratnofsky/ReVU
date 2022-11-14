import { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DINING_HALLS } from '../../constants';
import ratingInputStyles from './RatingInputStyles';

import { VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END } from '../../constants';

const RatingInput = ({ diningHallId, onClose, userId }) => {
    // TODO: get ratings from backend if user already submitted ratings
    const [foodRating, setFoodRating] = useState(0);
    const [trafficRating, setTrafficRating] = useState(0);
    const [ratedFood, setRatedFood] = useState(false);
    const [ratedTraffic, setRatedTraffic] = useState(false);
    const [submittedRating, setSubmittedRating] = useState(false);

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    useEffect(() => {
        fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/userRatings/${userId}`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                for (let i = 0; i < data.length; ++i) {
                    if (data[i].diningHallId == diningHallId) {
                        if (data[i].type == 'food') {
                            setFoodRating(data[i].rating);
                            setRatedFood(true);
                        } else if (data[i].type == 'traffic') {
                            setTrafficRating(data[i].rating);
                            setRatedTraffic(true);
                        }
                    }
                }
            }).catch(error => {
                console.log(error);
                alert("Could not post rating.");
            });
    }, [submittedRating]);

    // TODO: get dining hall name by id
    const DINING_HALL_NAME = DINING_HALLS[diningHallId].name

    const updateRating = (ratingType) => {
        const rating = ratingType == 'food' ? foodRating : trafficRating;
        const updateRatingOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ diningHallId: diningHallId, type : ratingType, rating: rating, userId: userId })
        }

        fetch('https://sleepy-reaches-22563.herokuapp.com/api/patch/updateRating', updateRatingOptions).then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }
            
        }).catch(error => {
            console.log(error);
            alert("Could not get current rating input. Try again later.");
        });


    }

    const createRating = (ratingType) => {
        const rating = ratingType == 'food' ? foodRating : trafficRating;
        const createRatingOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ diningHallId: diningHallId, type : ratingType, rating: rating, userId: userId })
        };
        fetch('https://sleepy-reaches-22563.herokuapp.com/api/post/newRating', createRatingOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }
            
        }).catch(error => {
            console.log(error);
            alert("Could not get current rating input. Try again later.");
        });
    }

    // TODO: submit ratings to backend
    const handleSubmit = () => {
        let rated = false;
        if (!ratedFood) {
            console.log("Creating new rating for food.");
            createRating("food");
            rated = true;
        } else {
            console.log("Entered update.");
            updateRating('food');
            rated = true;
        }

        if (!ratedTraffic) {
            console.log("Creating rating for traffic.")
            createRating("traffic");
            rated = true;
        } else {
            console.log("Entered update.");
            updateRating('traffic');
            rated = true;
        }

        Alert.alert("Successfully Rated!")
    }

    return (
        <SafeAreaView style={ratingInputStyles.container}>
            <View style={ratingInputStyles.infoContainer}>
                <Text style={ratingInputStyles.infoTextSmall}>You're rating</Text>
                <Text style={ratingInputStyles.infoTextBig}>{DINING_HALL_NAME}</Text>
            </View>
            <View style={ratingInputStyles.ratingContainer}>
                <Text style={ratingInputStyles.ratingType}>How is the food? 🍽</Text>
                <View style={ratingInputStyles.starsContainer}>
                    {
                        [...Array(5)].map((_, index) => (
                            <TouchableOpacity style={ratingInputStyles.starContainer} key={index} onPress={() => setFoodRating(index + 1)}>
                                {
                                    index < foodRating && (
                                        <Image
                                            style={ratingInputStyles.star}
                                            source={require('../../assets/images/gold-star.png')}
                                        />
                                    )
                                }
                                <Image 
                                    style={ratingInputStyles.starOutline} 
                                    source={require('../../assets/images/outline-star.png')} 
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={ratingInputStyles.ratingDescriptionContainer}>
                    <Text style={ratingInputStyles.ratingDescription}>Poor</Text>
                    <Text style={ratingInputStyles.ratingDescription}>Excellent</Text>
                </View>
            </View>
            <View style={ratingInputStyles.ratingContainer}>
                <Text style={ratingInputStyles.ratingType}>How is the traffic? 🚦</Text>
                <View style={ratingInputStyles.starsContainer}>
                    {
                        [...Array(5)].map((_, index) => (
                            <TouchableOpacity style={ratingInputStyles.starContainer} key={index} onPress={() => setTrafficRating(index + 1)}>
                                {
                                    index < trafficRating && (
                                        <Image
                                            style={ratingInputStyles.star}
                                            source={require('../../assets/images/gold-star.png')}
                                        />
                                    )
                                }
                                <Image 
                                    style={ratingInputStyles.starOutline} 
                                    source={require('../../assets/images/outline-star.png')} 
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={ratingInputStyles.ratingDescriptionContainer}>
                    <Text style={ratingInputStyles.ratingDescription}>Busy</Text>
                    <Text style={ratingInputStyles.ratingDescription}>Empty</Text>
                </View>
            </View>
            <TouchableOpacity style={{...ratingInputStyles.submitButtonContainer, opacity: foodRating && trafficRating ? 1 : 0.25 }} onPress={handleSubmit} disabled={!(foodRating && trafficRating)}>
                <LinearGradient colors={[VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={ratingInputStyles.gradient}>
                    <View style={ratingInputStyles.submitButton}>
                        <Text style={ratingInputStyles.submitButtonText}>Submit</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={ratingInputStyles.closeButtonContainer} onPress={onClose}>
                <Image style={ratingInputStyles.closeButton} onPress={onClose} source={require('../../assets/images/white-close.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default RatingInput;