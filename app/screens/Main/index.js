import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  monthBoxes: {
    textAlign: "center",
    fontSize: 20,
    width: "50%"
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#dba2a2",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "75%",
    justifyContent: "center"
  }
});
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  monthPressed() {
    console.log("hello world");
  }

  render() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {months.map(month, index => {
          return (
            <TouchableHighlight
              key={month}
              onPress={this.monthPressed}
              underlayColor="blue"
              style={styles.buttons}
            >
              <Text style={styles.monthBoxes}>{month}</Text>
            </TouchableHighlight>
          );
        })}
        <Modal />
      </ScrollView>
    );
  }
}
