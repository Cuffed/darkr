import React, { Component } from "react";

import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import ChatListItem from "../symbols/ChatListItem";

import { View, StyleSheet, Image, Text, FlatList } from "react-native";

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <Icon
          style={styles.icon}
          name="keyboard-backspace"
          type="MaterialCommunityIcons"
        />
        <Center horizontal>
          <Text style={styles.text}>FLIRT</Text>
        </Center>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <ChatListItem style={styles.chatListItem} />
              </View>
            );
          }}
          ListHeaderComponent={({ highlighted }) => {
            return (
              <View style={styles.rect2}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3, 4, 5, 5]}
                  style={styles.list2}
                  renderItem={({ item, separators }) => {
                    return (
                      <View style={styles.rect3}>
                        <View style={styles.rect4} />
                      </View>
                    );
                  }}
                  horizontal={true}
                />
              </View>
            );
          }}
          horizontal={false}
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
  image: {
    top: 209,
    left: 10.01,
    width: "94.39999999999999%",
    height: "74.26%",
    position: "absolute"
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  },
  icon: {
    top: 43.02,
    left: "2.67%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(23,25,65,1)",
    fontSize: 40
  },
  text: {
    top: 52,
    width: 154,
    height: 32,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Catamaran-Black",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(23,25,65,1)"
  },
  list: {
    top: "11.33%",
    left: "1.07%",
    width: "98.93%",
    height: "88.67%",
    position: "absolute"
  },
  rect: {
    height: 147,
    alignSelf: "stretch",
    marginTop: 0,
    marginRight: 5,
    marginBottom: 15
  },
  chatListItem: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute"
  },
  rect2: {
    height: 100,
    backgroundColor: "#ffffff",
    padding: 15
  },
  list2: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute"
  },
  rect3: {
    width: 76,
    height: 90,
    marginRight: 10
  },
  rect4: {
    top: 0,
    left: 0,
    width: 76,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(23,25,65,1)",
    opacity: 1,
    borderRadius: 15
  }
});
