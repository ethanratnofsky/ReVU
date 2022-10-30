import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import dotsMenuStyles from './DotsMenuStyles';

const DotsMenu = ({ diningHallId, isMenuVisible, toggleMenu }) => {

    return (
        <View style={dotsMenuStyles.container}>
            <TouchableOpacity style={dotsMenuStyles.dotsContainer} onPress={toggleMenu}>
                <View style={dotsMenuStyles.dot} />
                <View style={dotsMenuStyles.dot} />
                <View style={dotsMenuStyles.dot} />
            </TouchableOpacity>
            {isMenuVisible && (
                <View style={dotsMenuStyles.menu}>
                    <TouchableOpacity style={dotsMenuStyles.menuItem} onPress={() => alert('omw to menus')} >
                        <Image style={dotsMenuStyles.menuIcon} source={require('../../assets/images/white-food.png')} />
                        <Text style={dotsMenuStyles.menuText}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={dotsMenuStyles.menuItem} onPress={() => alert('omw to hours')} >
                    <Image style={dotsMenuStyles.menuIcon} source={require('../../assets/images/white-clock.png')} />
                        <Text style={dotsMenuStyles.menuText}>Hours</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default DotsMenu;