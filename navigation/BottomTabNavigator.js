// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../utils/Colors";
import DeckList from "../screens/DeckList";
import NewDeck from "../screens/NewDeck";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="DeckTab"
      screenOptions={{ tabBarActiveTintColor: Colors.tint }}
    >
      <BottomTab.Screen
        name="Decks"
        component={DeckListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-card" color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Add Deck"
        component={NewDeckNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-add" color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DeckListStack = createStackNavigator();

function DeckListNavigator() {
  return (
    <DeckListStack.Navigator>
      <DeckListStack.Screen
        name="DeckListScreen"
        component={DeckList}
        options={{ headerShown: false }}
      />
    </DeckListStack.Navigator>
  );
}

const NewDeckStack = createStackNavigator();

function NewDeckNavigator() {
  return (
    <NewDeckStack.Navigator>
      <NewDeckStack.Screen
        name="NewDeckScreen"
        component={NewDeck}
        options={{ headerShown: false }}
      />
    </NewDeckStack.Navigator>
  );
}
