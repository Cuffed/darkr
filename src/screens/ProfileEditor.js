import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TextInput
} from "react-native";

export default class ProfileEditor extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          style={styles.image}
          source={require("../assets/Asset_60.png")}
          resizeMode="repeat"
        />
        <FlatList
          style={styles.list}
          data={[0, 0, 0]}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect5}>
                <View style={styles.rect6} />
              </View>
            );
          }}
          horizontal={true}
        />
        <Center horizontal>
          <Text style={styles.text}>Edit Profile</Text>
        </Center>
        <Icon style={styles.icon} name="check" type="MaterialCommunityIcons" />
        <Center vertical>
          <View style={styles.rect7} />
        </Center>
        <Center>
          <TextInput
            style={styles.textInput}
            placeholder="My name is..."
            placeholderTextColor="rgba(104,106,162,1)"
            autoCapitalize="words"
            selectionColor="rgba(108,99,255,1)"
          />
        </Center>
        <View style={styles.rect8} />
        <TextInput
          style={styles.textInput2}
          placeholder="Who am I?"
          placeholderTextColor="rgba(104,106,162,1)"
          autoCapitalize="words"
          multiline={true}
          selectionColor="rgba(108,99,255,1)"
          numberOfLines={20}
          keyboardType="default"
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
    bottom: 705.61,
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
    opacity: 0.3
  },
  list: {
    top: 127,
    left: "2.93%",
    width: "97.06666666666666%",
    height: 224,
    position: "absolute"
  },
  rect5: {
    width: 156,
    height: 224,
    marginRight: 13
  },
  rect6: {
    top: 0,
    left: 0,
    width: 156,
    height: 224,
    position: "absolute",
    elevation: 15,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.37,
    shadowRadius: 5
  },
  text: {
    top: 58,
    width: 154,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    color: "rgba(255,255,255,1)",
    textAlign: "center"
  },
  icon: {
    top: 47,
    right: 24,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect7: {
    left: 0,
    right: 0,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  textInput: {
    width: 318,
    height: 36,
    position: "absolute",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(69,72,142,1)"
  },
  rect8: {
    top: 459,
    left: 0,
    right: 0,
    height: "32.02%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  textInput2: {
    top: "57.39%",

    width: 323,
    textAlignVertical: "top",
    position: "absolute",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(69,72,142,1)",
    bottom: 93,
    left: "6.93%"
  }
});
