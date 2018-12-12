import React, { Component } from "react";

import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text, Image } from "react-native";

export default class ChatListItem extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 354,
    height: 216
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect} />
        <Text style={styles.text}>Jon Snow, 18</Text>
        <Icon
          style={styles.icon}
          name="face-profile"
          type="MaterialCommunityIcons"
        />
        <Text style={styles.text2} numberOfLines={3}>
          \n Hi there! Roses are red, violets are blue, I'm unoriginal, how's\n
          tonight--dinner for two?\n{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/sean-kong.jpg")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: 0,
    left: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 15
  },
  text: {
    left: 18,
    bottom: 5,
    width: 299,
    height: 40,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 34,
    fontFamily: "Catamaran-Black",
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(255,255,255,1)"
  },
  icon: {
    bottom: 16,
    right: 12,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text2: {
    top: 25,
    left: "24.29%",
    width: "75.71%",
    height: "68.52%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Catamaran-Thin",
    lineHeight: 22,
    letterSpacing: 0,
    color: "rgba(255,255,255,1)"
  },
  image: {
    top: 22,
    left: 18,
    width: 68,
    height: 68,
    position: "absolute",
    borderRadius: 100
  }
});
