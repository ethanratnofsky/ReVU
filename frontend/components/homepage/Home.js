import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import homeStyles from './HomeStyles';

import DiningHallButton from './DiningHallButton';

const DINING_HALLS = [
    {
        id: 0,
        name: 'Rand Dining Hall',
        overallRating: 5.0,
    },
    {
        id: 1,
        name: 'Kissam Dining Hall',
        overallRating: 4.3,
    },
    {
        id: 2,
        name: 'Rothschild Dining Hall',
        overallRating: 3.0,
    },
    {
        id: 3,
        name: 'E. B. I. Dining Hall',
        overallRating: 4.2,
    },
    {
        id: 4,
        name: 'Zeppos Dining Hall',
        overallRating: 2.5,
    },
    {
        id: 5,
        name: 'Commons Dining Hall',
        overallRating: null,
    }
]

const Home = () => {
    const renderDiningHallButton = ({ item }) => (
        <DiningHallButton {...item} />
    );

    return (
        <SafeAreaView style={homeStyles.container}>
            <Image style={homeStyles.logo} source={require('../../assets/images/revu-logo.png')} />
            <Text style={homeStyles.date}>Friday, Semptember 31, 2022</Text>
            <FlatList 
                data={DINING_HALLS} 
                renderItem={renderDiningHallButton} 
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </SafeAreaView>
    );
}

export default Home;
