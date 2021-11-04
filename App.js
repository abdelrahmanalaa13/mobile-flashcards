import React from "react";

import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;
// const isLoadingComplete = useLoadedAssets();
// const colorScheme = useColorScheme();
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer>
          <Navigation colorScheme={"light"} />
          <StatusBar />
        </AppContainer>
      </SafeAreaProvider>
    );
  }
}
