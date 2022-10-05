import { Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import navbarStyles from './NavbarStyles'

import { VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END } from '../../constants';

const Navbar = () => {

    const navigation = useNavigation();

    // TODO: Add navigation to the icons
    
    return (
        <LinearGradient colors={[VU_METALLIC_GOLD_START, VU_METALLIC_GOLD_END]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={navbarStyles.gradient}>
            <View style={navbarStyles.container}>
                <Pressable onPress={() => alert('Terms & Conditions')}>
                    <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-tc.png')} />
                </Pressable>
                <Pressable onPress={() => alert('Menus')}>
                    <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-menus.png')} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Main")}>
                    <Image style={navbarStyles.icon} source={require('../../assets/images/gold-icon-home.png')} />
                </Pressable>
                <Pressable onPress={() => alert('Hours')}>
                    <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-hours.png')} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Complaints')}>
                    <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-complaints.png')} />
                </Pressable>
            </View>
        </LinearGradient>
    );
}

export default Navbar;
