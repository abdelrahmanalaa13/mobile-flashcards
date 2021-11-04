import React, { Component } from "react";
import { View } from "react-native";
import Deck from "../components/Deck";
import ColoredButton from "../components/ColoredButton";
import TransparentButton from "../components/TransparentButton";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export class DeckDetail extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ViewContainer>
        <Deck />
        <View>
          <ColoredButton
            btnBackground={"white"}
            txtColor={"black"}
            onPress={() => navigation.navigate("AddCard")}
          >
            Add Card
          </ColoredButton>
          <ColoredButton
            btnBackground={"black"}
            txtColor={"white"}
            onPress={() => navigation.navigate("Quiz")}
          >
            Start Quiz
          </ColoredButton>
          <TransparentButton
            txtColor={"red"}
            onPress={() => console.log("deck deleted")}
          >
            Delete Deck
          </TransparentButton>
        </View>
      </ViewContainer>
    );
  }
}

export default DeckDetail;
