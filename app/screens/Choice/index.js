import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";

let moods = require("../../data/moods.json");

const styles = StyleSheet.create({
  monthBoxes: {
    textAlign: "center",
    fontSize: 20,
    width: "50%"
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "gray",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "75%",
    justifyContent: "center"
  }
});
export default class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moodPicked = this.moodPicked.bind(this);
  }

  moodPicked() {
    const month = this.props.navigation.state.params.month;
    let monthMoodObj;
    moods.forEach(moodObj => {
      if (moodObj.month == month) {
        monthMoodObj = moodObj;
      }
    });

    this.props.navigation.navigate("MoodTracker", { month: month });
  }

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.buttons} onPress={this.moodPicked}>
          <Text style={styles.monthBoxes}> Mood </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttons} onPress={() => console.log("habits")}>
          <Text style={styles.monthBoxes}> Habits </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
