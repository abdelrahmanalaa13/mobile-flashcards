import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import ColoredButton from "./ColoredButton";
import styled from "styled-components/native";

const TitleText = styled.Text`
  text-align: center;
  font-size: 32;
`;

const TextInputStyled = styled.TextInput`
  border-width: 2;
  border-color: gray;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5;
  font-size: 20;
  height: 40;
`;

export class NewDeck extends Component {
  state = {
    text: "",
  };
  handleChange = (text) => {
    this.setState({ text });
  };
  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <TitleText>What is the title of your new deck?</TitleText>
        </View>
        <View style={{ marginBottom: 20 }}>
          <TextInputStyled
            value={this.state.value}
            onChangeText={this.handleChange}
          />
        </View>
        <ColoredButton
          btnBackground={"green"}
          txtColor={"white"}
          onPress={() => console.log("create")}
        >
          Create Deck
        </ColoredButton>
      </View>
    );
  }
}

export default NewDeck;
