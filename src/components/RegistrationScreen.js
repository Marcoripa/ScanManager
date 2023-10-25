import React, { useState } from "react";
import {
  StyleSheet,
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
    quantity: 0,
    //Product Dimension
    dimension: "",
    //Product Description
    description: "",
  });
  const [screen, setScreen] = useState(0);

  function saveForm() {
    console.log("Saving data in archive")
    console.log(formData)
    fetch("http://localhost:3001/read_archive", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen === 1 ? (
        <CameraView />
      ) : (
        <>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.wrapper}>
                <View style={styles.form}>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#003f5c"
                    placeholder="NOME PRODOTTO"
                    keyboardType="string"
                    value={formData.name}
                    onChangeText={name => {
                      setFormData({ ...formData, name });
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#003f5c"
                    placeholder="QUANTITA'"
                    keyboardType="numeric"
                    value={formData.quantity}
                    onChangeText={quantity => {
                      setFormData({ ...formData, quantity });
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#003f5c"
                    placeholder="DIMENSIONI"
                    keyboardType="numeric"
                    value={formData.dimension}
                    onChangeText={dimension => {
                      setFormData({ ...formData, dimension });
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#003f5c"
                    placeholder="DESCRIZIONE"
                    keyboardType="string"
                    value={formData.description}
                    onChangeText={description => {
                      setFormData({ ...formData, description });
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button
              title="ACQUISISCI IMMAGINE"
              titleStyle={{ fontWeight: "200" }}
              onPress={() => setScreen(1)}
              buttonStyle={{
                backgroundColor: "#14213d",
                borderWidth: 0,
              }}
              containerStyle={{
                width: "45%",
                marginVertical: 10,
                marginRight: 1,
              }}
            />
            <Button
              title="REGISTRA SENZA IMMAGINE"
              titleStyle={{ fontWeight: "200" }}
              onPress={() => saveForm()}
              buttonStyle={{
                backgroundColor: "#fca311",
                borderWidth: 0,
              }}
              containerStyle={{
                width: "45%",
                marginVertical: 10,
                marginLeft: 1,
              }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#D3D3D3",
  },
  wrapper: {
    flex: 1,
  },
  form: {
    alignItems: "center",
    marginTop: 20,
  },
  textInput: {
    width: "80%",
    textAlign: "center",
    fontSize: 36,
    marginVertical: 50,
    borderBottomColor: "#000", // Add this to specify bottom border color
    borderBottomWidth: 2,
  },
  buttonContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
  },
});
