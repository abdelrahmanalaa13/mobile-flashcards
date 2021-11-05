import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

export default function TransparentButton({
  children,
  onPress,
  txtColor = "",
}) {
  const ButtonViewContainer = styled.View`
    align-items: center;
    margin-bottom: 20px;
  `;
  const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${txtColor};
  `;

  return (
    <ButtonViewContainer>
      <TouchableOpacity onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </TouchableOpacity>
    </ButtonViewContainer>
  );
}
