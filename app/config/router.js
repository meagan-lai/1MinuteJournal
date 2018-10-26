import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation"; // Version can be specified in package.json

import Main from "../screens/Main";
import Choice from "../screens/Choice";
import MoodTracker from "../screens/MoodTracker";
import CoolLogin from "../screens/CoolLogin";

const RootStack = createStackNavigator(
  {
    MainView: Main,
    Choice: Choice,
    MoodTracker: MoodTracker,
    CoolLogin: CoolLogin
  },
  {
    initialRouteName: "CoolLogin"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
