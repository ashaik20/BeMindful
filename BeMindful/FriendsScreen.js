import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Column,
    FlatList,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

export default function FriendsScreen() {
    return(
        <View style ={styles.container}>
            <Text style={styles.item}>
                <Icon name="plus" size={20} color="black" /> Add Friends
            </Text>
            <Text style={styles.labels}>
                <Text style={styles.qod}> Adam:
                </Text>   "A nap is on my mind!"  {"                                     "}   
                <Icon name="trash" size={15} color="black" />
            </Text>
            <Text style={styles.labels}>
                <Text style={styles.qod}> Bob:
                </Text>   "Finishing my painting is my goal!"  {"                 "}  
                <Icon name="trash" size={15} color="black" /> 
            </Text>
            <Text style={styles.labels}>
            <Text style={styles.qod}> Carly:
                </Text>   {"Dinner is my favorite part of today!"}  {"              "}              
                <Icon name="trash" size={15} color="black" />
            </Text>
            <Text style={styles.item}>
                <Icon name="comments" size={20} color="black" /> See More Responses
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FCEFE4',
    },
    profile: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingTop: 40,
        fontSize: 40
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
        color: "black",
        fontSize: 16
    },

    smr: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C7A2D4',
        paddingBottom: 15,
        fontSize: 12,
    },

    labels: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#F5f5dc',
        margin: 10,
        padding: 2,
        borderWidth: 2,
        borderColor: '#D34a4a',
        backgroundColor: "#DD7373",
        borderRadius: 5,
        fontSize: 15
        
    },
    item: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderWidth: 5,
        borderColor: '#A86EBC',
        backgroundColor: '#C7A2D4',
        borderRadius: 5,
        fontSize: 20
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