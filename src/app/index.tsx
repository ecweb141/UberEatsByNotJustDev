import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your App</Text>
      <Pressable style={styles.button}>
        <Link href={"/(auth)/sign-up"} style={styles.link}>
          Go to Login
        </Link>
      </Pressable>
      <Pressable style={styles.button}>
        <Link href={"/(auth)/sign-up"} style={styles.link}>
          Go to Signup
        </Link>
      </Pressable>
      <Pressable style={styles.button}>
        <Link href={"/(user)/"} style={styles.link}>
          Go to Dashboard
        </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  link: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default HomeScreen;
