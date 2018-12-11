import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text } from "react-native";

export default class Untitled2 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Center horizontal>
          <Image
            style={styles.image}
            source={require("../assets/Asset_50.png")}
            resizeMode="repeat"
          />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>Seeking a</Text>
        </Center>
        <Center horizontal>
          <View style={styles.rect2}>
            <Center vertical>
              <Text style={styles.text2}>Female</Text>
            </Center>
            <Center vertical>
              <Icon
                style={styles.icon}
                name="gender-female"
                type="MaterialCommunityIcons"
              />
            </Center>
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect3}>
            <Center vertical>
              <Text style={styles.text3}>Male</Text>
            </Center>
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
          <View style={styles.rect4}>
            <Center vertical>
              <Text style={styles.text4}>Other</Text>
            </Center>
            <Center vertical>
              <Icon
                style={styles.icon3}
                name="gender-transgender"
                type="MaterialCommunityIcons"
              />
            </Center>
          </View>
        </Center>
        <Icon
          style={styles.icon4}
          name="keyboard-backspace"
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
    right: 0,
    height: 216,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image: {
    top: 0,
    bottom: 0,
    width: 375,
    position: "absolute",
    opacity: 0.15
  },
  text: {
    top: 122.03,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
    color: "rgba(255,255,255,1)"
  },
  rect2: {
    bottom: 403,
    width: "87.2%",
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,99,189,1)",
    opacity: 1,
    borderRadius: 100
  },
  text2: {
    left: 120,
    right: 113,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    color: "rgba(239,239,239,1)"
  },
  icon: {
    left: "9.19%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect3: {
    bottom: 318,
    width: "87.2%",
    height: 65,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 100
  },
  text3: {
    left: 133.5,
    right: 133.5,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
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
    left: 124.5,
    right: 124.5,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    color: "rgba(239,239,239,1)"
  },
  icon3: {
    left: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon4: {
    top: 46,
    left: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
