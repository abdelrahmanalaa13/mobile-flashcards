import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATA } from "./_DATA";

const STORAGE_KEY = "DEACKS";

export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(STORAGE_KEY);
    if (storeResults) {
      return JSON.parse(storeResults);
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
      return DATA;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(STORAGE_KEY);

    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.error(err);
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
    console.error(err);
  }
}

export async function removeDeck(key) {
  try {
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(results);
    data[key] = null;
    delete data[key];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error(err);
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
    console.error(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error(err);
  }
}

export async function setDeckTitle(title) {
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
    console.error(err);
  }
}

export async function setCardToDeck(title, card) {
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
    console.error(err);
  }
}

export async function removeSavedDeck(key) {
  try {
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(results);
    data[key] = null;
    delete data[key];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}
