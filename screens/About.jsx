import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation, route }) {
  const { name, age, sample } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{sample}</Text>
    </View>
  );
}
