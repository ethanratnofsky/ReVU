import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import userProfileStyles from "./UserProfileStyles";
import commentsStyles from "../dining-hall/CommentsStyles";

import BackButton from "../back-button/BackButton";

import { auth } from "../../firebase";

import { DINING_HALLS } from "../../constants";

const Comment = ({ content, timestamp }) => {
    const author = "Me";
    const time = new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <View style={commentsStyles.commentContainer}>
            <View style={commentsStyles.commentHeader}>
                <Text style={commentsStyles.commentAuthor}>{author}</Text>
                <Text style={commentsStyles.commentTime}>{time}</Text>
            </View>
            <Text style={commentsStyles.commentContent}>{content}</Text>
        </View>
    );
};

const Complaint = ({ diningHall, contact, content, urgency, timestamp }) => {
    const time = new Date(timestamp).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <View style={commentsStyles.commentContainer}>
            <View style={commentsStyles.commentHeader}>
                <Text style={userProfileStyles.itemTitle}>{diningHall}</Text>
                <Text style={commentsStyles.commentTime}>{time}</Text>
            </View>
            <View style={commentsStyles.commentHeader}>
                <Text style={userProfileStyles.itemSubtitle}>Contact: {contact}</Text>
                <Text style={userProfileStyles.itemLevel}>Level {urgency}</Text>
            </View>
            <Text style={userProfileStyles.itemContent}>{content}</Text>
        </View>
    );
};

const UserProfile = ({ navigation, route }) => {
    const [comments, setComments] = useState([]);
    const [complaints, setComplaints] = useState([]);

    const userName = "Me";
    const { id, email } = route.params;

    // Back button navigation
    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    // Logout
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log("Logging out");
                navigation.navigate("Login", { gestureEnabled: false });
            })
            .catch((error) => alert(error.message));
    };

    // On initial render...
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };

        fetch(
            `https://sleepy-reaches-22563.herokuapp.com/api/get/commentsById/${id}`,
            requestOptions
        )
            .then(async (response) => {
                const isJson = response.headers.get("content-type")?.includes("application/json");
                const data = isJson && (await response.json());

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(err);
                }
                setComments(data);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to load user comments.");
            });

        fetch(
            `https://sleepy-reaches-22563.herokuapp.com/api/get/complaintsById/${id}`,
            requestOptions
        )
            .then(async (response) => {
                const isJson = response.headers.get("content-type")?.includes("application/json");
                const data = isJson && (await response.json());

                if (!response.ok) {
                    const err = (data && data.message) || response.status;
                    return Promise.reject(err);
                }
                setComplaints(data);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to load user complaints.");
            });
    }, []);

    return (
        <SafeAreaView style={userProfileStyles.container}>
            <View style={userProfileStyles.header}>
                <BackButton onPress={handleBackButtonPress} />
                <TouchableOpacity style={userProfileStyles.logoutContainer} onPress={handleLogout}>
                    <Text style={userProfileStyles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={userProfileStyles.userIcon}
                source={require("../../assets/images/gold-gradient-person.png")}
            />
            <Text style={userProfileStyles.userName}>{userName}</Text>
            <Text style={userProfileStyles.userEmail}>{email}</Text>
            <ScrollView
                style={userProfileStyles.scrollView}
                contentContainerStyle={userProfileStyles.contentContainer}
            >
                <Text style={userProfileStyles.sectionHeader}>My Comments • {comments.length}</Text>
                <View style={userProfileStyles.divider} />
                {DINING_HALLS.map((diningHall, index) => {
                    const diningHallComments = comments.filter(
                        (comment) => comment.diningHallId === diningHall.id
                    );

                    return (
                        <View style={userProfileStyles.itemsContainer} key={index}>
                            <Text style={userProfileStyles.diningHallName}>
                                {diningHall.name} ({diningHallComments.length})
                            </Text>
                            <View>
                                {diningHallComments.map((comment, index) => (
                                    <Comment {...comment} key={index} />
                                ))}
                            </View>
                        </View>
                    );
                })}
                <Text style={userProfileStyles.sectionHeader}>
                    My Complaints • {complaints.length}
                </Text>
                <View style={userProfileStyles.divider} />
                <View style={userProfileStyles.itemsContainer}>
                    {complaints.map((complaint, index) => (
                        <Complaint {...complaint} key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserProfile;
