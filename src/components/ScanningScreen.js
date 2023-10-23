import React from 'react';
import {  StyleSheet,
  View,
  Text,
} from "react-native";
import CameraView from "./CameraView";



export default function ScanningScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>LETTURA BARCODE</Text>
      <CameraView />
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
