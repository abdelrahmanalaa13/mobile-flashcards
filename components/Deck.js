import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  align-items: center;
  flex-basis: 120;
`;
const CardText = styled.Text`
  font-size: 18;
  color: black;
`;
const Deck = () => {
  return (
    <ViewContainer>
      <View>
        <Text style={{ fontSize: 28 }}>Deck 1</Text>
      </View>
      <View>
        <CardText>3 cards</CardText>
      </View>
    </ViewContainer>
  );
};

export default Deck;
