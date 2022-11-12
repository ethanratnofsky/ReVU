import { useState } from 'react';
import { useFonts, LibreCaslonText_400Regular, LibreCaslonText_700Bold } from '@expo-google-fonts/libre-caslon-text'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/splashscreen/SplashScreen';
import Main from './components/homepage/Main';
import DiningHall from './components/dining-hall/DiningHall';
import Complaints from './components/complaints/Complaints';
import MenuDisplay from './components/menus/MenuDisplay';

import { SPLASH_SCREEN_TIME } from './constants';
import Login from './components/login/Login';

const Stack = createNativeStackNavigator();

export default function App() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    const [fontsLoaded] = useFonts({
        LibreCaslonText_400Regular,
        LibreCaslonText_700Bold,
    });

    setTimeout(() => setShowSplashScreen(false), SPLASH_SCREEN_TIME);
    
    if (showSplashScreen || !fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
