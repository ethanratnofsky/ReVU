import { useEffect, useState } from 'react';
import { Keyboard, Image, Text, View } from 'react-native';

import subratingsStyles from './SubratingsStyles';

const Subratings = ({ diningHallId }) => {
    const foodRating = 4.7; // TODO: use diningHallId to fetch food rating from backend
    const trafficRating = 2.3; // TODO: use diningHallId to fetch traffic rating from backend

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
                    <Text style={isKeyboardShown ? subratingsStyles.smallRating : subratingsStyles.rating}>{foodRating}</Text>
                    <Image style={isKeyboardShown ? subratingsStyles.smallStar : subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
            <View style={subratingsStyles.divider} />
            <View style={isKeyboardShown ? subratingsStyles.subratingSmallContainer : subratingsStyles.subratingContainer}>
                <Text style={subratingsStyles.ratingType}>Traffic</Text>
                <View style={subratingsStyles.ratingContainer}>
                    <Text style={isKeyboardShown ? subratingsStyles.smallRating : subratingsStyles.rating}>{trafficRating}</Text>
                    <Image style={isKeyboardShown ? subratingsStyles.smallStar : subratingsStyles.star} source={require('../../assets/images/gold-star.png')} />
                </View>
            </View>
        </View>
    )
};

export default Subratings;