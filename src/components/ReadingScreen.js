import React from "react";
import { ScrollView } from "react-native";
import { ListItem} from "@rneui/themed";
import FoundItem from "./FoundItem";


export default function ReadingScreen({ route }) {
  const { foundDataList } = route.params;
  console.log(foundDataList)

  return (
    <ScrollView>
        <ListItem>
          <FoundItem foundData={foundDataList}/>
          <ListItem.Chevron />
        </ListItem>
    </ScrollView>
  );
}

