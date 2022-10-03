import { StatusBar, View } from 'react-native';

import Main from './components/homepage/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Complaints from './components/complaints/Complaints';
import Rand from './components/dininghalls/Rand';
import Roth from './components/dininghalls/Roth';
import Commons from './components/dininghalls/Commons';
import Zeppos from './components/dininghalls/Zeppos';
import Kissam from './components/dininghalls/Kissam';
import EBI from './components/dininghalls/EBI';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
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
