import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import { auth } from './firebase';
import loginStyles from './LoginStyles';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    // const navigation = useNavigation();

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigate
    //         }
    //     })
    // }, [])


    const handleSignUp = () => {
        // if (!(/@vanderbilt.edu\s*$/).test(email)) {
        //     alert("Email is not a valid Vanderbilt University email.");
        // } else {
        //     auth.createUserWithEmailAndPassword(email, pswd).then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log("Registering");
        //         console.log(user.uid);
        //         navigation.navigate("Terms and Conditions", {id: user.uid});
        //     }).catch(error => alert(error.message));
        // }
    }

    const handleLogin = () => {
        // auth.signInWithEmailAndPassword(email, pswd).then(userCredentials => {
        //     const user = userCredentials.user;
        //     console.log("Logging in");
        //     console.log(user.uid);
        //     navigation.navigate('Home', {id: user.uid});
        // }).catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView style={loginStyles.container} behavior="padding">
            <Image style={loginStyles.logo} source={require('../../assets/images/revu-logo.png')} />
            <View style={loginStyles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    // value={ }
                    onChangeText={text => setEmail(text)}
                    style={loginStyles.input}
                />
                <TextInput
                    placeholder='Password'
                    // value={ }
                    onChangeText={text => setPswd(text)}
                    style={loginStyles.input}
                    secureTextEntry
                />
            </View>

            <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={loginStyles.button}
                >
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[loginStyles.button, loginStyles.buttonOutline]}
                >
                    <Text style={loginStyles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;