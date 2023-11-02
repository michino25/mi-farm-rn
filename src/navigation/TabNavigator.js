import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CartStackNavigator,
  MainStackNavigator,
  TestStackNavigator,
  SearchStackNavigator,
  ProfileStackNavigator,
} from "./StackNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Test"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#65a30d",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          overflow: "hidden",
          backgroundColor: "#fff",
          height: 60,
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          borderColor: "#fff",
        },
      }}
    >
      {/* <Tab.Screen
        name="Test"
        component={TestStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="bug-report" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
