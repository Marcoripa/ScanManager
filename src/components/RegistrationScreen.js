import React, { useState } from "react";import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput,
  Text,
  Modal,
  Pressable,
} from "react-native";
import CameraView from "./CameraView";
import { Button } from "@rneui/themed";

export default function RegistrationScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    //Product Name
    name: "",
    //Product Quantity
    quantity: 0,
    //Product Dimension
    dimension: "",
    //Product Description
    description: "",
    //Product Photo
    //photo: "",
  });
  const [screen, setScreen] = useState(0);

  function saveForm() {
    console.log("Saving data in archive");
    fetch("http://localhost:3001/save_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: formData.name,
        quantity: formData.quantity,
        dimension: formData.dimension,
        description: formData.description,
        photo: "",
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setModalVisible(true)
      })
      .catch(error => console.error(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Item saved!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.navigate("Home")}>
              <Text style={styles.textStyle}>Return to Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {screen === 1 ? (
        <CameraView formData={formData} />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
