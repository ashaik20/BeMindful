import React, {useState} from 'react';
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
  } from 'react-native';

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



export default function HomeScreen() {
    return(
        <View style ={styles.container}>
            <Text style={styles.img}>
                IMAGE GOES HERE
            </Text>
            <Text style={styles.qodtitle}>
                Question of the Day
            </Text>
            <Text style={styles.qod}>
                What's your favorite weather?
            </Text>
            <Text style={styles.smr}>
                See more answers
            </Text>
            <Pressable onPress={null}>
                <Text style={styles.checkin}>
                    Daily Check in
                </Text>
            </Pressable>
            <Text style={styles.title}>
                Tasks to complete today
            </Text>
            <FlatList
            data={[
            {key: 'Task 1'},
            {key: 'Task 2'},
            {key: 'Task 3'},
            {key: 'Task 4'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}