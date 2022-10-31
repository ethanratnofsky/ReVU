import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';
import FoodItem from './FoodItem';

const FoodList = ({timeOfDay, list}) => {
    return (
        <View>
            <Text style={menuPageStyles.foodTimeHeader}>{timeOfDay}</Text>
            {list.map((foodItem) => {
                return (
                    <FoodItem item={foodItem} />
                )
            })}
        </View>
    );

}

export default FoodList;