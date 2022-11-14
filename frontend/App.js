import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, LibreCaslonText_400Regular, LibreCaslonText_700Bold } from '@expo-google-fonts/libre-caslon-text'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './components/splashscreen/SplashScreen';
import Home from './components/homepage/Home';
import DiningHall from './components/dining-hall/DiningHall';
import Complaints from './components/complaints/Complaints';
import MenuDisplay from './components/menus/MenuDisplay';
import TermsAndConditions from './components/terms-and-conditions/TermsAndConditions';

import { SPLASH_SCREEN_TIME } from './constants';
import Login from './components/login/Login';

const Stack = createNativeStackNavigator();

export default function App() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [firstTime, setFirstTime] = useState(false);

    const [fontsLoaded] = useFonts({
        LibreCaslonText_400Regular,
        LibreCaslonText_700Bold,
    });

    useEffect(() => {
        const checkIfFirstTime = async () => {
            // FOR DEVELOPMENT (uncomment to clear app storage)
            // AsyncStorage.clear().then(() => console.log('DEBUG: Storage cleared!'));
        
            AsyncStorage.getItem('firstTime')
                .then(value => {
                    if (value === null) {
                        AsyncStorage.setItem('firstTime', 'false')
                        .then(() => {
                            console.log('First time opening app');
                            setFirstTime(true);
                        })
                        .catch(error => console.log(error));
                    } else {
                        console.log('Not first time opening app');
                    };
                })
                .catch(error => console.error(error));
        }

        checkIfFirstTime();

        setTimeout(() => {
            setShowSplashScreen(false);
        }, SPLASH_SCREEN_TIME);
    }, []);
    
    if (showSplashScreen || !fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator
                initialRouteName={firstTime ? 'Terms and Conditions' : 'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Dining Hall"
                    component={DiningHall}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Complaints"
                    component={Complaints}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Menus"
                    component={MenuDisplay}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Terms and Conditions"
                    component={TermsAndConditions}
                    options={{headerShown: false}}
                    initialParams={{firstTime: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
