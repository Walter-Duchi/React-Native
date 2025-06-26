import * as React from "react";
import { ScrollView, Text, StyleSheet, TextInput } from "react-native";

export default function WelcomeScreen() {
  const [firstName, OnChangeFirstName] = React.useState("");

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        The Little Lemon is a charming neighborhood bistro that serves simple
        food and classic cocktails in a lively but casual environment. We would
        love to hear more about your experience with us!
      </Text>
      <TextInput
        value={firstName}
        onChangeText={OnChangeFirstName}
        style={styles.entrada}
        placeholder="First Name"
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  entrada: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
