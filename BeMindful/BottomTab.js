/* import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FriendsScreen from './FriendsScreen';
import JourneyScreen from './JourneyScreen';
import MoodsScreen from './MoodsScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Journey" component={JourneyScreen} />
            <Tab.Screen name="Moods" component={MoodsScreen} />
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name="Friends" component={FriendsScreen} />
            <Tab.Screen name ="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default BottomTab

const styles = StyleSheet.create({})
*/