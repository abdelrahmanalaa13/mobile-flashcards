import { AsyncStorage } from "react-native";
import { DATA } from "./_DATA";

const STORAGE_KEY = "DEACKS";

export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(STORAGE_KEY);

    if (storeResults === null) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
    }

    return storeResults === null ? DATA : JSON.parse(storeResults);
  } catch (err) {
    console.log(err);
  }
}

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(STORAGE_KEY);

    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function removeDeck(key) {
  try {
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const deck = await getDeck(title);

    await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.log(err);
  }
}