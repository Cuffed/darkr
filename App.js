import React from "react";
import { YellowBox } from "react-native";

import { Font } from "expo";

import Landing from "./src/screens/Landing";
import OnboardingGender from "./src/screens/OnboardingGender";
import OnboardingGenderPref from "./src/screens/OnboardingGenderPref";
import OnboardingAge from "./src/screens/OnboardingAge";
import OnboardingTooYoung from "./src/screens/OnboardingTooYoung";
import OnboardingLocation from "./src/screens/OnboardingLocation";
import ProfileEditor from "./src/screens/ProfileEditor";
import Matchmaking from "./src/screens/Matchmaking";
import ProfileEditorSave from "./src/screens/ProfileEditorSave";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Landing: {
    screen: Landing
  },
  OnboardingGender: {
    screen: OnboardingGender
  },
  OnboardingGenderPref: {
    screen: OnboardingGenderPref
  },
  OnboardingAge: {
    screen: OnboardingAge
  },
  OnboardingTooYoung: {
    screen: OnboardingTooYoung
  },
  OnboardingLocation: {
    screen: OnboardingLocation
  },
  ProfileEditor: {
    screen: ProfileEditor
  },
  Matchmaking: {
    screen: Matchmaking
  },
  ProfileEditorSave: {
    screen: ProfileEditorSave
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Landing: {
      screen: Landing
    },
    OnboardingGender: {
      screen: OnboardingGender
    },
    OnboardingGenderPref: {
      screen: OnboardingGenderPref
    },
    OnboardingAge: {
      screen: OnboardingAge
    },
    OnboardingTooYoung: {
      screen: OnboardingTooYoung
    },
    OnboardingLocation: {
      screen: OnboardingLocation
    },
    ProfileEditor: {
      screen: ProfileEditor
    },
    Matchmaking: {
      screen: Matchmaking
    },
    ProfileEditorSave: {
      screen: ProfileEditorSave
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
