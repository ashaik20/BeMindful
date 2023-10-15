import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import axios from 'axios';

import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Column,
    FlatList,
    Pressable,
    Modal,
    TextInput,
  } from 'react-native';
import BottomTab from './BottomTab';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FCEFE4',
    },
    img: {
        textAlign: 'center',
    },
    qodtitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingTop: 40,
        fontSize: 40
    },

    qod: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#DD7373",
        marginHorizontal: 10,
        paddingHorizontal: 30,
        paddingBottom: 5,
        fontSize: 25
    },

    smr: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        paddingBottom: 15,
        fontSize: 12,
    },

    popup: {
      fontSize:30, 
      fontWeight:"bold",
      textAlign: 'center'
    },

    checkin: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F5f5dc',
        margin: 10,
        padding: 20,
        borderWidth: 5,
        borderColor: '#D34a4a',
        backgroundColor: "#DD7373",
        borderRadius: 5,
        fontSize: 25
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F5f5dc',
        margin: 10,
        padding: 20,
        borderWidth: 5,
        borderColor: '#D34a4a',
        backgroundColor: "#DD7373",
        borderRadius: 5,
        fontSize: 25
        
    },
    item: {
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#A86EBC',
        backgroundColor: '#C7A2D4',
        borderRadius: 5,
        fontSize: 15
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});




const HomeScreen = ({ navigation }) => {
  const {email} = window.email;
  const [modalVisible, handleModal] = useState(false);
  const [range, setRange] = useState(0);
  const [value, onChangetext] = useState('');
  const [value2, onChangetext2] = useState('');

  const data = {email: "Testing@testing.com", mood: range, q1: value, q2: value2 };

  const handleButtonPress = () => {
    handleSubmit();
    handleModal(false)
  };

  const handleSubmit = async () => {
    console.log(data);
    const resp = await axios.post("http://10.52.159.164:3000/data/daily", data)
      .then((response) => {
        // Handle the response here (e.g., success message or further processing).
        if (response.data === null) {
          console.log('Failure:', response.data);
        } else {
          console.log('Success:', response.data);
        }
      })
      .catch((error) => {
        // Handle errors here (e.g., display an error message).
        console.error('Error:', error.response.data);
        handleModal(true);
      });
    };

    return(
        <View style ={styles.container}>
          <Modal visible = {modalVisible} animationType = 'slide'>
                <View style={styles.container}>
                <Text style={styles.popup}>How are you Feeling Today?</Text>
                <Slider
                style={{width: 300, height: 50, padding: 20, margin: 10, alignSelf: 'center'}}
                onValueChange={(value) => setRange(value)}
                minimumValue={0}
                maximumValue={10}
                />
                <Text style={styles.popup}>{Math.floor(range)}</Text>
                <Text style={styles.popup}>What's on your mind?</Text>
                <TextInput
                editablemultiline
                numberOfLines={4}
                maxLength={100}
                onChangeText={text => onChangetext(text)}
                value={value}
                style={{fontSize: 15, textAlign: 'center', padding: 20}}
                borderRadius={5}
                borderWidth={5}
                borderColor={'#DD7373'}
                backgroundColor={'#FCEFE4'}
                padding={20}
                ></TextInput>
                <Text style={styles.popup}>What was your favorite part of today?</Text>
                <TextInput
                editablemultiline
                numberOfLines={4}
                maxLength={100}
                onChangeText={text => onChangetext2(text)}
                value={value2}
                style={{fontSize: 15, textAlign: 'center', padding: 20}}
                borderRadius={5}
                borderWidth={5}
                borderColor={'#DD7373'}
                backgroundColor={'#FCEFE4'}
                padding={20}
                >
                
                </TextInput>
                <View
                style={{borderWidth: 5, borderRadius: 5, backgroundColor: '#FCEFE4', color: 'blue', padding: 20}}>
                  <Button title = 'Submit' onPress={() => 
                    handleButtonPress()
                    }/>
                </View>
                
                </View>
            </Modal>
            <Text style={styles.qodtitle}>
                Question of the Day
            </Text>
            <Text style={styles.qod}>
                What's your favorite weather?
            </Text>
            <Text style={styles.smr}>
                See more answers
            </Text>
            <Pressable onPress={() => {handleModal(true);}}>
                <Text style={styles.checkin}>
                    Daily Check in
                </Text>
            </Pressable>
            <Text style={styles.title}>
                Tasks to complete today
            </Text>
            <FlatList
            data={[
              {key: 'Talk to at least one new person today!'},
              {key: 'Take the leap and join a club!'},
              {key: 'Take the initiative and be the leader for your group of friends!'},
              {key: 'Plan an outing for your friends!'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}

export default HomeScreen