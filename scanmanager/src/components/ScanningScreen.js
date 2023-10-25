import React from "react";
import { View } from "react-native";
import CameraView from "./CameraView";

export default function ScanningScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CameraView />
    </View>
  );
}
