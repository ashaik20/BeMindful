// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab"
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions ={() => ({headerShown: false})}>
        <Stack.Screen name="SignUp" component={SignUp}  />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

