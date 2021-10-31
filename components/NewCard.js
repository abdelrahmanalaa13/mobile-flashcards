import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
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

export class NewCard extends Component {
  state = {
    question: "",
    answer: "",
  };
  handleQuestionChange = (question) => {
    this.setState({ q });
  };
  handleAnswerChange = (a) => {
    this.setState({ a });
  };
  render() {
    return (
      <View>
        <View>
          <View style={{ marginBottom: 20 }}>
            <TitleText>Add a question</TitleText>
          </View>
          <View style={{ marginBottom: 20 }}>
            <TextInputStyled
              value={this.state.question}
              onChangeText={this.handleQuestionChange}
              placeholder="Question"
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TextInputStyled
              value={this.state.a}
              onChangeText={this.handleAnswerChange}
              placeholder="Answer"
            />
          </View>
        </View>
        <ColoredButton
          btnBackground={"green"}
          txtColor={"white"}
          onPress={() => console.log("card added")}
        >
          Submit
        </ColoredButton>
      </View>
    );
  }
}

export default NewCard;
