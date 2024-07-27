import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainNav from "./index";
import CartProvider from "../store/CartProvider";

const StackNav = () => {
  return (
    <View style={{ flex: 1 }}>
      <CartProvider>
        <MainNav />
      </CartProvider>
    </View>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
