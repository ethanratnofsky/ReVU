import {ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';
import FoodList from './FoodList';
import { DINING_HALLS } from '../../constants';

const MENU = [
    {"time": "Breakfast", "items": ["Tater Tots", "Scrambeled Eggs", "Maple Syrup Infused Waffles", "Vegan Chipotle Eggs"]},
    {"time": "Lunch", "items": ["Glazed Pork", "Vegan Pot Pie", "Green Beans", "Potato Wedges"]},
    {"time": "Dinner", "items": ["Fried Okra", "Vegan Sloppy Joe", "Lemon Pepper Chicken Wings", "White Rice"]}
]


const MenuDisplay = ({navigation, route}) => {

    const { diningHallId } = route.params;
    const diningHallName = DINING_HALLS[diningHallId].name;
    // TODO: Fetch
    return (
        <SafeAreaView style={menuPageStyles.container}>
            <Text style={menuPageStyles.titleText}>{diningHallName}</Text>
            <ScrollView>
                {MENU.map((time, i) => {
                    return (
                        <FoodList key={i} timeOfDay={time["time"]} list={time["items"]}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );

}

export default MenuDisplay;