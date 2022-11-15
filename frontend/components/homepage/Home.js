import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import homeStyles from './HomeStyles';

import DiningHallButton from './DiningHallButton';
import Button from '../button/Button';

import { DINING_HALLS, ANONYMOUS_NAMES } from '../../constants';

const Home = ({ navigation, route }) => {
    const currDate = new Date();
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currDate);
    const date = currDate.getDate();
    const year = currDate.getFullYear();
    const uid = route.params.id;

    const renderDiningHallButton = ({item}) => (
        <DiningHallButton id={item.id} name={item.name} userId={uid}/>
    );

    return (
        <SafeAreaView style={homeStyles.container}>
            <View style={homeStyles.header}>
                <Image style={homeStyles.logo} source={require('../../assets/images/revu-logo.png')} />
                <TouchableOpacity style={homeStyles.userContainer} onPress={() => alert("user")}>
                    <Text style={homeStyles.userName}>User</Text>
                    <Image style={homeStyles.userIcon} source={require('../../assets/images/white-user.png')} />
                </TouchableOpacity>
            </View>
            <View style={homeStyles.contentContainer}>
                <Text style={homeStyles.date}>{weekday}, {month} {date}, {year}</Text>
                <FlatList 
                    data={DINING_HALLS} 
                    renderItem={renderDiningHallButton} 
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
            <View style={homeStyles.footer}>
                <TouchableOpacity style={homeStyles.termsContainer} onPress={() => navigation.navigate('Terms and Conditions', { firstTime: false, id: uid })}>
                    <Image style={homeStyles.termsIcon} source={require('../../assets/images/white-terms.png')} />
                    <Text style={homeStyles.termsText}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Button fontSize={12} imgSrc={require('../../assets/images/gold-complaints.png')} onPress={() => navigation.navigate("Complaints")} style={homeStyles.complaintsButton} text='File a Complaint' />
            </View>
        </SafeAreaView>
    );
}

export default Home;
