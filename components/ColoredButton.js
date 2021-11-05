import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

export default function ColoredButton({
  children,
  onPress,
  disabled,
  btnBackground = "",
  txtColor = "",
}) {
  const ButtonViewContainer = styled.View`
    align-items: center;
    margin-bottom: 20px;
  `;

  const ButtonTouchableOpacity = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    background-color: ${btnBackground};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: black;
    opacity: ${disabled ? 0.5 : 1};
  `;
  const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${txtColor};
    `;
  return (
    <ButtonViewContainer>
      <ButtonTouchableOpacity disabled={disabled} onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </ButtonTouchableOpacity>
    </ButtonViewContainer>
  );
}
