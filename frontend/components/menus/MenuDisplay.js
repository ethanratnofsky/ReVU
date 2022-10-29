import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import menuPageStyles from './MenuStyles';
import FoodList from './FoodList';

const MENU = [
    {"time": "Breakfast", "items": ["Tater Tots", "Scrambeled Eggs", "Maple Syrup Infused Waffles", "Vegan Chipotle Eggs"]},
    {"time": "Lunch", "items": ["Glazed Pork", "Vegan Pot Pie", "Green Beans", "Potato Wedges"]},
    {"time": "Dinner", "items": ["Fried Okra", "Vegan Sloppy Joe", "Lemon Pepper Chicken Wings", "White Rice"]}
]

const MenuDisplay = () => {

    // TODO: Fetch
    const diningHall = "Kissam Dining Hall";
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