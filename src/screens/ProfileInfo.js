import React, { Component } from "react";

import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

import Svg, { Ellipse } from "react-native-svg";

import Swiper from "@builderx/react-native-swiper";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";

export default class ProfileInfo extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon
          style={styles.icon}
          name="heart-half-full"
          type="MaterialCommunityIcons"
        />
        <Icon style={styles.icon2} name="close" type="MaterialCommunityIcons" />
        <Image
          style={styles.image}
          source={require("../assets/Asset_50.png")}
          resizeMode="repeat"
        />
        <ScrollView
          style={styles.scrollArea}
          horizontal={false}
          contentContainerStyle={{
            width: 375,
            height: 812
          }}
        >
          <Text style={styles.text} selectable={false} numberOfLines={13}>
            \n \n \n \n Hi, I'm Danaerys, the rightful ruler of Westeros and
            a\n\n Khaleesi\n from\n over yonder! I like fire, dragons, and
            razing my\n\n enemies\n until all\n that remains is the ash of their
            bones! At\n\n nights you\n can catch me\n at the dungeons or with
            literally any\n\n guy except for\n Jorah (fuck\n Jorah). If you want
            to slide into\n my\n DMs, please have\n a really nice\n ass like Jon
            Snow's. We can\n fuck\n on my boat, or one\n of my boats, cuz\n I've
            got like fifty.\n My ex\n was Khal Drogo so you\n better be large
            in\n many ways, if\n you catch\n my drift!\n{" "}
          </Text>
          <Swiper
            style={styles.carousel}
            dotStyle={{}}
            activeDotStyle={{}}
            buttonTextStyle={{}}
            index={0}
            showsButtons={true}
            bounces={true}
          >
            <View style={styles.rect}>
              <Image
                style={styles.image2}
                source={require("../assets/igor-starkov-611293-unsplash.jpg")}
              />
            </View>
            <View style={styles.rect2}>
              <Image
                style={styles.image3}
                source={require("../assets/caique-silva-397103-unsplash.jpg")}
              />
            </View>
            <View style={styles.rect3}>
              <Image
                style={styles.image4}
                source={require("../assets/marvin-meyer-242794-unsplash.jpg")}
              />
            </View>
          </Swiper>
          <View style={styles.rect4}>
            <Text style={styles.text2}>Danaerys T., 18</Text>
            <Text style={styles.text3} selectable={false}>
              \n \n \n \n \n Mhysa\n{" "}
            </Text>
          </View>
        </ScrollView>
        <Icon style={styles.icon3} name="close" type="MaterialCommunityIcons" />
        <Svg style={styles.ellipse} viewBox="0 0 100 100">
          <Ellipse rx={50} ry={50} cx={50} cy={50} fill="rgba(255,99,189,1)" />
        </Svg>
        <Svg style={styles.ellipse2} viewBox="0 0 100 100">
          <Ellipse rx={50} ry={50} cx={50} cy={50} fill="rgba(108,99,255,1)" />
        </Svg>
        <Icon
          style={styles.icon4}
          name="heart-half-full"
          type="MaterialCommunityIcons"
        />
        <Icon style={styles.icon5} name="close" type="MaterialCommunityIcons" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  icon: {
    bottom: 47,
    right: 72,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    left: 79,
    bottom: 47,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },

  icon3: {
    top: 44,
    left: 10,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(108,99,255,1)",
    fontSize: 40
  },
  ellipse: {
    bottom: 26,
    right: 51,
    width: 81,
    height: 81,
    position: "absolute"
  },
  ellipse2: {
    left: 59,
    bottom: 26,
    width: 81,
    height: 81,
    position: "absolute"
  },
  icon4: {
    bottom: 47,
    right: 72,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon5: {
    left: 79,
    bottom: 47,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  scrollArea: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  text: {
    top: 549,
    left: "5.87%",
    width: "88%",
    height: 263,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 17,
    fontFamily: "Catamaran-Medium",
    lineHeight: 21,
    letterSpacing: 0
  },
  carousel: {
    top: 0,
    left: 0,
    width: "100%",
    height: 464,
    position: "absolute"
  },
  rect: {
    flex: 1,
    backgroundColor: "#5C6BC0"
  },
  image2: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  rect2: {
    flex: 1,
    backgroundColor: "#2196F3"
  },
  image3: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  rect3: {
    flex: 1,
    backgroundColor: "#009688"
  },
  image4: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  rect4: {
    top: 483,
    left: 22,
    width: "88%",
    height: 68,
    position: "absolute"
  },
  text2: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    fontFamily: "Catamaran-Black",
    lineHeight: 40,
    letterSpacing: 0
  },
  text3: {
    top: "57.35%",
    left: 0,
    width: "100%",
    height: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Catamaran-Black",
    lineHeight: 24,
    letterSpacing: 0
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.1
  }
});
