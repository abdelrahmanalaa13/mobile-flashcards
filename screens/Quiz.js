import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import TransparentButton from "../components/TransparentButton";
import ColoredButton from "../components/ColoredButton";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { clearLocalNotification, setLocalNotification } from "../utils/helper";
const answerTypes = {
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  justify-content: center;
  text-align: center;
`;

const TitleScore = styled.Text`
  font-size: 22px;
  text-align: center;
`;

const TitleText = styled.Text`
  font-size: 32px;
  text-align: center;
`;

const QuestionText = styled.Text`
  font-size: 28px;
  text-align: center;
`;

export class Quiz extends Component {
  state = {
    isAnswerScreen: false,
    showResult: false,
    currentQuestionIndex: 0,
    correctScore: 0,
    questionsCount: this.props.questions.length,
    answered: Array(this.props.questions.length).fill(false),
  };
  handleReset = () => {
    this.setState({
      isAnswerScreen: false,
      showResult: false,
      currentQuestionIndex: 0,
      correctScore: 0,
      questionsCount: this.props.questions.length,
      answered: Array(this.props.questions.length).fill(false),
    });
  };

  handleAnswer = (response, page) => {
    if (response === answerTypes.CORRECT) {
      this.setState((prevState) => ({
        correctScore: prevState.correctScore + 1,
      }));
    }
    this.setState(
      (prevState) => ({
        answered: prevState.answered.map((val, idx) =>
          page === idx ? 1 : val
        ),
      }),
      () => {
        const { currentQuestionIndex, questionsCount } = this.state;
        if (questionsCount === currentQuestionIndex + 1) {
          this.setState({ showResult: true });
        } else {
          this.setState((prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            isAnswerScreen: false,
          }));
        }
      }
    );
    clearLocalNotification().then(setLocalNotification);
  };
  render() {
    const { questions } = this.props;
    const {
      isAnswerScreen,
      questionsCount,
      answered,
      correctScore,
      currentQuestionIndex,
      showResult,
    } = this.state;
    const question = questions[currentQuestionIndex];

    if (!showResult) {
      return (
        <ViewContainer>
          <View style={{ textAlign: "center" }}>
            <View style={{ marginBottom: 20 }}>
              <TitleScore>
                {currentQuestionIndex + 1} / {questionsCount}
              </TitleScore>
            </View>
            <View style={[{ marginBottom: 20 }]}>
              <TitleText>{!isAnswerScreen ? "Question" : "Answer"}</TitleText>
              <View>
                <QuestionText>
                  {!isAnswerScreen ? question.question : question.answer}
                </QuestionText>
              </View>
            </View>
            {!isAnswerScreen ? (
              <TransparentButton
                txtColor={"#0000ff"}
                onPress={() => this.setState({ isAnswerScreen: true })}
              >
                Show Answer
              </TransparentButton>
            ) : (
              <TransparentButton
                txtColor={"#0000ff"}
                onPress={() => this.setState({ isAnswerScreen: false })}
              >
                Show Question
              </TransparentButton>
            )}
          </View>
          <View>
            <ColoredButton
              btnBackground={"#00ff00"}
              txtColor={"#ffffff"}
              onPress={() =>
                this.handleAnswer(answerTypes.CORRECT, currentQuestionIndex)
              }
              disabled={answered[currentQuestionIndex]}
            >
              Correct
            </ColoredButton>
            <ColoredButton
              btnBackground={"#ff0000"}
              txtColor={"#ffffff"}
              onPress={() =>
                this.handleAnswer(answerTypes.INCORRECT, currentQuestionIndex)
              }
              disabled={answered[currentQuestionIndex]}
            >
              Incorrect
            </ColoredButton>
          </View>
        </ViewContainer>
      );
    } else {
      return (
        <ViewContainer>
          <View style={{ marginBottom: 20 }}>
            <TitleScore>Done</TitleScore>
          </View>
          <View style={{ marginBottom: 20 }}>
            <TitleText>Quiz Complete!</TitleText>
            <TitleScore>
              {correctScore} / {questionsCount} correct
            </TitleScore>
          </View>
          <View style={{ marginBottom: 20 }}>
            <TitleScore>
              Percentage: {+((correctScore / questionsCount) * 100).toFixed(2)}%
            </TitleScore>
          </View>
          <View>
            <ColoredButton
              btnBackground={"#00ff00"}
              txtColor={"#ffffff"}
              onPress={this.handleReset}
            >
              Restart Quiz
            </ColoredButton>
            <ColoredButton
              btnBackground={"gray"}
              txtColor={"#ffffff"}
              onPress={() => {
                this.handleReset();
                this.props.navigation.navigate("Home");
              }}
            >
              Go Home
            </ColoredButton>
          </View>
        </ViewContainer>
      );
    }
  }
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.title;
  const deck = state[title];
  return {
    questions: deck.questions,
  };
};
export default connect(mapStateToProps)(Quiz);
