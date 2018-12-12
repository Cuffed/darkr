import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import { View, StyleSheet, Image, Text } from "react-native";

export default class OnboardingGenderPref extends Component {
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
          <Text style={styles.text}>Seeking a</Text>
        </Center>
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Male</Text>
            <Center vertical>
              <Icon
                style={styles.icon2}
                name="gender-male"
                type="MaterialCommunityIcons"
              />
            </Center>
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect3}>
            <Text style={styles.text3}>Female</Text>
            <Center vertical>
              <Icon
                style={styles.icon3}
                name="gender-female"
                type="MaterialCommunityIcons"
              />
            </Center>
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect4}>
            <Text style={styles.text4}>Other</Text>
            <Center vertical>
              <Icon
                style={styles.icon4}
                name="gender-transgender"
                type="MaterialCommunityIcons"
              />
            </Center>
          </View>
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
    height: 216,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image: {
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.15
  },
  text: {
    top: 122,
    width: "56.8%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
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
  rect2: {
    bottom: 318,
    width: "87.2%",
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    top: "33.85%",
    left: 133.5,
    right: 133.5,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  },
  icon2: {
    left: 30,
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect3: {
    bottom: 403,
    width: "87.2%",
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,99,189,1)",
    opacity: 1,
    borderRadius: 100
  },
  text3: {
    top: "33.33%",
    left: 117,
    right: 116,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  },
  icon3: {
    left: "9.19%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect4: {
    bottom: 235,
    width: "87.2%",
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text4: {
    top: "33.33%",
    left: 125,
    right: 125,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  },
  icon4: {
    left: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
