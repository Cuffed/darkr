import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "@builderx/icons";

import { View, StyleSheet, Image, Text } from "react-native";

export default class Matchmaking extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Svg style={styles.ellipse} viewBox="0 0 100 100">
          <Ellipse fill="rgba(255,99,189,1)" rx={50} ry={50} cx={50} cy={50} />
        </Svg>
        <Svg style={styles.ellipse2} viewBox="0 0 100 100">
          <Ellipse rx={50} ry={50} cx={50} cy={50} fill="rgba(108,99,255,1)" />
        </Svg>
        <Icon
          name="heart-half-full"
          style={styles.icon}
          type="MaterialCommunityIcons"
        />
        <Icon name="close" style={styles.icon2} type="MaterialCommunityIcons" />
        <Icon
          name="face-profile"
          style={styles.icon3}
          type="MaterialCommunityIcons"
        />
        <Icon
          name="message-text"
          style={styles.icon4}
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <Text style={styles.text}>DARKR</Text>
        </Center>
        <Text style={styles.text2}>Jon Snow, 18</Text>
        <Center horizontal>
          <Icon
            name="information"
            style={styles.icon5}
            type="MaterialCommunityIcons"
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
  image: {
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
  rect: {
    height: "83.37%",
    width: "94.4%",
    top: 101,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    borderRadius: 15,
    opacity: 1
  },
  ellipse: {
    height: 81,
    width: 81,
    position: "absolute",
    right: 51,
    bottom: 26.02
  },
  ellipse2: {
    width: 81,
    height: 81,
    position: "absolute",
    left: 58.5,
    bottom: 26
  },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    right: 71.49,
    bottom: 46.48
  },
  icon2: {
    left: 78.5,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    bottom: 46.5
  },
  icon3: {
    top: 44,
    left: 10,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
  },
  icon4: {
    top: 44,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40,
    right: 11
  },
  text: {
    top: 52,
    width: 154,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    color: "rgba(23,25,65,1)",
    textAlign: "center"
  },
  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontFamily: "Catamaran-Black",
    fontSize: 34,
    left: 10,
    bottom: 126,
    height: 33,
    width: "94.4%",
    textAlign: "center",
    lineHeight: 42,
    letterSpacing: 0
  },
  icon5: {
    top: 705,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  }
});
