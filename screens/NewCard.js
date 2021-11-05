import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import ColoredButton from "../components/ColoredButton";
import styled from "styled-components/native";
import { addQuestion } from "../actions/index";
import { connect } from "react-redux";
import { setCardToDeck } from "../utils/APIs";

const TitleText = styled.Text`
  text-align: center;
  font-size: 32px;
`;

const TextInputStyled = styled.TextInput`
  border-width: 2px;
  border-color: gray;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 20px;
  height: 40px;
`;

export class NewCard extends Component {
  state = {
    question: "",
    answer: "",
  };
  handleQuestionChange = (question) => {
    this.setState({ question });
  };
  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    console.log("card", this.props);
    const { addQuestion, title, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    setCardToDeck(title, card);
    addQuestion(title, card);
    this.setState({ question: "", answer: "" });
    navigation.goBack();
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
          onPress={this.handleSubmit}
        >
          Submit
        </ColoredButton>
      </View>
    );
  }
}

const mapStateToProps = (state, { route }) => {
  console.log("route", route);
  const title = route.params.title;
  return {
    title,
  };
};
export default connect(mapStateToProps, { addQuestion })(NewCard);
