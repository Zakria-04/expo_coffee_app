import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainNav from "./index";
import CartProvider from "../store/CartProvider";
import FavouriteProvider from "../store/FavouriteProvider";

const StackNav = () => {
  return (
    <View style={{ flex: 1 }}>
      <CartProvider>
        <FavouriteProvider>
          <MainNav />
        </FavouriteProvider>
      </CartProvider>
    </View>
  );
};

export default StackNav;
