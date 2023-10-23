import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const updateSearch = search => {
    setSearch(search);
  };
  return (
    <View style={styles.root}>
      <View>
        <Button
          title="REGISTRA UN NUOVO PRODOTTO"
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
      <View>
        <Button
          title="LEGGI UN PRODOTTO ESISTENTE"
          titleStyle={{ fontWeight: "200" }}
          onPress={() => navigation.navigate("Scanning")}
          buttonStyle={{
            backgroundColor: "rgba(199, 43, 98, 1)",
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
      <View>
        <SearchBar
          platform="default"
          containerStyle={{
            backgroundColor: "rgb(200,200,200)",
            borderWidth: 0,
            borderRadius: 30,
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          inputContainerStyle={{
            backgroundColor: "rgb(200,200,200)",
          }}
          inputStyle={{
          }}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="CERCA UN PRODOTTO"
          placeholderTextColor="black"
          onCancel={() => console.log(onCancel())}
          value={value}
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
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  searchbar: {
    backgroundColor: "rgba(199, 43, 98, 1)",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
  },
});