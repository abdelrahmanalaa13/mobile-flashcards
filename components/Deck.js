import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  align-items: center;
  flex-basis: 120px;
`;
const CardText = styled.Text`
  font-size: 18px;
  color: black;
`;
const Deck = (props) => {
  console.log('deckProp',props);
  const { deck } = props;
  return (
    <ViewContainer>
      <View>
        <Text style={{ fontSize: 28 }}>{deck.title}</Text>
      </View>
      <View>
        <CardText>{deck?.questions?.length} cards</CardText>
      </View>
    </ViewContainer>
  );
};

export default Deck;
