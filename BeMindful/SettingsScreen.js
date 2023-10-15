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

  const SettingsScreen = ({navigation}) =>  {

    const handleSignOut = () => {
        navigation.navigate('SignIn');
    };

    return(
        <View style ={styles.container}>
            <Text style={styles.profile}>
                Profile
            </Text>
            <Text style={styles.labels}>
                Name: Adil Shaik
            </Text>
            <Text style={styles.labels}>
                Email: adilshaik@gmail.com
            </Text>
            <Text style={styles.labels}>
                Number of Check-Ins: 23
            </Text>
            <Text style={styles.labels}>
                Number of Tasks Complete: 12
            </Text>

            <Button title="Sign Out" onPress={handleSignOut} />
                
            
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
        fontSize: 20
        
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
export default SettingsScreen;