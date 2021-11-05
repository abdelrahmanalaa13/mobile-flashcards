import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Deck from "../components/Deck";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/index";

export class DeckList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <View>
        {Object.values(decks).map((deck) => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate("DeckDetail", { title: deck.title })
              }
            >
              <Deck deck={deck} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (decks) => ({ decks });

export default connect(mapStateToProps, { handleInitialData })(DeckList);
