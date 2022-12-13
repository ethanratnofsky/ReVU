import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import buttonStyles from "./ButtonStyles";

import { VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END } from "../../constants";

const Button = ({ disabled, fontSize = 18, imgSrc, onPress, style, text = "Button" }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...buttonStyles.outterContainer, ...style, opacity: disabled ? 0.1 : 1 }}
            disabled={disabled}
        >
            <LinearGradient
                colors={[VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={buttonStyles.gradient}
            >
                <View style={buttonStyles.innerContainer}>
                    {imgSrc && (
                        <Image
                            style={{ ...buttonStyles.icon, width: fontSize, height: fontSize + 4 }}
                            source={imgSrc}
                        />
                    )}
                    <Text style={{ ...buttonStyles.text, fontSize }}>{text}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Button;
