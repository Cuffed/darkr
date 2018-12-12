import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
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
        <Text style={styles.text} numberOfLines={2}>
          We need your location to match you!
        </Text>
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Turn on Location</Text>
          </View>
        </Center>
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
    left: "0%",
    bottom: 0,
    width: 375,
    position: "absolute",
    opacity: 0.15
  },
  text: {
    width: "84%",
    height: 154,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
    textAlign: "center",
    color: "rgba(23,25,65,1)",
    top: 344,
    left: "8%"
  },
  icon: {
    top: 46,
    left: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect2: {
    bottom: 237,
    width: "87.2%",
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    height: 25,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    color: "rgba(239,239,239,1)",
    width: 193,
    left: "26.3%",
    top: "32.31%"
  },
  image2: {
    top: 117,
    width: 252,
    height: 252,
    position: "absolute"
  }
});
