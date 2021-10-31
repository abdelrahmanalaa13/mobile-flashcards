import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

export default function ColoredButton({
  children,
  onPress,
  btnBackground = "",
  txtColor = "",
}) {
  const ButtonViewContainer = styled.View`
    align-items: center;
    margin-bottom: 20;
  `;

  const ButtonTouchableOpacity = styled.TouchableOpacity`
    width: 200;
    height: 50;
    background-color: ${btnBackground};
    border-radius: 4;
    justify-content: center;
    align-items: center;
    border-width: 2;
    border-color: black;
  `;
  const ButtonText = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: ${txtColor};
  `;
  return (
    <ButtonViewContainer>
      <ButtonTouchableOpacity onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </ButtonTouchableOpacity>
    </ButtonViewContainer>
  );
}
