import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";

export default class Chats extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect4}>
          <Center vertical>
            <Image
              style={styles.image2}
              source={require("../assets/undraw_inbox_cleanup_w2ur.png")}
            />
          </Center>
          <Text style={styles.text3}>Anastasia Steele</Text>
          <Text style={styles.text4}>Hey cutie!</Text>
          <Text style={styles.text6}>9:35</Text>
        </View>
        <FlatList
          style={styles.list}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect5}>
                <View style={styles.rect3}>
                  <Center vertical>
                    <Image
                      style={styles.image}
                      source={require("../assets/undraw_inbox_cleanup_w2ur.png")}
                    />
                  </Center>
                  <Text style={styles.text}>Anastasia Steele</Text>
                  <Text style={styles.text2}>Hey cutie!</Text>
                  <Text style={styles.text5}>9:35</Text>
                </View>
              </View>
            );
          }}
          horizontal={false}
        />
        <Center horizontal>
          <Image
            style={styles.image3}
            source={require("../assets/Glitch-Logo.png")}
          />
        </Center>
        <Icon
          style={styles.icon}
          name="chevron-left"
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
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    right: 0,
    bottom: 0
  },

  rect4: {
    top: 74,
    left: 0,
    right: 0,
    height: 81,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomColor: "rgba(0,0,0,1)",
    borderBottomWidth: 2
  },
  image2: {
    left: 14,
    width: 43,
    height: 44,
    position: "absolute",
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text3: {
    top: 20,
    left: 73,
    width: "59.06%",
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(0,0,0,1)"
  },
  text4: {
    top: 42,
    left: 73,
    width: "69.72222222222221%",
    height: 13,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    color: "rgba(92,90,90,1)"
  },
  text6: {
    top: 10,
    left: 307,
    width: 42,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(0,0,0,1)"
  },
  list: {
    position: "absolute",
    height: "78.61%",
    left: 0,
    bottom: 0,
    right: 0
  },
  rect5: {
    height: 81,
    alignSelf: "stretch"
  },
  rect3: {
    top: 0,
    left: 0,
    right: 0,
    height: 81,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomColor: "rgba(251,251,251,1)",
    borderBottomWidth: 2
  },
  image: {
    left: 14,
    width: 43,
    height: 44,
    position: "absolute",
    borderRadius: 100
  },
  text: {
    top: 20,
    left: 73,
    width: "59.06%",
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(255,241,241,1)"
  },
  text2: {
    top: 42,
    left: 73,
    width: "69.72222222222221%",
    height: 13,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    color: "rgba(187,187,187,1)"
  },
  text5: {
    top: 9,
    left: 307,
    width: 42,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(255,255,255,1)"
  },
  image3: {
    top: 0,
    width: 62,
    height: 62,
    position: "absolute"
  },
  icon: {
    top: 11,
    left: 6,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
