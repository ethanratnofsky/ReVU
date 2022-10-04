import { StatusBar, View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { THEME_STYLES, VU_BLACK, VU_GOLD, VU_WHITE } from '../../constants';
import { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

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

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <SafeAreaView style={complaintStyles.container}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={complaintStyles.infoContainer}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>File a Complaint</Text>
                    </View>
                </View>

                <View style={complaintStyles.dropDownContainer}>
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

                <View style={complaintStyles.dropDownContainer}>
                    
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



                <View>
                    <Text style={{
                        color: VU_WHITE,
                        fontWeight: 'bold',
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        Contact Information
                    </Text>
                    <TextInput
                    style={complaintStyles.emailInput}
                    onChangeText={setContact}
                    placeholder="Enter contact"
                    placeholderTextColor='gray'
                    multiline={true}
                    scrollEnabled={true}
                    />
                </View>


                <View>
                <Text style={{
                        color: VU_WHITE,
                        fontWeight: 'bold',
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        Issue Description
                    </Text>
                    <TextInput
                    style={complaintStyles.issueInput}
                    onChangeText={setIssue}
                    placeholder="Enter description of issue..."
                    placeholderTextColor='gray'
                    multiline={true}
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TouchableOpacity 
                        style={complaintStyles.submitButtonContainer}
                        onPress={() => alert("Complaint successfully submitted!")}
                        >
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: VU_WHITE}}>Submit Complaint</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}


const complaintStyles = StyleSheet.create({
    container: {
        ...THEME_STYLES.blackBackground,
        height: '100%',
    },
    infoContainer: {
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
    emailInput: {
        ...THEME_STYLES.whiteBackground,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingTop: 10
    },
    issueInput: {
        ...THEME_STYLES.whiteBackground,
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingTop: 10
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
        padding: 15,
        margin: 10,
    },
});
 


export default Complaints;