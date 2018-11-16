import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, StatusBar, Image } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          hidden={true}
          backgroundColor="rgba(0,0,0,1)"
        />
        <View style={styles.rect} />
        <Center>
          <Image
            source={require("../assets/Glitch-Logo.png")}
            style={styles.image}
          />
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  rect: {
    height: 721,
    width: 360,
    top: 0,
    left: -0.5,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  image: {
    height: 289,
    width: 289,
    position: "absolute"
  }
});
