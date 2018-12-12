import React, { Component } from "react";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text, FlatList } from "react-native";

export default class Untitled1 extends Component {
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
          <Image
            style={styles.image2}
            source={require("../assets/vector-couple-sm.png")}
          />
        </Center>
        <View style={styles.list} horizontal={true}>
          <Text style={styles.text3}>Terms of Service</Text>
          <Text style={styles.text4}>Privacy Policy</Text>
        </View>
        <Center horizontal>
          <View style={styles.rect4}>
            <Text style={styles.text5}>Sign up with a Phone Number</Text>
          </View>
        </Center>
        <FlatList
          style={styles.LT0g8D}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect5}>
                <View style={styles.rect2} />
              </View>
            );
          }}
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
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image: {
    top: "0%",
    left: "0%",
    width: 375,
    height: 812,
    position: "absolute",
    opacity: 0.15
  },
  image2: {
    top: 0,

    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },

  list: {
    left: "17.07%",
    bottom: 59.97,
    width: 247,
    height: 14,
    position: "absolute"
  },
  text3: {
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  text4: {
    bottom: 0,
    right: -0.01,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  rect4: {
    height: 63,
    width: 327,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100,
    bottom: 95
  },
  text5: {
    top: 21,
    left: 49,
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
    color: "rgba(239,239,239,1)",
    right: 49
  },
  LT0g8D: {
    position: "absolute",
    width: 468,
    height: 224,
    top: 131,
    left: 20
  },
  rect5: {
    top: 131,
    left: 20,
    width: 156,
    height: 224,
    position: "absolute"
  },
  rect2: {
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
  }
});
