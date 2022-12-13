import { Image, Text, View } from "react-native";

import splashScreenStyles from "./SplashScreenStyles";

const SplashScreen = () => {
    return (
        <View style={splashScreenStyles.container}>
            <Image
                style={splashScreenStyles.logo}
                source={require("../../assets/images/revu-logo.png")}
            />
            <View style={splashScreenStyles.credits}>
                <Text style={splashScreenStyles.creditLine1}>from</Text>
                <Text style={splashScreenStyles.creditLine2}>Vanderbilt Student Government</Text>
            </View>
        </View>
    );
};

export default SplashScreen;
