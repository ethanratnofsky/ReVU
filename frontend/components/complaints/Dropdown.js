import { View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { THEME_STYLES, VU_BLACK, VU_GOLD, VU_METALLIC_GOLD_START, VU_WHITE } from '../../constants';
import { useState } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import complaintStyles from './ComplaintStyles';
import  SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({options, setVal, title}) => {
    return (
        <SelectDropdown
            data={options}
            defaultButtonText={title}
            buttonStyle={complaintStyles.inputButton}
            buttonTextStyle={complaintStyles.diningHallOption}
            onSelect={(selectedItem, index) => {
                setVal(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />
    )
}

export default Dropdown;