import { FlatList, Image, SafeAreaView, Text } from 'react-native';

import homeStyles from './HomeStyles';

import DiningHallButton from './DiningHallButton';

import { DINING_HALLS } from '../../constants';

const Home = ({navigation}) => {
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
