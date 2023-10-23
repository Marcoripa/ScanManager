import React from 'react';
import {  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";



export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="REGISTRA UN NUOVO PRODOTTO"
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="LEGGI UN PRODOTTO ESISTENTE"
          color="#f194ff"
          onPress={() => navigation.navigate('Scanning')}
        />
      </View>
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
