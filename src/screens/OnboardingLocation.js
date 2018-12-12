import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text } from "react-native";

export default class OnboardingLocation extends Component {
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
          <Text style={styles.text} numberOfLines={3}>
            We need your location to match you!
          </Text>
        </Center>
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <View style={styles.rect2}>
          <Text style={styles.text2}>Turn on Location</Text>
          <Icon
            style={styles.icon2}
            name="crosshairs-gps"
            type="MaterialCommunityIcons"
          />
        </View>
        <Center horizontal>
          <Image
            style={styles.image2}
            source={require("../assets/untitled_(4).png")}
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
  rect: {
    top: 0,
    left: 0,
    right: 0,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  },
  text: {
    top: 344,

    width: 315,
    height: 154,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
    lineHeight: 54,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(23,25,65,1)"
  },
  icon: {
    top: 46,
    left: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
  },
  rect2: {
    top: 509.98,
    left: "6.4%",
    width: "87.2%",
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    top: "32.31%",
    left: "26.3%",
    width: 193,
    height: 25,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    lineHeight: 32,
    letterSpacing: 0,
    color: "rgba(239,239,239,1)"
  },
  icon2: {
    top: "26.56%",
    left: 29,
    width: 29,
    height: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  image2: {
    top: 117,
    width: 252,
    height: 252,
    position: "absolute"
  }
});
