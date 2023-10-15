import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FriendsScreen from './FriendsScreen';
import JourneyScreen from './JourneyScreen';
import MoodsScreen from './MoodsScreen';
window.email = '';


const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, route}) => {
    window.email = route.params;
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions ={({email}) => ({headerShown: false, tabBarLabelStyle: {color: 'black'}})}>
            <Tab.Screen name="Journey" component={JourneyScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="map-outline" size = {25} color="#DD7373"/> )}}/>
            <Tab.Screen name="Moods" component={MoodsScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="emoticon-happy-outline" size = {25} color="#DD7373"/> )}}/>
            <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ({email}) => (<MaterialCommunityIcons name="home-outline" size = {25} color="#DD7373"/> )}}/>
            <Tab.Screen name="Friends" component={FriendsScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="account-group-outline" size = {25} color="#DD7373"/> )}}/>
            <Tab.Screen name ="Settings" component={SettingsScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="account-settings-outline" size = {25} color="#DD7373"/> )}}/>
        </Tab.Navigator>
    );
}

export default BottomTab

const styles = StyleSheet.create({})