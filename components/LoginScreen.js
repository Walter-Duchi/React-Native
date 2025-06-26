import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        placeholder="Email Adress"
        style={styles.textInput}
        value={email}
        onChange={onChangeEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      ></TextInput>

      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChange={onChangePassword}
        autoCapitalize="none"
        keyboardType="password"
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 20,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
