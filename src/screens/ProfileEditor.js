import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import { View, StyleSheet, Image, FlatList, Text } from "react-native";

export default class ProfileEditor extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2}>
          <View style={styles.rect3} />
        </View>
        <Image
          style={styles.image}
          source={require("../assets/Asset_60.png")}
          resizeMode="repeat"
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={[0, 0, 0]}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect4}>
                <View style={styles.rect5} />
              </View>
            );
          }}
          horizontal={true}
        />
        <Center horizontal>
          <Text style={styles.text}>Edit Profile</Text>
        </Center>
        <Icon style={styles.icon} name="check" type="MaterialCommunityIcons" />
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
  rect2: {
    top: 107,
    left: 0,
    right: 0,
    height: 263,
    position: "absolute"
  },
  rect3: {
    top: 0,
    left: 0,
    right: 0,
    height: 263,
    position: "absolute",
    backgroundColor: "rgba(191,187,255,1)",
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
  rect4: {
    width: 156,
    height: 224,
    marginRight: 13
  },
  rect5: {
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
    color: "rgba(255,255,255,1)"
  },
  icon: {
    top: 50,
    right: 24.01,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
