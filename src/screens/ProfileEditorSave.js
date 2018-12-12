import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import EditorField from "../symbols/EditorField";
import EditorLargeField from "../symbols/EditorLargeField";

import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  Keyboard,
  UIManager,
  Image,
  FlatList,
  ScrollView,
  Text,
  TextInput
} from "react-native";
const { State: TextInputState } = TextInput;

export default class ProfileEditor extends Component {
  state = {
    shift: new Animated.Value(0),
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  render() {
    const { shift } = this.state;
    return (
      <Animated.View style={[styles.root, { transform: [{translateY: shift}] }]}>
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
            data={[0,1,2,3,4]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => {
              return (
                <View key={item} style={styles.rect2}>
                  <Image resizeMode={'contain'} source={{uri: '../assets/sean-kong.png'}} style={styles.rect3} />
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
      </Animated.View>
    );
  }
  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height > 100 ? 300 : height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap - 40,
          duration: 200,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }
    ).start();
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
    height: "85%",
    position: "absolute"
  },
  list: {
    top: 15,
    left: "0%",
    marginLeft: '1%',
    paddingLeft: 5,
    width: "100.0%",
    height: 260,
    position: "absolute"
  },
  rect2: {
    width: 160,
    height: 227,
    marginTop: 8,
    marginRight: 15,
    marginLeft: 0,
    borderColor: 'rgba(23,25,65,0.2)',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  rect3: {
    top: 0,
    left: 0,
    width: 156,
    height: 224,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
  },
  editorField: {
    top: 265,
    left: 0,
    right: 0,
    height: 76,
    position: "absolute"
  },
  editorLargeField: {
    top: 348,
    left: 0,
    right: 2,
    height: 434.18,
    position: "absolute"
  },
  editorField2: {
    top: 810,
    left: 0,
    right: 0,
    height: 78,
    position: "absolute"
  },
  ScrollView1: {
    width: "100%",
    height: 1146
  },
  editorField3: {
    top: 905,
    left: 0,
    right: 0,
    height: 75,
    position: "absolute"
  },
  editorField4: {
    top: 1005,
    left: 0,
    right: 0,
    height: 75,
    position: "absolute"
  }
});
