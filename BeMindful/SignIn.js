import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const logo = require('./BeMindful.png');

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, handleModal] = useState(false);

    const data = {
        email: email,
        password: password,
      };

    const handleSignIn = async () => {
        const resp = await axios.post("http://10.52.159.164:3000/users/login", data)
        .then((response) => {
            // Handle the response here (e.g., success message or further processing).
            if (response.data === null) {
                handleModal(true);
            } else {
            console.log('Success:', response.data);
            }
          })
          .catch((error) => {
            // Handle errors here (e.g., display an error message).
            console.error('Error:', error);
            handleModal(true);
          });
        };
    
  
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View 
        style={styles.container}>
              <Modal visible = {modalVisible} animationType = 'slide'>
                <View style={styles.container}>
                <Text style = {styles.text}>Please retry</Text>
                <MaterialCommunityIcons name = 'add' size = {24} onPress={() => handleModal(false)}/>
                </View>
            </Modal>

            
            <Image 
                style = {styles.image}
                source = {logo} 
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
            <Button title="Sign In" onPress={handleSignIn} />
            <Text style = {styles.text}>Don't have an account?</Text>
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: '12.5%',
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
        fontWeight: 'bold',
    },

    container: {
        flex:1,
        backgroundColor: '#FCEFE4',
    },

    text: {
        marginTop: '10%',
        marginBottom:'5%',
        textColor:'#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
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

export default SignIn;
