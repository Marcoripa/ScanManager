import React, { useState } from "react";
import { View, StyleSheet, Pressable, TextInput, Text } from "react-native";
import {  Button } from "@rneui/themed";

export default function FoundItem({ foundData }) {
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [expanded, setExpanded] = useState(false);
  let [count, setCount] = useState(foundData.Quantity);

  function incrementCount() {
    count = parseInt(count) + 1;
    setCount(count);
    console.log(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  function updateItem(id_product, quantity) {
    console.log(`Updating item ${id_product} in archive to ${quantity} units`);
    setLoading(true);
    fetch("http://localhost:3001/update_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id_product: id_product,
        quantity: quantity,
      }),
    })
      .then(response => response.json())
      .then(() => {
        setLoading(false);
        setUpdated(true);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }

  return (
    <View>
      <View  style={styles.container}>
        <View>
          <Text>{foundData.Id_Product}</Text>
          <Text style={{ fontWeight: "bold" }}>
            {foundData.Name}
          </Text>
        </View>
        <View style={styles.container}>
          <Button title="+" type="outline" onPress={() => incrementCount()} />
          <TextInput
            style={styles.numberInput}
            placeholder={foundData.Quantity}
            value={count}
            onChange={e => setCount(e.target.value)}
            keyboardType="numeric"
          />
          <Button title="-" type="outline" onPress={() => decrementCount()} />
          {loading ? (
            <Button
              title="Solid"
              type="solid"
              style={{ marginLeft: 5 }}
              loading
            />
          ) : (
            <Button
              radius={"sm"}
              type="solid"
              style={{ marginLeft: 5 }}
              onPress={() => updateItem(foundData.Id_Product, count)}>
              Update
            </Button>
          )}
          {updated ? <h6>Updated</h6> : <></>}
        </View>
        <Pressable style={styles.accordionSwitch}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {expanded ? "-" : "+"}
        </Pressable>
      </View>
      <View style={[expanded ? styles.accordionOpen : styles.accordionClosed]}>
        CONTENT
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  numberInput: {
    width: 40,
    textAlign: "center",
  },
  accordionSwitch: {
fontSize: 24,
fontWeight: 700,
marginHorizontal: 10
  },
  accordionOpen: {
    display: "block",
  },
  accordionClosed: {
    display: "none",
  },
});
