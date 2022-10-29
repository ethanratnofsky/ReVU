import { View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { THEME_STYLES, VU_BLACK, VU_GOLD, VU_METALLIC_GOLD_START, VU_WHITE } from '../../constants';
import { useState } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import complaintStyles from './ComplaintStyles';
import  SelectDropdown from 'react-native-select-dropdown';
import Dropdown from './Dropdown';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const Filter = require('bad-words');

const halls = ["Rand Dining Hall", "Kissam Dining Hall", "Rothschild Dining Hall", "E. B. I. Dining Hall", "Zeppos Dining Hall", "Commons Dining Hall"]
const urgencies = ["0", "1", "2", "3", "4", "5"]

const Complaints = () => {

    // TODO: Create individual components for each section here and pass in props.
    // TODO: Check for input validity before sending to API

    const [contact, setContact] = useState(null);
    const [issue, setIssue] = useState(null);
    const [diningHall, setDH] = useState(null);
    const [urgency, setUrgency] = useState(null);
    const height = useHeaderHeight();
    const navigation = useNavigation();


    const filter = new Filter({'placeHolder': '*'});

    const checkInput = () => {
        if (issue == null || contact == null || diningHall == null || urgency == null) {
            alert("Please fill out all fields. It seems there are some that were left empty.")
        } else if (!(/\S+@\S+\.\S+/.test(contact))) {
            alert("Email does not have proper format. Please re-enter email address.");
        } else if (filter.isProfane(issue)) {
            alert("You're issue has inappropriate language. Please re-enter your issue input.");
        } else if (filter.isProfane(contact)) {
            alert("Your email has inappropriate language. Please re-enter your email.");
        }
        else {
            alert("You submitted a proper complaint.");
        }
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={height} style={{backgroundColor: VU_BLACK, flex: 1}} behavior='padding'>
        <ScrollView style={{backgroundColor: VU_BLACK }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{}}>
            <SafeAreaView style={complaintStyles.container}>
                <Text style={complaintStyles.titleText}>File a Complaint</Text>
                <Dropdown options={halls} setVal={setDH} title="Select Dining Halls" />
                <Dropdown options={urgencies} setVal={setUrgency} title="Select Issue Urgency"/>

                <TextInput 
                    style={complaintStyles.emailInput}
                    placeholder="Enter email"
                    onChangeText={setContact}
                    />

                <TextInput 
                    multiline={true}
                    scrollEnabled={true}
                    style={complaintStyles.issueInput}
                    placeholder="Enter issue (250 character limit)"
                    value={issue}
                    onChangeText={(text) => {
                        if (text.length <= 250) {
                            setIssue(text);
                        }
                    }}
                    />


                <TouchableOpacity 
                    style={complaintStyles.submitButtonContainer}
                    onPress={checkInput}
                    >
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: VU_WHITE}}>Submit Complaint</Text>
                </TouchableOpacity>


                {/* <TouchableOpacity style={{backgroundColor: VU_WHITE, width: 275, borderStyle: "solid", borderColor: VU_GOLD, height: 45, borderWidth: 3, alignItems: 'center', justifyContent: 'center', margin: 15}}>
                    <Text>Enter Dining Hall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: VU_WHITE, width: 275, borderStyle: "solid", borderColor: VU_GOLD, height: 45, borderWidth: 3, alignItems: 'center', justifyContent: 'center', margin: 15}}>
                    <Text>Enter Dining Hall</Text>
                </TouchableOpacity> */}
            </SafeAreaView>
        </TouchableWithoutFeedback> 
        </ScrollView>
        </KeyboardAvoidingView>
    );
}
 


export default Complaints;