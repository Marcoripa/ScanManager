import React from "react";
import TestScreen from "./src/components/TestPage";
import HomeScreen from "./src/components/HomeScreen";
import ScanningScreen from "./src/components/ScanningScreen";
import ReadingScreen from "./src/components/ReadingScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import SearchingScreen from "./src/components/SearchingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={TestScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Scanning" component={ScanningScreen} />
        <Stack.Screen name="Reading" component={ReadingScreen} />
        <Stack.Screen name="Searching" component={SearchingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

