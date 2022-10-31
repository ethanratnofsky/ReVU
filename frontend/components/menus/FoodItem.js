import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';

const FoodItem = ({item}) => {
    const diningHall = "Kissam Dining Hall";

    return (
        <View style={menuPageStyles.itemDisplay}>
            <Text style={menuPageStyles.itemText}>{item}</Text>
        </View>
    );

}

export default FoodItem;