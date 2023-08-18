import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainLandingScreen from "../pages/Home";
import LoginScreen from "../App";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen name="MainLandingScreen" component={MainLandingScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
    }