import React, { Component } from "react";
import { View } from "react-native";
import Deck from "./Deck";
import ColoredButton from "./ColoredButton";
import TransparentButton from "./TransparentButton";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export class DeckDetail extends Component {
  render() {
    return (
      <ViewContainer>
        <Deck />
        <View>
          <ColoredButton
            btnBackground={"white"}
            txtColor={"black"}
            onPress={() => console.log("card added")}
          >
            Add Card
          </ColoredButton>
          <ColoredButton
            btnBackground={"black"}
            txtColor={"white"}
            onPress={() => console.log("quiz started")}
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
