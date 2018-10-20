import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";
import { NavigationActions } from "react-navigation";

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
    backgroundColor: "gray",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "75%",
    justifyContent: "center"
  },
  monthModal: {
    backgroundColor: "white",
    alignItems: "center",
    opacity: 0.5,
    width: "75%",
    height: "75%"
  }
});
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { monthModal: false };

    this.monthPressed = this.monthPressed.bind(this);
  }

  monthPressed() {
    console.log("hello world");

    this.setState({
      monthModal: true
    });
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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {months.map((month, index) => {
          return (
            <TouchableHighlight
              key={month}
              onPress={/*this.monthPressed*/ () => navigate("Choice", { month: { month } })}
              underlayColor="blue"
              style={styles.buttons}
            >
              <Text style={styles.monthBoxes}>{month}</Text>
            </TouchableHighlight>
          );
        })}
        <Modal
          isVisible={this.state.monthModal}
          style={styles.monthModal}
          onSwipe={() => this.setState({ monthModal: false })}
        >
          <Text> hello modal</Text>
          <TouchableHighlight onPress={() => this.setState({ monthModal: false })}>
            <Text> Close Modal</Text>
          </TouchableHighlight>
        </Modal>
      </ScrollView>
    );
  }
}
