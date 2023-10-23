import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* justifyContent: "center", */
    /* alignItems: "center", */
    /* paddingBottom: 20,
    paddingTop: 20, */
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    color: "white",
    backgroundColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginLeft: 20,
    textAlign: "center",
  },
});
