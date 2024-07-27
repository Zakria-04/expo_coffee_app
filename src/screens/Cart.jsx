import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { createContext, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartContext from "@/store/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Cart</Text>
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
