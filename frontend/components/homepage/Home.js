import { FlatList, Image, SafeAreaView, Text } from 'react-native';

import homeStyles from './HomeStyles';

import DiningHallButton from './DiningHallButton';

import { DINING_HALLS } from '../../constants';

const Home = () => {
    const currDate = new Date();
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currDate);
    const date = currDate.getDate();
    const year = currDate.getFullYear();

    const renderDiningHallButton = ({ item }) => (
        <DiningHallButton {...item} />
    );

    return (
        <SafeAreaView style={homeStyles.container}>
            <Image style={homeStyles.logo} source={require('../../assets/images/revu-logo.png')} />
            <Text style={homeStyles.date}>{weekday}, {month} {date}, {year}</Text>
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
