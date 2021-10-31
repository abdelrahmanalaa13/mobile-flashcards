import React, { Component } from "react";
import { View } from "react-native";
import Deck from "./Deck";

export class DeckList extends Component {
  render() {
    return (
      <View>
        <Deck />
      </View>
    );
  }
}

export default DeckList;
