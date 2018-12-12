import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import ChatListItem from "../symbols/ChatListItem";
import { View, StyleSheet, Text, Image } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.image}>Jon Snow, 18</Text>
        </Center>
        <Icon
          style={styles.chatListItem}
          name="information"
          type="MaterialCommunityIcons"
        />
        <Image
          style={styles.icon}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Center horizontal>
          <ChatListItem style={styles.icon2} />
        </Center>
        <Icon
          style={styles.text}
          name="settings"
          type="MaterialCommunityIcons"
        />
        <Icon
          style={styles.MlZsXG}
          name="heart-half-full"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <Text style={styles.DocPOz}>FLIRT</Text>
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
    bottom: 495.12,
    width: 320,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 34,
    fontFamily: "Catamaran-Black",
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(255,255,255,1)"
  },
  chatListItem: {
    left: "88.27%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    top: "35.96%"
  },
  icon: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  },
  icon2: {
    top: 111,
    width: "94.4%",
    height: 147,
    position: "absolute"
  },
  text: {
    top: 44,
    left: 10,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
  },
  MlZsXG: {
    top: 44,
    right: 11,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
  },
  DocPOz: {
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
  }
});
