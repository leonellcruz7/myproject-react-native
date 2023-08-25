import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ route }) {
  const { data } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{data}</Text>
    </View>
  );
}
