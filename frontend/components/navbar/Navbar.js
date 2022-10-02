import { Image, Pressable, View } from 'react-native';

import navbarStyles from './NavbarStyles';

const Navbar = () => {

    // TODO: Add navigation to the icons
    
    return (
        <View style={navbarStyles.container}>
            <Pressable onPress={() => alert('Terms & Conditions')}>
                <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-tc.png')} />
            </Pressable>
            <Pressable onPress={() => alert('Menus')}>
                <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-menus.png')} />
            </Pressable>
            <Pressable onPress={() => alert('Home')}>
                <Image style={navbarStyles.icon} source={require('../../assets/images/gold-icon-home.png')} />
            </Pressable>
            <Pressable onPress={() => alert('Hours')}>
                <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-hours.png')} />
            </Pressable>
            <Pressable onPress={() => alert('Complaints')}>
                <Image style={navbarStyles.icon} source={require('../../assets/images/black-icon-complaints.png')} />
            </Pressable>
        </View>
    );
}

export default Navbar;
