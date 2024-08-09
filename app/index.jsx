import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../App";
import ProductScreen from "../src/screens/ProductScreen";
import SignUp from './../src/components/SignUp';
import LogIn from './../src/components/LogIn';

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="app" component={App} />
      <Stack.Screen name="product" component={ProductScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={LogIn} />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
