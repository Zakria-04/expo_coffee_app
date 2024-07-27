import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../App";
import ProductScreen from "../src/screens/ProductScreen";

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="app" component={App} />
      <Stack.Screen name="product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
