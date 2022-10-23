import { View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { THEME_STYLES, VU_BLACK, VU_GOLD, VU_METALLIC_GOLD_START, VU_WHITE } from '../../constants';
import { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';


const Filter = require('bad-words');

const DINING_HALLS = [
    {
        id: 0,
        name: 'Rand Dining Hall'
    },
    {
        id: 1,
        name: 'Kissam Dining Hall'
    },
    {
        id: 2,
        name: 'Rothschild Dining Hall'
    },
    {
        id: 3,
        name: 'E. B. I. Dining Hall'
    },
    {
        id: 4,
        name: 'Zeppos Dining Hall'
    },
    {
        id: 5,
        name: 'Commons Dining Hall'
    }
]

const URGENCIES = [
    {
        id: 0,
        name: '0'
    },
    {
        id: 1,
        name: '1'
    },
    {
        id: 2,
        name: '2'
    },
    {
        id: 3,
        name: '3'
    },
    {
        id: 4,
        name: '4'
    },
    {
        id: 5,
        name: '5'
    }
]

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
        } else if (!(/\S+@\S+\.\S+/.test(email))) {
            alert("Email does not have proper format. Please re-enter email address.");
        } else if (filter.isProfane(issue)) {
            alert("You're issue has inappropriate language. Please re-enter your issue input.");
        } else if (filter.isProfane(email)) {
            alert("Your email has inappropriate language. Please re-enter your email.");
        }
        else {
            alert("You submitted a proper complaint.")
        }
    }



    const infoString = "Here, you may file a complaint about a dining issue to VSG. However, please make sure your response is appropriate as improper complaints will be filtered out and rejected. Please also provide required contact information (i.e. Vanderbilt EDU email)."

    return (
        <KeyboardAvoidingView
                keyboardVerticalOffset={height - 300}
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1, backgroundColor: VU_BLACK }}
            >
            <SafeAreaView style={{flex:1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={complaintStyles.inner}>

                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>

                            <TouchableOpacity style={complaintStyles.buttonStyle} onPress={() => navigation.navigate("Main")}><Text style={{fontSize: 25, color: VU_WHITE, fontWeight: 'bold'}}>{"\u2190"}</Text></TouchableOpacity>
                            <View style={complaintStyles.infoContainer}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>File a Complaint</Text>
                            </View>
                            <TouchableOpacity style={complaintStyles.buttonStyle} onPress={() => alert(infoString)}><Text style={{fontSize: 25, color: VU_WHITE, fontWeight: 'bold'}}>!</Text></TouchableOpacity>
                        </View>

                        <View style={{marginTop: 20}}>
                            <SearchableDropdown
                                multi={false}
                                resetValue={false}
                                chip={true}
                                items={DINING_HALLS}
                                selectedItems={diningHall}
                                onItemSelect={(item) => {setDH(item)}}
                                itemStyle={complaintStyles.itemStyles}
                                itemTextStyle={{ color: VU_BLACK }}
                                containerStlye={{padding: 5}}
                                textInputProps={{
                                    placeholder: "Select Dining Hall...",
                                    placeholderTextColor: 'gray',
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: VU_GOLD,
                                        borderRadius: 5,
                                        backgroundColor: VU_WHITE,
                                        
                                    }
                                }}
                            />
                        </View>

                        <View style={{marginTop: 20}}>
                            <SearchableDropdown
                                multi={false}
                                resetValue={false}
                                chip={true}
                                items={URGENCIES}
                                selectedItems={urgency}
                                onItemSelect={(item) => {setUrgency(item);}}
                                itemStyle={complaintStyles.itemStyles}
                                itemTextStyle={{ color: VU_BLACK }}
                                containerStlye={{padding: 5}}
                                textInputProps={{
                                    placeholder: "Select urgency...",
                                    placeholderTextColor: 'gray',
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: VU_GOLD,
                                        borderRadius: 5,
                                        backgroundColor: VU_WHITE
                                    }
                                }}
                            />

                        </View>
                        
                        <TextInput
                            style={complaintStyles.emailInput}
                            onChangeText={setContact}
                            placeholder="Enter contact"
                            placeholderTextColor='gray'
                            multiline={false}
                            scrollEnabled={true}
                            />

                        <TextInput
                            style={complaintStyles.issueInput}
                            onChangeText={setIssue}
                            placeholder="Enter description of issue..."
                            placeholderTextColor='gray'
                            multiline={true}
                            />
                        <View style={{ flex : 1 }} />

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity 
                            style={complaintStyles.submitButtonContainer}
                            onPress={checkInput}
                            >
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: VU_WHITE}}>Submit Complaint</Text>
                        </TouchableOpacity>
                    </View>
                    </View>


                    
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}


const complaintStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
    },
    infoContainer: {
        ...THEME_STYLES.whiteBackground,
        width: 220,
        height: 55,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 12,
    },
    emailInput: {
        ...THEME_STYLES.whiteBackground,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        paddingTop: 10
    },
    issueInput: {
        ...THEME_STYLES.whiteBackground,
        height: 175,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        paddingTop: 10,
    },
    itemStyles: {
        padding: 10,
        marginTop: 2,
        backgroundColor: VU_WHITE,
        borderColor: VU_GOLD,
        borderWidth: 1,
        borderRadius: 5
    },
    dropDownContainer: {
        padding: 15,
        justifyContent: 'space-between'
    },
    submitButtonContainer: {
        ...THEME_STYLES.goldBackground,
        width: 300,
        height: 60,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: VU_GOLD,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonStyle: {
        backgroundColor: VU_GOLD,
        width: 50,
        height: 55,
        padding: 15,
        margin: 12,
        borderRadius: 10, 
        borderColor: VU_WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 


export default Complaints;