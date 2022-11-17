import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import userProfileStyles from "./UserProfileStyles";

import BackButton from "../back-button/BackButton";

const UserProfile = ({ navigation, route }) => {
    const [comments, setComments] = useState([]);

    const userName = "Me";
    const userEmail = route.params.email;

    const handleBackButtonPress = () => {
        navigation.goBack();
    }
    
    const handleLogout = () => {
        alert("You have been logged out.");
    }

    const fetchComments = (diningHallId) => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch(`https://sleepy-reaches-22563.herokuapp.com/api/getAll/diningComments/${diningHallId}`, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const err = (data && data.message) || response.status;
                return Promise.reject(err);
            }
            setComments(data);
            
            console.log("Successfully fetched comments.");
        }).catch(error => {
            console.error(error);
            alert("Comments failed to load. Please try again later.");
        });
    }

    // TODO: Fetch comments from backend

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