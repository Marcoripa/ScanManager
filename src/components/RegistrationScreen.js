import React, { useState } from "react";import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput,
} from "react-native";

import CameraView from "./CameraView";
import { Button } from "@rneui/themed";

export default function RegistrationScreen() {
  const [formData, setFormData] = useState({
    //Product Name
    name: "",

    //Product Quantity
    age: "age",
    designation: "",
    company: "",
  });
  const [screen, setScreen] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            {screen === 1 ? (
              <CameraView />
            ) : (
              <View style={styles.form}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#003f5c"
                  placeholder="Quantità"
                  keyboardType="numeric"
                  value={formData.quantity}
                  onChangeText={quantity => {
                    setFormData({ ...formData, quantity });
                  }}
                />
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#003f5c"
                  placeholder="Nome prodotto"
                  value={formData.name}
                  onChangeText={name => {
                    setFormData({ ...formData, name });
                  }}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    title="ACQUISISCI IMMAGINE"
                    titleStyle={{ fontWeight: "200" }}
                    onPress={() => setScreen(1)}
                    buttonStyle={{
                      backgroundColor: "rgba(199, 43, 98, 1)",
                      borderColor: "transparent",
                      borderWidth: 0,
                    }}
                    containerStyle={{
                      width: 300,
                      marginVertical: 10,
                    }}
                  />
                  <Button
                    title="INVIA SENZA IMMAGINE"
                    titleStyle={{ fontWeight: "200" }}
                    onPress={() => navigation.navigate("Scanning")}
                    buttonStyle={{
                      backgroundColor: "rgba(199, 43, 98, 1)",
                      borderColor: "transparent",
                      borderWidth: 0,
                    }}
                    containerStyle={{
                      width: 300,
                      marginVertical: 10,
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
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
});
