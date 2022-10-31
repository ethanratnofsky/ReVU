import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';
import FoodList from './FoodList';
import { DINING_MAP } from '../../constants';

const MENU = [
    {"time": "Breakfast", "items": ["Tater Tots", "Scrambeled Eggs", "Maple Syrup Infused Waffles", "Vegan Chipotle Eggs"]},
    {"time": "Lunch", "items": ["Glazed Pork", "Vegan Pot Pie", "Green Beans", "Potato Wedges"]},
    {"time": "Dinner", "items": ["Fried Okra", "Vegan Sloppy Joe", "Lemon Pepper Chicken Wings", "White Rice"]}
]


const MenuDisplay = ({navigation, route}) => {

    const { diningHallId } = route.params;
    const diningHall = DINING_MAP[diningHallId];
    // TODO: Fetch
    return (
        <SafeAreaView style={menuPageStyles.container}>
            <Text style={menuPageStyles.titleText}>{diningHall}</Text>
            <ScrollView>
                {MENU.map((time) => {
                    return (
                        <FoodList timeOfDay={time["time"]} list={time["items"]}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );

}

export default MenuDisplay;