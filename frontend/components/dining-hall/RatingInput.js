import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ratingInputStyles from './RatingInputStyles';

import { VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END } from '../../constants';

const RatingInput = ({ diningHallId, onClose }) => {
    // TODO: get ratings from backend if user already submitted ratings
    const [foodRating, setFoodRating] = useState(0);
    const [trafficRating, setTrafficRating] = useState(0);

    // TODO: get dining hall name by id
    const DINING_HALL_NAME = 'Rothschild Dining Hall';

    // TODO: submit ratings to backend
    const handleSubmit = () => {
        Alert.alert('Ratings Submitted', `You rated ${DINING_HALL_NAME} ${foodRating} stars for food and ${trafficRating} stars for traffic.`);
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
            <TouchableOpacity style={{...ratingInputStyles.submitButtonContainer, opacity: foodRating || trafficRating ? 1 : 0.25 }} onPress={handleSubmit} disabled={!(foodRating || trafficRating)}>
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