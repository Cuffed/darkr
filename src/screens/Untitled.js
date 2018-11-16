import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import { View, StyleSheet, Image, Text } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Center horizontal>
          <Image
            style={styles.image}
            source={require("../assets/Glitch-Logo.png")}
          />
        </Center>
        <Icon style={styles.icon} name="pencil" type="MaterialCommunityIcons" />
        <Icon
          style={styles.icon2}
          name="chevron-right"
          type="MaterialCommunityIcons"
        />
        <View style={styles.rect2}>
          <View style={styles.rect3}>
            <Text style={styles.text} selectable={false}>
              \n Christian Grey\n{" "}
            </Text>
            <Icon
              style={styles.icon3}
              name="chevron-down"
              type="MaterialCommunityIcons"
            />
          </View>
          <Image
            style={styles.image2}
            source={require("../assets/screen.jpg")}
            resizeMode="cover"
          />
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
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  image: {
    top: 0,
    width: 62,
    height: 62,
    position: "absolute"
  },
  icon: {
    top: 11,
    left: 13,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    top: 11,
    right: 13,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect2: {
    top: "9.16%",
    left: "3.33%",
    bottom: 11.02,
    width: "93.06%",
    height: "89.31%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 10
  },
  rect3: {
    left: 0,
    bottom: 0,
    right: 0,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(186,85,189,1)",
    opacity: 1,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  text: {
    left: 20,
    bottom: 20,
    width: 234,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    textAlign: "left",
    color: "rgba(249,249,249,1)"
  },
  icon3: {
    bottom: 14,
    right: 5,
    width: 40,
    height: 38,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  image2: {
    top: 0,
    left: 0,
    right: 0,
    height: "90.6687402799378%",
    position: "absolute",
    opacity: 1,
    borderRadius: 10
  }
});
