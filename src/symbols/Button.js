import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 328,
    height: 62
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text2}>
          {this.props.text2 ? this.props.text2 : "Sign up with a Phone Number"}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text2: {
    top: 21,
    left: 50,
    right: 50,
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    color: "rgba(239,239,239,1)"
  },
  root: {
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  }
});
