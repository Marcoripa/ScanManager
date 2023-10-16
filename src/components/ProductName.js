import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useState} from "react";

export default function ProductName({formData, setFormData}) {
    return (
        <View style={styles.inputView}>
            <TextInput 
              style={styles.textInput}
                placeholderTextColor="#003f5c"
                placeholder='Nome prodotto'
                value={formData.name}
                onChangeText={(name) => {setFormData({... formData, name})}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "#ffc0cb",
      borderRadius: 30,
      width: 170,
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center"
    },
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      textAlign: "center"
    }
    
  });