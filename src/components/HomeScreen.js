import React, { useState } from "react";import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { Switch } from "react-native-switch";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function searchItems(valueToSearch) {
    let param = "";
    let route = "";
    if (isEnabled) {
      param = "id_product";
      route = "Reading";
    } else {
      param = "name";
      route = "Searching";
    }
    let url = `http://127.0.0.1:3001/read_item?${param}=${valueToSearch}`;
    console.log("Searching for data in archive");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(response => response.json())
      .then(data =>
        navigation.navigate(route, {
          foundDataList: data,
        })
      )
      .catch(error => console.error(error));
  }

  return (
    <View style={styles.root}>
      <View>
        <Button
          title="REGISTER A NEW PRODUCT"
          titleStyle={{ fontWeight: "200" }}
          onPress={() => navigation.navigate("Registration")}
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.toggleContainer}>
          {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            disabled={false}
            activeText={"ID"}
            inActiveText={""}
            backgroundActive={"#003566"}
            backgroundInactive={"#a7c957"}
            circleActiveColor={"#001d3d"}
            circleInActiveColor={"#6a994e"}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          onCancel={() => console.log(onCancel())}
          onSubmitEditing={() => searchItems(value)}
          value={value}
          placeholder="SEARCH FOR A PRODUCT"
          keyboardType="string"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "lightgray",
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 20,
    fontSize: 16,
  },
});
