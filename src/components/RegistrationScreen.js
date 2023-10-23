import React from 'react';
import {  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";



export default function RegistrationScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>REGISTRAZIONE</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
