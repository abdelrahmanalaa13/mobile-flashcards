import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TransparentButton from "./TransparentButton";
import ColoredButton from "./ColoredButton";
import styled from "styled-components/native";

const screen = {
  QUESTION: "question",
  ANSWER: "answer",
  RESULT: "result",
};
const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

const ViewContainerComplete = styled.View`
  flex: 1;
  justify-content: space-around;
  justify-content: center;
`;
export class Quiz extends Component {
  state = {
    screen: screen.RESULT,
  };
  render() {
    switch (this.state.screen) {
      case screen.QUESTION:
        return (
          <ViewContainer>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 24 }}>2 / 2</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>Does React Native work with Android?</Text>
            </View>
            <TransparentButton
              txtColor={"red"}
              onPress={() => this.setState({ screen: screen.ANSWER })}
            >
              Answer
            </TransparentButton>
            <View>
              <ColoredButton
                btnBackground={"green"}
                txtColor={"white"}
                onPress={() => console.log("answer correct")}
              >
                Correct
              </ColoredButton>
              <ColoredButton
                btnBackground={"green"}
                txtColor={"white"}
                onPress={() => console.log("answer incorrect")}
              >
                Incorrect
              </ColoredButton>
            </View>
          </ViewContainer>
        );
      case screen.ANSWER:
        return (
          <ViewContainer>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 24 }}>2 / 2</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text>
                Yes! React Native works with Android, iOS, Windows, & Web.
              </Text>
            </View>
            <TransparentButton
              txtColor={"red"}
              onPress={() => this.setState({ screen: screen.QUESTION })}
            >
              Question
            </TransparentButton>
            <View>
              <ColoredButton
                btnBackground={"green"}
                txtColor={"white"}
                onPress={() => console.log("answer correct")}
              >
                Correct
              </ColoredButton>
              <ColoredButton
                btnBackground={"red"}
                txtColor={"white"}
                onPress={() => console.log("answer incorrect")}
              >
                Incorrect
              </ColoredButton>
            </View>
          </ViewContainer>
        );
      case screen.RESULT:
        return (
          <ViewContainerComplete>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 26, textAlign: "center" }}>
                Quiz Complete!
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 24, textAlign: "center" }}>
                Percentage correct
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: "red", fontSize: 46, textAlign: "center" }}>
                87%
              </Text>
            </View>
          </ViewContainerComplete>
        );
    }
  }
}

export default Quiz;
