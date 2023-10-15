import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text} from 'react-native';
import axios from 'axios';
const logo = require('./BeMindful.png');
const SignUp = ({navigation}) => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const data = {
        name: name,
        email: email,
        password: password,
      };
    
    const handleSignUp = async () => {
        // Create a user object with the data to be sent to the server
        const resp = await axios.post("http://10.52.159.164:3000/users/new", data)
        .then((response) => {
            // Handle the response here (e.g., success message or further processing).
            console.log('Success:', response.data);
          })
          .catch((error) => {
            // Handle errors here (e.g., display an error message).
            console.error('Error:', error.response.data);
          });
        };

    const handleSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.container}>  

            <Image 
                style = {styles.image}
                source = {logo} />
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
            <Button title="Create Account" onPress={handleSignUp} />

            <Text style = {styles.text}>Finished creating an account?</Text>
            <Button title="Return" onPress={handleSignIn} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: '10.5%',
        marginLeft: '10%',
        marginTop:'5%',
        marginBottom: '5%',
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        borderColor: '#000000',
        backgroundColor: '#DD7373',
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        textColor:'#000000',
        fontWeight: 'bold',
    },

    container: {
        flex:1,
        backgroundColor: '#FCEFE4',
    },

    text: {
        marginTop: '5%',
        marginBottom:'2.5%',
        textColor:'#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    image: {
        marginTop:'5%',
        
        marginLeft:'30%',
        marginRight:'25%',
        width:'40%',
        height:'25%',
        justifyContent: "center",
        alignItems: "center",
    }
});

export default SignUp;
