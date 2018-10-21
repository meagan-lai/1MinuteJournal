import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class April extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Image source={require("../../assets/aprilcloud.png")} />
      </View>
    );
  }
}
