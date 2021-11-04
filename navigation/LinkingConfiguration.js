/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      DeckList: {
        screens: {
          DeckList: "DeckList",
        },
      },
      NewDeck: {
        screens: {
          NewDeck: "NewDeck",
        },
      },
      DeckDetail: {
        screens: {
          DeckDetail: "DeckDetail",
        },
      },
      NewCard: {
        screens: {
          NewCard: "NewCard",
        },
      },
      Quiz: {
        screens: {
          Quiz: "Quiz",
        },
      },
      NotFound: "*",
    },
  },
};
