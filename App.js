import React from "react";
import HomeScreen from "./src/components/HomeScreen";
import ScanningScreen from "./src/components/ScanningScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Scanning" component={ScanningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

