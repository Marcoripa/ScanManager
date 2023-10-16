import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import ProductName from "./ProductName";
import PersonalDetails from "./PersonalDetails";
import CameraView from "./CameraView";

export default function Form() {
  const [formData, setFormData] = useState({
    //Product Name
    name: "",
    
    //Product Quantity
    age: "age",
    designation: "",
    company: "",
  });
  const [screen, setScreen] = useState(0);
  const FormTitle = ["Nome Prodotto", "Quantità"];
  const ScreenDisplay = () => {
    if (screen === 0) {
      return <ProductName formData={formData} setFormData={setFormData}/>;
    } else if (screen === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData}/>;
    } else if (screen === 2) {
      return <CameraView />;
    }
  };
  return (
    <View style={styles.wrapper}>
      <Text>{FormTitle[screen]}</Text>
      <View>{ScreenDisplay()}</View>
      <View style={styles.buttonContainer}>
        <Pressable
          disabled={screen === 0}
          onPress={() => setScreen(currScreen => currScreen - 1)}>
          <Text style={styles.button}>Prev</Text>
        </Pressable>
        <Pressable
          disabled={screen === 2}
          onPress={() => setScreen(currScreen => currScreen + 1)}>
          <Text style={styles.button}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
