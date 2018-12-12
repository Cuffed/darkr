import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import { View, StyleSheet, Image, Text, TextInput } from "react-native";

export default class OnboardingAge extends Component {
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
          <Text style={styles.text}>My age is</Text>
        </Center>
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <TextInput
            style={styles.textInput}
            placeholder="##"
            placeholderTextColor="rgba(23,25,65,1)"
            keyboardType="numeric"
            maxLength={2}
            selectionColor="rgba(102,204,102,0.2)"
            keyboardAppearance="light"
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
    height: 216,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image: {
    top: 0,
    left: "0%",
    bottom: 0,
    width: "100%",
    position: "absolute",
    opacity: 0.15
  },
  text: {
    top: 122,
    left: 88,
    width: 200,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 48,
    fontFamily: "Catamaran-Black",
    color: "rgba(255,255,255,1)",
    textAlign: "center"
  },
  icon: {
    top: 46,
    left: 22,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  textInput: {
    top: 216,
    width: 209,
    height: 145,
    position: "absolute",
    fontSize: 100,
    fontFamily: "Catamaran-Black",
    textAlign: "center",
    color: "rgba(23,25,65,1)"
  }
});
