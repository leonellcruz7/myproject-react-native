import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function Home({ navigation }) {
  const isDrawerOpen = useDrawerStatus() === "open";

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button
        title="About"
        onPress={() =>
          navigation.navigate("About", {
            data: "testdata",
          })
        }
      />
    </View>
  );
}
