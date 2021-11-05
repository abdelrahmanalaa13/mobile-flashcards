import React from "react";

import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { setLocalNotification } from "./utils/helper";
import Colors from "./utils/Colors";

const AppContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;
// const isLoadingComplete = useLoadedAssets();
// const colorScheme = useColorScheme();
const store = createStore(reducer, applyMiddleware(thunk, logger));
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppContainer>
            <Navigation />
            <StatusBar />
          </AppContainer>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
