import React from "react";
import { YellowBox } from "react-native";

import Splash from "./src/screens/Splash";
import Swipe from "./src/screens/Swipe";
import Chats from "./src/screens/Chats";
import Untitled from "./src/screens/Untitled";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Splash: {
    screen: Splash
  },
  Swipe: {
    screen: Swipe
  },
  Chats: {
    screen: Chats
  },
  Untitled: {
    screen: Untitled
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Splash: {
      screen: Splash
    },
    Swipe: {
      screen: Swipe
    },
    Chats: {
      screen: Chats
    },
    Untitled: {
      screen: Untitled
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
