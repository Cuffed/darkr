import React from "react";
import { YellowBox } from "react-native";
import Untitled from "./src/screens/Untitled";
import { Font } from "expo";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";
import Untitled3 from "./src/screens/Untitled3";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Untitled: {
    screen: Untitled
  },
  Untitled1: {
    screen: Untitled1
  },
  Untitled2: {
    screen: Untitled2
  },
  Untitled3: {
    screen: Untitled3
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: {
      screen: Untitled
    },
    Untitled1: {
      screen: Untitled1
    },
    Untitled2: {
      screen: Untitled2
    },
    Untitled3: {
      screen: Untitled3
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
    await Font.loadAsync({
      "Catamaran-ExtraLight": require("./src/assets/fonts/Catamaran-ExtraLight.ttf"),
      "Catamaran-Black": require("./src/assets/fonts/Catamaran-Black.ttf"),
      "Catamaran-Regular": require("./src/assets/fonts/Catamaran-Regular.ttf"),
      "Catamaran-Thin": require("./src/assets/fonts/Catamaran-Thin.ttf"),
      "Catamaran-Medium": require("./src/assets/fonts/Catamaran-Medium.ttf"),
      "Catamaran-ExtraBold": require("./src/assets/fonts/Catamaran-ExtraBold.ttf"),
      "Catamaran-Light": require("./src/assets/fonts/Catamaran-Light.ttf"),
      "Catamaran-SemiBold": require("./src/assets/fonts/Catamaran-SemiBold.ttf"),
      "Catamaran-Bold": require("./src/assets/fonts/Catamaran-Bold.ttf"),
      "SFProDisplay-Medium": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Heavy": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Thin": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-Italic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-SemiboldItalic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "SFProDisplay-UltralightItalic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
