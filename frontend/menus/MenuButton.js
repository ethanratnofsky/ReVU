import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const MenuButton = ({ id, name, overallRating }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Main");
    }

    return (
        <TouchableOpacity activeOpacity={0.6} style={buttonStyles.container} onPress={handlePress}>
            <Text style={buttonStyles.name}>{name}</Text>
        </TouchableOpacity>
    );
}


const buttonStyles = {
    container: {
        ...THEME_STYLES.whiteBackground,
        width: 300,
        height: 55,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 10,
    },
    name: {
        ...THEME_STYLES.blackText,
        fontSize: 16,
        fontWeight: 'bold',
    },
}


export default MenuButton;
