import React, { Component } from "react";
import { View, Text } from "react-native";
import April from "./April.js";

export default class MoodTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let xax;

    return (
      <View>
        {() => {
          let month = "January";
          switch (month) {
            case "January":
              console.log("January");
              return <Text>January</Text>;
              break;
            case "April":
              console.log("April");
              return <Text>April</Text>;
              break;
            default:
              console.log("Meagan loves Arya MORE");
              break;
          }
        }}
        <April />
      </View>
    );
  }
}
