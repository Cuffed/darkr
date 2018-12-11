import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image } from "react-native";

export default class Untitled1 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/Asset_110.png")}
          style={styles.image}
          resizeMode="repeat"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    bottom: 0,
    right: 0,
    opacity: 1
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }
});
