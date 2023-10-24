import React, { useState } from "react";
import {
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
import { Input } from "@rneui/themed";

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
                  placeholder="NOME PRODOTTO"
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
                  value={formData.description}
                  onChangeText={description => {
                    setFormData({ ...formData, description });
                  }}
                />
              </View>
            )}
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
            width: "50%",
            marginVertical: 10,
            marginRight: 1,
          }}
        />
        <Button
          title="REGISTRA SENZA IMMAGINE"
          titleStyle={{ fontWeight: "200" }}
          onPress={() => navigation.navigate("Scanning")}
          buttonStyle={{
            backgroundColor: "#fca311",
            borderWidth: 0,
          }}
          containerStyle={{
            width: "50%",
            marginVertical: 10,
            marginLeft: 1,
          }}
        />
      </View>
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
    fontSize: 32,
    marginVertical: 30,
    borderBottomColor: "#000", // Add this to specify bottom border color
    borderBottomWidth: 2,
  },
  buttonContainer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    display: "flex",
  },
});
