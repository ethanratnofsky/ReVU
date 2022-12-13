import { Text, TouchableOpacity } from "react-native";

import backButtonStyles from "./BackButtonStyles";

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={backButtonStyles.container} onPress={onPress}>
            <Text style={backButtonStyles.arrow}>{"\u2190"}</Text>
        </TouchableOpacity>
    );
};

export default BackButton;
