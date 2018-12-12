import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import EditorField from "../symbols/EditorField";
import EditorLargeField from "../symbols/EditorLargeField";

import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList
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
        <Center horizontal>
          <Text style={styles.text}>Edit Profile</Text>
        </Center>
        <Icon style={styles.icon} name="check" type="MaterialCommunityIcons" />
        <ScrollView
          style={styles.scrollArea}
          horizontal={false}
          contentContainerStyle={styles.ScrollView1}
        >
          <FlatList
            style={styles.list}
            renderItem={({ item, separators }) => {
              return (
                <View style={styles.rect2}>
                  <View style={styles.rect3} />
                </View>
              );
            }}
            horizontal={true}
          />
          <EditorField style={styles.editorField} />
          <EditorLargeField style={styles.editorLargeField} />
          <EditorField
            style={styles.editorField2}
            textInput="I'm a"
            text3="Job Title"
          />
          <EditorField
            style={styles.editorField3}
            textInput="I work at "
            text3="Company"
          />
          <EditorField
            style={styles.editorField4}
            textInput="I study/studied at"
            text3="Education"
          />
        </ScrollView>
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
    opacity: 0.1
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

  scrollArea: {
    top: 118,
    left: 0,
    right: -1,
    height: 900,
    position: "absolute"
  },
  list: {
    top: 0,
    left: "2.93%",
    width: "97.07%",
    height: 240,
    position: "absolute"
  },
  rect2: {
    width: 156,
    height: 224,
    marginTop: 8,
    marginRight: 0,
    marginLeft: 8
  },
  rect3: {
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
  editorField: {
    top: 265,
    left: 0,
    right: 0,
    height: 76,
    position: "absolute"
  },
  editorLargeField: {
    top: 341,
    left: 0,
    right: 2,
    height: 434.18,
    position: "absolute"
  },
  editorField2: {
    top: "72.76%",
    left: 0,
    right: 0,
    height: 78,
    position: "absolute"
  },
  ScrollView1: {
    width: 377,
    height: 1116
  },
  editorField3: {
    top: "82.97%",
    left: 0,
    right: 0,
    height: 75,
    position: "absolute"
  },
  editorField4: {
    top: "92.83%",
    left: 0,
    right: 0,
    height: 75,
    position: "absolute"
  }
});
