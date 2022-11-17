import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import userProfileStyles from "./UserProfileStyles";

import BackButton from "../back-button/BackButton";

const UserProfile = ({ navigation }) => {
    const userName = "User Name";
    const userEmail = "user.name@vanderbilt.edu";

    const handleBackButtonPress = () => {
        navigation.goBack();
    }
    
    const handleLogout = () => {
        alert("You have been logged out.");
    }

    return (
        <SafeAreaView style={userProfileStyles.container}>
            <View style={userProfileStyles.header}>
                <BackButton onPress={handleBackButtonPress} />
                <TouchableOpacity style={userProfileStyles.logoutContainer} onPress={handleLogout}>
                    <Text style={userProfileStyles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Image style={userProfileStyles.userIcon} source={require("../../assets/images/gold-gradient-person.png")} />
            <Text style={userProfileStyles.userName}>{userName}</Text>
            <Text style={userProfileStyles.userEmail}>{userEmail}</Text>
            <ScrollView style={userProfileStyles.scrollView} contentContainerStyle={userProfileStyles.contentContainer}>
                <Text style={userProfileStyles.sectionHeader}>My Comments</Text>
                <View style={userProfileStyles.divider}/>
                {/* INSERT COMMENTS */}
                <Text style={userProfileStyles.sectionHeader}>My Complaints</Text>
                <View style={userProfileStyles.divider}/>
                {/* INSERT COMPLAINTS */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserProfile;