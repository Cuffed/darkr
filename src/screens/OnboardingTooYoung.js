import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text } from "react-native";

export default class OnboardingTooYoung extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          style={styles.image}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Text style={styles.text} numberOfLines={2}>
          Sorry, you're too young!
        </Text>
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <Image
            style={styles.image2}
            source={require("../assets/untitled_(3).png")}
          />
        </Center>
        <Center horizontal>
          <View style={styles.rect2}>
            <Text style={styles.text2}>See ya later, alligator!</Text>
          </View>
        </Center>
        <Center horizontal>
          <Text style={styles.text3} numberOfLines={1}>
            18+
          </Text>
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
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
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
    top: 362.96,
    left: "8%",
    width: "84%",
    height: 125,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
    lineHeight: 64,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  icon: {
    top: 46,
    left: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  image2: {
    top: 106,
    width: 300,
    height: 300,
    position: "absolute"
  },
  rect2: {
    bottom: 55,
    width: "87.2%",
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    top: "33.85%",
    left: 0,
    width: "100%",
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  },
  text3: {
    bottom: 157,
    width: 192,
    height: 118,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 112,
    fontFamily: "Catamaran-Black",
    lineHeight: 140,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  }
});
