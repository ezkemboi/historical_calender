/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true",
      headers: {
        "X-RapidAPI-Key": "95f2f09b5dmsh9c81a3c4ee1f935p1a3ff5jsna3b334f60855"
      }
    })
      .then(res => {
        console.log("------>>>>ressss>>>>", res);
      })
      .catch(err => {
        console.log("--------ssssserr---", err);
      });
  }

  checkHistory = () => {
    console.log("-----date------", date);
  };

  render() {
    console.log("I am here");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
