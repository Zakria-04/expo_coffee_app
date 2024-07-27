import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Favourite from "../screens/Favourite";

const Nav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({});
