import React from "react";
import { StyleSheet, View } from "react-native";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import DeckDetail from "./components/DeckDetail";
import NewCard from "./components/NewCard";
import Quiz from "./components/Quiz";
import styled from "styled-components/native";

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 50px 20px 20px 20px;
`;
export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        {/* <DeckList /> */}
        {/* <NewDeck /> */}
        {/* <DeckDetail /> */}
        {/* <NewCard /> */}
        <Quiz />
      </AppContainer>
    );
  }
}
