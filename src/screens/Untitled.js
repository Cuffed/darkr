import React, { Component } from "react";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          style={styles.image}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Center horizontal>
          <Image
            style={styles.image2}
            source={require("../assets/vector-couple-sm.png")}
          />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>DARKR</Text>
        </Center>
        <Center horizontal>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Sign up with a Phone Number</Text>
          </View>
        </Center>
        <View style={styles.rect3}>
          <Text style={styles.text3}>Terms of Service</Text>
          <Text style={styles.text4}>Privacy Policy</Text>
        </View>
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
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image: {
    top: "0%",
    left: "0%",
    width: 375,
    height: 812,
    position: "absolute",
    opacity: 0.15
  },
  image2: {
    top: 105.97,
    width: 300,
    height: 300,
    position: "absolute"
  },
  text: {
    top: 386,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 72,
    fontFamily: "Catamaran-ExtraBold",
    color: "rgba(108,99,255,1)"
  },
  rect2: {
    bottom: 91,
    width: "87.46666666666667%",
    height: 62,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    top: 21,
    left: 50,
    right: 50,
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    color: "rgba(239,239,239,1)"
  },
  rect3: {
    left: "17.07%",
    bottom: 59.97,
    width: 247,
    height: 14,
    position: "absolute"
  },
  text3: {
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  text4: {
    bottom: 0,
    right: -0.01,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  }
});
