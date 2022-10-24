import { useState } from 'react';
import { useFonts, LibreCaslonText_400Regular } from '@expo-google-fonts/libre-caslon-text'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/splashscreen/SplashScreen';
import Main from './components/homepage/Main';
import Complaints from './components/complaints/Complaints';
import Rand from './components/dininghalls/Rand';
import Roth from './components/dininghalls/Roth';
import Commons from './components/dininghalls/Commons';
import Zeppos from './components/dininghalls/Zeppos';
import Kissam from './components/dininghalls/Kissam';
import EBI from './components/dininghalls/EBI';

import { SPLASH_SCREEN_TIME } from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    const [fontsLoaded] = useFonts({
        LibreCaslonText_400Regular,
    });

    setTimeout(() => setShowSplashScreen(false), SPLASH_SCREEN_TIME);
    
    if (showSplashScreen || !fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Complaints"
                    component={Complaints}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Rand Dining Hall"
                    component={Rand}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="E. B. I. Dining Hall"
                    component={EBI}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Commons Dining Hall"
                    component={Commons}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Zeppos Dining Hall"
                    component={Zeppos}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Rothschild Dining Hall"
                    component={Roth}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Kissam Dining Hall"
                    component={Kissam}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
