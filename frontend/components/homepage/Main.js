import { StatusBar, View } from 'react-native';

import Home from './Home';
import Navbar from '../navbar/Navbar';


const Main = ({navigation}) => {
    return (
        <View>
            <StatusBar barStyle={'light-content'} />
            <Home />
            <Navbar />
        </View>
    );
}

export default Main;