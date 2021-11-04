import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Deck from "../components/Deck";

export class DeckList extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeckDetail")}
        >
          <Deck />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeckDetail")}
        >
          <Deck />
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckList;
