import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>

      <Button
        title="ReviewDetails"
        onPress={() => navigation.navigate("ReviewDetails")}
      />
    </View>
  );
}
