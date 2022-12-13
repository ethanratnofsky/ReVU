import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
    useFonts,
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
} from "@expo-google-fonts/libre-caslon-text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./components/splashscreen/SplashScreen";
import Home from "./components/homepage/Home";
import DiningHall from "./components/dining-hall/DiningHall";
import Complaints from "./components/complaints/Complaints";
import MenuDisplay from "./components/menus/MenuDisplay";
import TermsAndConditions from "./components/terms-and-conditions/TermsAndConditions";
import Login from "./components/login/Login";
import UserProfile from "./components/user-profile/UserProfile";

import { SPLASH_SCREEN_TIME } from "./constants";

const Stack = createNativeStackNavigator();

export default function App() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    const [fontsLoaded] = useFonts({
        LibreCaslonText_400Regular,
        LibreCaslonText_700Bold,
    });

    useEffect(() => {
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
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="User Profile"
                    component={UserProfile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dining Hall"
                    component={DiningHall}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Complaints"
                    component={Complaints}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menus"
                    component={MenuDisplay}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Terms and Conditions"
                    component={TermsAndConditions}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
