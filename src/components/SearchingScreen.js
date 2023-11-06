import React from "react";
import { ScrollView } from "react-native";
import { ListItem} from "@rneui/themed";
import FoundItem from "./FoundItem";


export default function SearchingScreen({ route }) {
  const { foundDataList } = route.params;
  console.log(foundDataList)

  return (
    <ScrollView>
      {foundDataList.map((foundData, i) => (
        <ListItem key={i} bottomDivider>
          <FoundItem foundData={foundData}/>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
}

