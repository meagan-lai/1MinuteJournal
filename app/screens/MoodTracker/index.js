import React, { Component } from "react";
import { View, Text } from "react-native";

import April from "./April";

export default class MoodTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { month: "January" };

    this.renderMonth = this.renderMonth.bind(this);
  }

  renderMonth(month) {
    console.log(month);

    switch (month) {
      case "January":
        return <Text>January</Text>;
        break;
      case "February":
        return <Text>feb</Text>;
        break;
      case "April":
        return <April />;
        break;

      default:
        break;
    }
  }
  render() {
    const month = this.props.navigation.state.params.month;
    return <View>{this.renderMonth(month)}</View>;
  }
}
