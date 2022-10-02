import { StatusBar, View, Text, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { THEME_STYLES, VU_GOLD, VU_WHITE } from '../../constants';
import { useState } from 'react';

const Complaints = () => {

    const [contact, setContact] = useState(null);
    const [issue, setIssue] = useState(null);

    console.log(contact);

    return (
        <SafeAreaView style={complaintStyles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={complaintStyles.infoContainer}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>File a Complaint</Text>
                </View>
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
                style={complaintStyles.input}
                onChangeText={setContact}
                placeholder="Enter contact"
                placeholderTextColor='gray'
                multiline={true}
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
                style={complaintStyles.input}
                onChangeText={setIssue}
                placeholder="Enter description of issue..."
                placeholderTextColor='gray'
                multiline={true}
                />
            </View>

        </SafeAreaView>
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
    input: {
        ...THEME_STYLES.whiteBackground,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingTop: 10
    },
});
 


export default Complaints;