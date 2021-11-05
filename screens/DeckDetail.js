import React, { Component } from "react";
import { View } from "react-native";
import Deck from "../components/Deck";
import ColoredButton from "../components/ColoredButton";
import TransparentButton from "../components/TransparentButton";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { removeDeck } from "../actions";
const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export class DeckDetail extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }
  handleDelete = (id) => {
    this.props.removeDeck(id);
    this.props.navigation.goBack();
  };
  render() {
    const { navigation, deck } = this.props;
    console.log('deck', deck);
    return (
      <ViewContainer>
        {/* <Deck deck={deck} /> */}
        <View>
          <ColoredButton
            btnBackground={"white"}
            txtColor={"black"}
            onPress={() =>
              navigation.navigate("NewCard", { title: deck.title })
            }
          >
            Add Card
          </ColoredButton>
          <ColoredButton
            btnBackground={"black"}
            txtColor={"white"}
            onPress={() => navigation.navigate("Quiz", { title: deck.title })}
          >
            Start Quiz
          </ColoredButton>
          <TransparentButton
            txtColor={"red"}
            onPress={() => this.handleDelete(deck.title)}
          >
            Delete Deck
          </TransparentButton>
        </View>
      </ViewContainer>
    );
  }
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.title;
  const deck = state[title];
  return {
    deck,
  };
};
export default connect(mapStateToProps, { removeDeck })(DeckDetail);
