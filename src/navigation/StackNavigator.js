import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import CartScreen from "../screens/CartScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="detail-screen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="cart-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="cart-screen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile-screen" component={ProfileScreen} />
      <Stack.Screen name="signup-screen" component={SignUpScreen} />
      <Stack.Screen name="signin-screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="search-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="search-screen" component={SearchScreen} />
      <Stack.Screen
        name="search-result-screen"
        component={SearchResultScreen}
      />
    </Stack.Navigator>
  );
};

const TestStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="test-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="test-screen" component={TestScreen} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  CartStackNavigator,
  ProfileStackNavigator,
  SearchStackNavigator,
  TestStackNavigator,
};
