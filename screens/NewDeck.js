import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import ColoredButton from "../components/ColoredButton";
import styled from "styled-components/native";
import { addDeck } from "../actions";
import { connect } from "react-redux";
import { setDeckTitle } from "../utils/APIs";
import Colors from "../utils/Colors";

const TitleText = styled.Text`
  text-align: center;
  font-size: 32px;
`;

const TextInputStyled = styled.TextInput`
  border-width: 2px;
  border-color: ${Colors.black};
  background-color: ${Colors.white};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 20px;
  height: 40px;
`;

export class NewDeck extends Component {
  state = {
    text: "",
  };

  handleChange = (text) => {
    this.setState({ text });
  };
  handleSubmit = () => {
    const { addDeck, navigation } = this.props;
    setDeckTitle(this.state.text);
    addDeck(this.state.text);
    this.setState(() => ({ text: "" }));
    navigation.goBack();
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
          btnBackground={Colors.green}
          txtColor={Colors.white}
          onPress={this.handleSubmit}
          disabled={this.state.text === ''}
        >
          Create Deck
        </ColoredButton>
      </View>
    );
  }
}

export default connect(null, { addDeck })(NewDeck);
