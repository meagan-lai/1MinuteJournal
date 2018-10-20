import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation"; // Version can be specified in package.json

import Main from "../screens/Main";

const RootStack = createStackNavigator(
  {
    MainView: Main
  },
  {
    initialRouteName: "MainView"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
