import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        email: email,
        password: password,
      };

    const handleSignIn = async () => {
        const resp = await axios.post("http://10.52.159.164:3000/users/login", data)
        .then((response) => {
            // Handle the response here (e.g., success message or further processing).
            if (response.data === null) {
                console.log("Invalid email or password");
            } else {
            console.log('Success:', response.data);
            }
          })
          .catch((error) => {
            // Handle errors here (e.g., display an error message).
            console.error('Error:', error);
          });
        };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Sign In" onPress={handleSignIn} />
            <Text>Don't have an account?</Text>
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default SignIn;
