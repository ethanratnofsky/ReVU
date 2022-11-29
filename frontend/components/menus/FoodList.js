import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';
import FoodItem from './FoodItem';

const FoodList = () => {
    const list = ["Banana Cakes", "Green Beans", "Vegan Chili", "Sloppy Joe"];
    const timeOfDay = "Breakfast";
    return (
        <View>
            <Text style={menuPageStyles.foodTimeHeader}>{timeOfDay}</Text>
            {list.map((foodItem, index) => {
                return (
                    <FoodItem key={index} item={foodItem} />
                )
            })}
        </View>
    );

}

export default FoodList;