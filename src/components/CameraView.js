import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";

export default function CameraView({ formData }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [displayCameraView, setDisplayCameraView] = useState(false);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  /* useEffect(() => {
      (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === "granted");
      })();
    }, []); */

  const getPermissions = async () => {
    MediaLibrary.requestPermissionsAsync();
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === "granted");
  };

  const displayCamera = async () => {
    try {
      const permission = await getPermissions();
      setDisplayCameraView(true);
    } catch (e) {
      console.error(e);
    }
  };

  function saveForm() {
    console.log("Saving data with image in archive");
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
        photo: image,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        saveForm();
        setModalVisible(true);
        setImage(null);
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
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

      {!image ? (
        displayCameraView ? (
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingTop: 20,
              }}>
              <Button
                icon={"retweet"}
                onPress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              />
              <Button
                icon={"flash"}
                color={
                  flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
                }
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              />
            </View>
          </Camera>
        ) : (
          <View>
            <Text>DASHBOARD</Text>
          </View>
        )
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}>
            <Button
              title={"Re-take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <Button title={"Salva"} icon="check" onPress={saveImage} />
          </View>
        ) : displayCameraView ? (
          <Button
            title={"Take a picture"}
            icon="camera"
            onPress={takePicture}
          />
        ) : (
          <Button
            title={"Display Camera"}
            icon="camera"
            onPress={displayCamera}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
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
