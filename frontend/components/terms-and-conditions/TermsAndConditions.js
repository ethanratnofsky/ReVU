import { useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import Checkbox from "expo-checkbox";

import Button from "../button/Button";

import termsAndConditionsStyles from "./TermsAndConditionsStyles";

import { TERMS_AND_CONDITIONS } from "../../constants";

const TermsAndConditions = ({ navigation, route }) => {
    const [isAccepted, setIsAccepted] = useState(false);

    const firstTime = route.params?.firstTime || false;
    const id = route.params.id;
    const email = route.params.email;

    const handleButtonPress = () => {
        navigation.navigate("Home", { id: id, email });
    };

    return (
        <SafeAreaView style={termsAndConditionsStyles.container}>
            <Image
                style={termsAndConditionsStyles.logo}
                source={require("../../assets/images/revu-logo.png")}
            />
            <Text style={termsAndConditionsStyles.heading}>Terms & Conditions</Text>
            <Text style={termsAndConditionsStyles.subheading}>Updated November 11, 2022</Text>
            <ScrollView style={termsAndConditionsStyles.scrollContainer}>
                <Text style={termsAndConditionsStyles.text}>{TERMS_AND_CONDITIONS}</Text>
            </ScrollView>
            {firstTime && (
                <Pressable
                    style={termsAndConditionsStyles.acceptInputContainer}
                    onPress={() => setIsAccepted((prev) => !prev)}
                >
                    <Checkbox
                        style={termsAndConditionsStyles.checkbox}
                        disabled={false}
                        value={isAccepted}
                        onValueChange={setIsAccepted}
                    />
                    <Text style={termsAndConditionsStyles.agreeText}>
                        I have read and agree to ReVU's terms and conditions.
                    </Text>
                </Pressable>
            )}
            <Button
                disabled={firstTime && !isAccepted}
                fontSize={14}
                style={termsAndConditionsStyles.button}
                onPress={handleButtonPress}
                text={firstTime ? "Got it!" : "Ah, yes, I remember!"}
            />
        </SafeAreaView>
    );
};

export default TermsAndConditions;
