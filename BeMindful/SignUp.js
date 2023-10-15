import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Create a user object with the data to be sent to the server
        const user = {
            name: name,
            email: email,
            password: password,
        };
    
        // Make a POST request to the server
        fetch('http://143.215.96.229:3000/users/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (response.status === 201) {
                // Handle a successful signup (HTTP status 201 Created)
                console.log('User successfully signed up');
                // You can redirect to a new screen or perform other actions here
            } else {
                // Handle an error or validation failure
                console.error('Failed to sign up');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
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

export default SignUp;
