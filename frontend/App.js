import { StatusBar, View } from 'react-native';

import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar';

export default function App() {
    return (
        <View>
            <StatusBar barStyle={'light-content'} />
            <Home />
            <Navbar />
        </View>
    );
}
