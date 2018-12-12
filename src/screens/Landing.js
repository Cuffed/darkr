import React, { Component } from "react";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Image, Text } from "react-native";

export default class Landing extends Component {
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
        <Center horizontal>
          <Text style={styles.text}>DARKR</Text>
        </Center>
        <View style={styles.rect2}>
          <Text style={styles.text2}>Terms of Service</Text>
          <Text style={styles.text3}>Privacy Policy</Text>
        </View>
        <Center horizontal>
          <View style={styles.rect3}>
            <Text style={styles.text4}>Sign up with a Phone Number</Text>
          </View>
        </Center>
        <View style={styles.rect4} />
        <Image
          style={styles.image3}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Center horizontal>
          <Image
            style={styles.image4}
            source={require("../assets/vector-couple-sm.png")}
          />
        </Center>
        <Center horizontal>
          <Text style={styles.text5}>DARKR</Text>
        </Center>
        <View style={styles.rect5}>
          <Text style={styles.text6}>Terms of Service</Text>
          <Text style={styles.text7}>Privacy Policy</Text>
        </View>
        <Center horizontal>
          <View style={styles.rect6}>
            <Text style={styles.text8}>Sign up with a Phone Number</Text>
          </View>
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
    bottom: 0,
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
    opacity: 0.15
  },
  image2: {
    top: 106,
    width: 300,
    height: 300,
    position: "absolute"
  },
  text: {
    top: 386,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 72,
    fontFamily: "Catamaran-ExtraBold",
    color: "rgba(108,99,255,1)"
  },
  rect2: {
    left: "17.07%",
    bottom: 59.97,
    width: 247,
    height: 14,
    position: "absolute"
  },
  text2: {
    left: 0,
    bottom: 0,
    width: 124,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  text3: {
    bottom: 0,
    right: -29,
    width: 120,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  rect3: {
    bottom: 95,
    width: 327,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text4: {
    top: 25,
    left: "0%",
    width: "100%",
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Catamaran-Black",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  },
  rect4: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1
  },
  image3: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  },
  image4: {
    top: 106,
    width: 300,
    height: 300,
    position: "absolute"
  },
  text5: {
    top: 386,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 72,
    fontFamily: "Catamaran-ExtraBold",
    color: "rgba(108,99,255,1)"
  },
  rect5: {
    left: "17.07%",
    bottom: 59.97,
    width: 247,
    height: 14,
    position: "absolute"
  },
  text6: {
    left: 0,
    bottom: 0,
    width: 124,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  text7: {
    bottom: 0,
    right: -29,
    width: 120,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(181,181,181,1)"
  },
  rect6: {
    bottom: 95,
    width: "90%",
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text8: {
    top: 25,
    left: "0%",
    width: "100%",
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Catamaran-Black",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(239,239,239,1)"
  }
});
