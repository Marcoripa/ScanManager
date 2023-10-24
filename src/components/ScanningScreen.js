import React from 'react';
import {  StyleSheet,
  View,
  Text,
} from "react-native";
import CameraView from "./CameraView";



export default function ScanningScreen() {
  return (
    <View style={{flex: 1}}>
      <CameraView />
    </View>
  );
}


