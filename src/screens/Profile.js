import React, { Component } from "react";
import { Center } from "@builderx/utils";

import Icon from "@builderx/icons";
import Svg, { Ellipse } from "react-native-svg";
import { View, StyleSheet, Image, Text } from "react-native";

export default class Profile extends Component {
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
        <Icon
          style={styles.icon3}
          name="settings"
          type="MaterialCommunityIcons"
        />
        <Icon
          style={styles.icon4}
          name="heart-half-full"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <Text style={styles.text}>YOU</Text>
        </Center>
        <Text style={styles.text2}>Jon Snow, 18</Text>
        <Icon
          style={styles.icon5}
          name="information"
          type="MaterialCommunityIcons"
        />
        <Svg style={styles.ellipse2} viewBox="0 0 100 100">
          <Ellipse rx={50} ry={50} cx={50} cy={50} fill="rgba(255,99,189,1)" />
        </Svg>
        <Icon
          style={styles.icon6}
          name="pencil"
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
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  },
  rect: {
    top: 111,
    width: "94.4%",
    height: "83.37%",
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 15
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
    right: 11,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
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
    textAlign: "center",
    color: "rgba(23,25,65,1)"
  },
  text2: {
    bottom: 43,
    width: 318,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 34,
    fontFamily: "Catamaran-Black",
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    left: "6.93%"
  },
  icon6: {
    bottom: 108,
    right: 40,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipse2: {
    bottom: 88,
    right: 22,
    width: 80,
    height: 80,
    position: "absolute"
  },
  icon5: {
    top: 745,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    left: "85.07%"
  }
});
