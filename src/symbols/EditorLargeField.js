import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default class EditorLargeField extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 1166
  };
  state = {
    maxlen: 500,
    curlen: 0
  };
  render() {
    const {maxlen, curlen} = this.state;
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect8} />
        <TextInput
          style={styles.textInput2}
          placeholder="Who am I?"
          placeholderTextColor="rgba(104,106,162,1)"
          autoCapitalize="words"
          keyboardType="default"
          multiline={true}
          selectionColor="rgba(108,99,255,1)"
          numberOfLines={13}
          maxLength={maxlen}
          onChangeText={t => {
            this.setState({curlen: t.length})
          }}
        />
        <Text style={styles.text4}>About me</Text>
        <Text style={styles.text5}>{maxlen - curlen}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect8: {
    top: 33,
    left: 0,
    right: 0,
    height: "97.51%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderColor: "#000000",
    borderWidth: 0,
    borderBottomColor: "rgba(228,228,228,1)",
    borderBottomWidth: 1,
    borderTopColor: "rgba(228,228,228,1)",
    borderTopWidth: 1
  },
  textInput2: {
    position: "absolute",
    fontSize: 20,
    fontFamily: "Catamaran-Black",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(23,25,65,1)",
    width: "92%",
    height: "94.6%",
    left: 30,
    top: 43.96,
    textAlignVertical: 'top'
  },
  text4: {
    top: 7,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "Catamaran-Black",
    color: "rgba(23,25,65,1)"
  },
  text5: {
    top: 7,
    right: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "Catamaran-Black",
    color: "rgba(23,25,65,1)"
  }
});
