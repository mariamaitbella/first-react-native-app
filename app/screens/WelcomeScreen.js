import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.text}>Sell what you don't need!!</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.register}>Register</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#454B1B",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
  },
  login: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  register: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default WelcomeScreen;
