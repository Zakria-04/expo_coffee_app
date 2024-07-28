import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { createContext, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartContext from "@/store/CartContext";
import EmptyList from "../components/EmptyList";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const checkIfCartInOrders = () => {
    return <EmptyList exptyMessage="Your cart is Empty" />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {cart.length === 0 ? (
          checkIfCartInOrders()
        ) : (
          <View>
            <Text>Not Empty</Text>
            <Ionicons name="heart-outline" size={30} color={"red"} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021526",
  },
});
