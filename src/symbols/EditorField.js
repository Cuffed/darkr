import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default class EditorField extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 76
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect7} />
        <TextInput
          style={styles.textInput}
          placeholder={
            this.props.textInput ? this.props.textInput : "Hi, my name is"
          }
          placeholderTextColor="rgba(104,106,162,1)"
          autoCapitalize="words"
          selectionColor="rgba(108,99,255,1)"
        />
        <Text style={styles.text3}>
          {this.props.text3 ? this.props.text3 : "My Name"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect7: {
    top: "27.63%",
    left: 0,
    right: 0,
    height: 55,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderWidth: 0,
    borderColor: "green",
    borderBottomColor: "rgba(226,226,226,1)",
    borderBottomWidth: 1,
    borderTopColor: "rgba(226,226,226,1)",
    borderTopWidth: 1
  },
  textInput: {
    left: "7.73%",
    width: "92.27%",
    height: 36,
    position: "absolute",
    fontSize: 20,
    fontFamily: "Catamaran-Black",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(23,25,65,1)",
    top: "36.84%"
  },
  text3: {
    top: 0,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "Catamaran-Black",
    color: "rgba(23,25,65,1)"
  }
});
