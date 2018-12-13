import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import { View, StyleSheet, Image, Text, Switch } from "react-native";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          style={styles.image}
          source={require("../assets/Asset_60.png")}
          resizeMode="repeat"
        />
        <Center horizontal>
          <Image
            style={styles.image2}
            source={require("../assets/Asset_60.png")}
            resizeMode="repeat"
          />
        </Center>
        <Center horizontal>
          <View style={styles.rect2}>
            <View style={styles.rect3} />
            <Text style={styles.text}>Age Range</Text>
            <Text style={styles.text2}>20</Text>
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect4}>
            <View style={styles.rect5} />
            <Text style={styles.text3}>Location</Text>
            <Icon
              style={styles.icon}
              name="home"
              type="MaterialCommunityIcons"
            />
            <Icon
              style={styles.icon2}
              name="airplane-takeoff"
              type="MaterialCommunityIcons"
            />
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect6}>
            <View style={styles.rect7} />
            <Text style={styles.text4}>I'm seeking a</Text>
            <View style={styles.rect8}>
              <Text style={styles.text5}>Female</Text>
            </View>
            <View style={styles.rect9}>
              <Text style={styles.text6}>Male</Text>
            </View>
            <View style={styles.rect10}>
              <Text style={styles.text7}>Other</Text>
            </View>
          </View>
        </Center>
        <Center horizontal>
          <View style={styles.rect11}>
            <View style={styles.rect12} />
            <Text style={styles.text8}>Show me on Darkr</Text>
            <Switch
              style={styles.switch}
              onTintColor="rgba(108,99,255,1)"
              thumbTintColor="rgba(23,25,65,1)"
              tintColor="rgba(255,99,189,1)"
              value={false}
            />
          </View>
        </Center>
        <Center horizontal>
          <Text style={styles.text9}>SETTINGS</Text>
        </Center>
        <Center horizontal>
          <View style={styles.rect13}>
            <Text style={styles.text10}>Delete Account</Text>
          </View>
        </Center>
        <Icon name="close" style={styles.icon3} type="MaterialCommunityIcons" />
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
    height: 90,
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
    opacity: 0.1
  },
  image2: {
    top: 0,
    height: 90,
    position: "absolute",
    opacity: 0.8,
    width: "100%"
  },
  rect2: {
    top: 112,
    width: "90.4%",
    height: 92,
    position: "absolute"
  },
  rect3: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 15
  },
  text: {
    top: 19,
    left: 22,
    width: 140,
    height: 30,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Catamaran-Bold",
    lineHeight: 28,
    letterSpacing: 0,
    color: "rgba(23,25,65,1)"
  },
  text2: {
    left: 20,
    bottom: 16,
    width: 37,
    height: 22,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "Catamaran-Black",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(108,99,255,1)"
  },
  rect4: {
    top: 224,
    width: "90.4%",
    height: 91,
    position: "absolute"
  },
  rect5: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 15
  },
  text3: {
    top: 20,
    left: 21,
    width: 140,
    height: 27,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Catamaran-Bold",
    lineHeight: 26,
    letterSpacing: 0,
    color: "rgba(23,25,65,1)"
  },
  icon: {
    left: 20,
    bottom: 17,
    width: 30,
    height: 30,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(108,99,255,1)",
    fontSize: 30
  },
  icon2: {
    top: "47.83%",
    right: 23,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(108,99,255,1)",
    fontSize: 30
  },
  rect6: {
    top: "41.38%",
    width: "90.4%",
    height: 110,
    position: "absolute",
    overflow: "hidden"
  },
  rect7: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 15
  },
  text4: {
    top: 20,
    left: 22,
    width: 140,
    height: 28,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Catamaran-Bold",
    lineHeight: 28,
    letterSpacing: 0,
    color: "rgba(23,25,65,1)"
  },
  rect8: {
    top: 51,
    left: 18,
    width: 112,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(255,99,189,1)",
    opacity: 1,
    borderRadius: 100
  },
  text5: {
    top: "36.59%",
    left: 0,
    width: 112,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Catamaran-Black",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect9: {
    top: 51,
    left: 136.98,
    width: 82.55,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text6: {
    top: "36.59%",
    left: "0%",
    width: 83,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Catamaran-Black",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect10: {
    top: 51,
    left: 226,
    width: 81,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(108,99,255,1)",
    opacity: 1,
    borderRadius: 100
  },
  text7: {
    top: "36.59%",
    left: "-1.23%",
    width: 83,
    height: 19,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Catamaran-Black",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect11: {
    top: "57.27%",
    width: "90.13%",
    height: 51,
    position: "absolute"
  },
  rect12: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 15
  },
  text8: {
    top: 17,
    left: 22,
    width: 190,
    height: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Catamaran-Bold",
    lineHeight: 28,
    letterSpacing: 0,
    color: "rgba(23,25,65,1)"
  },
  switch: {
    top: 14,
    right: 20.99,
    width: 46,
    height: 23,
    position: "absolute"
  },
  text9: {
    top: 45,
    width: 154,
    height: 31,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect13: {
    bottom: 42,
    width: "90.13%",
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(208,2,27,1)",
    opacity: 1,
    borderRadius: 100
  },
  text10: {
    top: 17,
    left: "0%",
    width: "100%",
    height: 29,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Catamaran-ExtraBold",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  icon3: {
    top: 36,
    left: 19,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
