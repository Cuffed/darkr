import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class Swipe extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <View style={styles.rect3}>
            <Text style={styles.text} selectable={false}>
              Christian Grey
            </Text>
            <Icon
              style={styles.icon}
              name="chevron-down"
              type="MaterialCommunityIcons"
            />
          </View>
          <Image
            style={styles.image}
            source={require("../assets/screen.jpg")}
            resizeMode="cover"
          />
        </View>
        <Image
          source={require("../assets/Glitch-Logo.png")}
          style={styles.image2}
        />
        <Icon
          name="message-text"
          style={styles.icon2}
          type="MaterialCommunityIcons"
        />
        <Icon
          name="account"
          style={styles.icon3}
          type="MaterialCommunityIcons"
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
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    right: 0,
    bottom: 0
  },
  rect2: {
    height: "89.31%",
    width: "93.06%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    bottom: 11.02,
    opacity: 1,
    borderRadius: 10,
    left: "3.33%",
    top: "9.16%"
  },
  rect3: {
    left: 0,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(186,85,189,1)",
    opacity: 1,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    right: 0,
    bottom: 0
  },
  text: {
    left: 20,
    width: 234,
    height: 24,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    textAlign: "left",
    color: "rgba(249,249,249,1)",
    bottom: 20
  },

  image: {
    top: 0,
    left: 0,
    height: "90.6687402799378%",
    position: "absolute",
    right: 0,
    borderRadius: 10,
    opacity: 1
  },
  icon: {
    width: 40,
    height: 38,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    right: 5,
    bottom: 14
  },
  image2: {
    height: 62,
    width: 62,
    position: "absolute",
    top: 0,
    left: "41.39%"
  },
  icon2: {
    top: 11,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    right: 13
  },
  icon3: {
    top: 11.5,
    left: 13,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
