import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../src/screens/Home";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default _layout;

