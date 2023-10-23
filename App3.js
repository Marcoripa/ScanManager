import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Form from "./src/components/Form";
import ProductName from "./src/components/ProductName";
import PersonalDetails from "./src/components/PersonalDetails";
import CameraView from "./src/components/CameraView";

export default function App() {
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
      return <ProductName formData={formData} setFormData={setFormData} />;
    } else if (screen === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } 
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRA IL TUO PRODOTTO</Text>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{FormTitle[screen]}</Text>
        {screen === 2 ? (
          <CameraView />
        ) : (
          <View style={styles.form}>
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
        )}
      </View>
    </View>
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
